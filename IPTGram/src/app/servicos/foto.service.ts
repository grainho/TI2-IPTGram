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
}

