import { ApiProperty } from '@nestjs/swagger';
import { GET_COTIZACIONES_RESPONSE_MOCK } from 'src/mock/get-cotizaciones-response.mock';

export interface Cotizaciones {
  blue: Cotizacion;
  oficial: Cotizacion;
  bolsa: Cotizacion;
  ccl: Cotizacion;
  crypto: Cotizacion;
  solidario: CotizacionSoloVenta;
}

export class CotizacionesClass {
  @ApiProperty({ example: GET_COTIZACIONES_RESPONSE_MOCK.blue })
  blue: Cotizacion;
  @ApiProperty({ example: GET_COTIZACIONES_RESPONSE_MOCK.oficial })
  oficial: Cotizacion;
  @ApiProperty({ example: GET_COTIZACIONES_RESPONSE_MOCK.bolsa })
  bolsa: Cotizacion;
  @ApiProperty({ example: GET_COTIZACIONES_RESPONSE_MOCK.ccl })
  ccl: Cotizacion;
  @ApiProperty({ example: GET_COTIZACIONES_RESPONSE_MOCK.crypto })
  crypto: Cotizacion;
  @ApiProperty({ example: GET_COTIZACIONES_RESPONSE_MOCK.solidario })
  solidario: CotizacionSoloVenta;
}

interface CotizacionSoloVenta {
  venta: string;
}

interface Cotizacion extends CotizacionSoloVenta {
  compra: string;
}
