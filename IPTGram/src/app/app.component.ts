import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from './servicos/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public _user:string;
  constructor(public autenticar: AutenticacaoService, private elementRef:ElementRef, private router : Router){
    this._user=autenticar.user_full_name;
  }

  title = 'IPTGram';
}
