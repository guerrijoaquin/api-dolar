import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API Dolar')
    // .setDescription('API con la cotización del dolar en tiempo real. Los datos son obtenidos de https://dolarhoy.com/')
    .setDescription(
      `<div>\n\n  API creada con <a href="https://docs.nestjs.com/" target="_blank">NestJS</a> que devuelve la cotización del dolar.
      \n\n Los datos son obtenidos de <a target="_blank" href="https://dolarhoy.com">Dolar Hoy.</a>
      \n\n Puedes ver el proyecto en <a href="https://github.com/guerrijoaquin/api-dolar" target="_blank">GitHub</a>.`,
    )
    .setVersion('1.0')
    .setContact('Joaquin Guerrini', null, 'joaquinguerrini1@gmail.com')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document, {
    customCss: `
      /* Estilos generales */
      body {
        font-family: 'Arial, sans-serif';
      }
  
      /* Barra superior */
      .swagger-ui .topbar {
        display: none;
        background-color: #2c3e50; /* Color de fondo de la barra superior */
        border-bottom: 1px solid #34495e; /* Borde inferior de la barra superior */
      }
  
      .swagger-ui .topbar-wrapper {
        padding: 0;
      }
  
      /* Títulos y descripciones */
      // .swagger-ui .info {
      //   background-color: #34495e; /* Color de fondo de la sección de información */
      //   border-bottom: 2px solid #2c3e50; /* Borde inferior de la sección de información */
      // }
  
      .swagger-ui .info hgroup {
        color: #ecf0f1; /* Color del texto de títulos en la sección de información */
      }
  
      /* Bloques de operaciones */
      .swagger-ui .opblock {
        border: 1px solid #ecf0f1; /* Borde alrededor de cada bloque de operaciones */
        margin-bottom: 10px;
      }
  
      /* Colores de botones y resaltados */
      .swagger-ui .btn {
        background-color: #3498db; /* Color de fondo de los botones */
        color: #ecf0f1; /* Color del texto de los botones */
      }
  
      .swagger-ui .execute-wrapper .btn.execute {
        background-color: #2ecc71; /* Color de fondo del botón de ejecución */
        color: #ecf0f1; /* Color del texto del botón de ejecución */
      }
  
      /* Desplegables y campos de entrada */
      .swagger-ui select, .swagger-ui input[type="text"], .swagger-ui input[type="password"] {
        background-color: #ecf0f1; /* Color de fondo de los campos de entrada */
      }
  
      /* Resaltado de código */
      .swagger-ui .highlight-code {
        background-color: #34495e; /* Color de fondo del código resaltado */
        color: #ecf0f1; /* Color del texto del código resaltado */
      }
  
      /* Otros estilos específicos según tus preferencias */
  
      /* Agrega más estilos según tus necesidades */
    `,
  });

  await app.listen(3000);
}
bootstrap();
