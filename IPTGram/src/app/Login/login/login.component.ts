import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensagem : string = "";

  constructor(private app:AppComponent ,private autenticar : AutenticacaoService, private router : Router) { }

  submeter(event : any) {
    event.preventDefault();
    this.autenticar.autenticar(event.target.email.value,event.target.password.value).subscribe((res) => {
        this.router.navigate([""]);
      
    });
  }

  ngOnInit() {
  }

}
