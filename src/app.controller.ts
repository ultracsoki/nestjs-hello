import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '1234';
  }

  @Get('aloldal')
  getAloldal()
  {
    return 'Masik oldal';
  }

  @Get('html-kimenet')
  getHtml() {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Odal címe</title>
      </head>
      <body>
      <h1>Az oldalam címe</h1>
      <p>lorem ipsum 1234</p>
      </body>
    </html>
    `;
  }

  @Get('veletlen')
  @Render('main.ejs')
  getVeletlen() {
    
  }
}
