import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AutenticacaoService, ReceivedData } from './autenticacao.service';

export interface FotoList {
  id: number;
  caption: string;
  postedAt: Date;
  lastEditAt: Date;
  user: any;
  likes: number;
  isLiking: boolean;
  comments: number;
}

export interface Comentarios{
  id: number;
  text: string;
  postedAt: Date,
  user: any;
  post:any;
}

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  public static POSTS_LINK = "https://ipt-ti2-iptgram.azurewebsites.net/api/posts/";

  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) { }

  public getFotos(): Observable<FotoList[]> {

    return this.http.get(FotoService.POSTS_LINK).pipe
      (map((data: any) => {
        let fotos: FotoList[] = [];
        if (!data.errors) {
          fotos = data;
        }
        console.log(fotos);
        return fotos;
      })
      );
  }


  public getFoto(foto): Observable<FotoList[]> {

    return this.http.get(FotoService.POSTS_LINK + foto).pipe
      (map((data: any) => {
        let fotos: FotoList[] = [];
        if (!data.errors) {
          fotos = data;
        }
        console.log(fotos);
        return fotos;
      }))

  }

  public getComentarios(comentario): Observable<Comentarios[]> {    
    return this.http.get(FotoService.POSTS_LINK+comentario+"/comments")
      .pipe(
        map((data: any) => {
          let comment: Comentarios[];
          if (!data.errors) {
            comment = data;
          } 
          console.log (comment);
          return comment;
        })
      );
  }	  }
}

