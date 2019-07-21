import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface User {
  full_name: string,
  userName: string
}
interface UserFromAPI{
  name: string,
  userName: string
}
export interface Credentials {
  userName: string,
	password: string
}
export interface ReceivedData {
  error : number,
  message : string,
  res: any
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  public static USER_LOGIN = "https://ipt-ti2-iptgram.azurewebsites.net/api/account/login";
  private _utilizador: User = null;

  constructor(private http: HttpClient, private router : Router) { 

  }

  getUtilizador(){
    return this._utilizador;
  }

  setUtilizador(utilizador: User){
    this._utilizador = utilizador;  
  }

  public autenticar(email: string, password: string): Observable<User>{
    console.log("Autenticando com:"+email, password);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(AutenticacaoService.USER_LOGIN,{userName: email, password: password}, httpOptions).pipe(
      map((user_data:UserFromAPI)=>{
        console.log(user_data);
        if(user_data){
          let novoUtilizador : User={full_name:user_data.name, userName: user_data.userName};
          this._utilizador = novoUtilizador;
          return novoUtilizador;
        }else{
          
        }
        return this._utilizador;
      }));
  }
  public estaAutenticado(){
    return this._utilizador != null;
  }

  get user_full_name(){
    return this.estaAutenticado() ? this._utilizador.full_name : "";
  }

  public forcaLogout(){
    this._utilizador = null;
    console.log("LogOut");
    this.router.navigate([""]);
    return ;
  }

}
