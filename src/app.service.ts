import { Injectable } from '@nestjs/common';
import { Cotizaciones } from './interfaces/cotizaciones.interface';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { JSDOM } from 'jsdom';

@Injectable()
export class AppService {
  private cotizaciones: Cotizaciones;
  private DOLAR_HOY_URL: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {
    this.DOLAR_HOY_URL = this.config.get('DOLAR_HOY_URL');
    this.updateCotizaciones();
  }

  getCotizaciones() {
    return this.cotizaciones;
  }

  private async updateCotizaciones() {
    const res = (await lastValueFrom(this.httpService.get(this.DOLAR_HOY_URL))).data;

    const {
      window: { document },
    } = new JSDOM(res);

    const elements: NodeList = document.querySelectorAll('.val');

    let values = [];
    elements.forEach((x) => values.push(x.textContent));
    values = values.filter((x, i) => i !== 0 && i !== 1);

    this.cotizaciones = {
      blue: {
        compra: values[0],
        venta: values[1],
      },
      oficial: {
        compra: values[2],
        venta: values[3],
      },
      bolsa: {
        compra: values[4],
        venta: values[5],
      },
      ccl: {
        compra: values[6],
        venta: values[7],
      },
      crypto: {
        compra: values[8],
        venta: values[9],
      },
      solidario: {
        venta: values[10],
      },
    };
  }
}
