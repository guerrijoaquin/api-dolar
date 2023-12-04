import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { CotizacionesClass } from './interfaces/cotizaciones.interface';

@ApiTags('COTIZACIONES')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Devuelve la cotización del dolar en sus diferentes tipos de cambio.' })
  @ApiOkResponse({ type: CotizacionesClass })
  getCotizaciones() {
    return this.appService.getCotizaciones();
  }
}
