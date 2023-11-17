import { Controller, Get, NotFoundException, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user';

const users: User[] = [
  {
    name: 'Mátyás',
    email: 'matyas@hunyadi.hu',
    eletkor: 42,
  },
  {
    name: 'Jakab',
    email: 'jakab@example.com',
    eletkor: 42,
  },{
    name: 'Kleopátra',
    email: 'kleo@hpiramis.hu',
    eletkor: 31,
  }
];

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

  @Get('sajatprofil')
  @Render('profil')
  getSajatProfil() {
    const user = users[0];
    return {
      name: user.name,
      email: user.email,
      eletkor: user.eletkor,
    };
  }

  @Get('profil/:userid')
  @Render('profil')
  getProfil(@Param('userid') id: number) {
    if(id < 0 || id >= users.length)
    {
      throw new NotFoundException('Nincs ilyen hibauzenet')
    }
    const user = users[id];

    return {
      name: user.name,
      email: user.email,
      eletkor: user.eletkor,
    };
  }

  @Get('users')
  @Render('users')
  getUsers() {
    return {
      users: users,
    };
  }

}
