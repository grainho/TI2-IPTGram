import { Component, OnInit, Input } from '@angular/core';
import { FotoService, Comentarios } from 'src/app/servicos/foto.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() argum;
  public _comentarios : Comentarios[];


  constructor(private comentarios: FotoService) {
    this._comentarios = [];
    this.comentarios.getComentarios(this.argum).subscribe(
      (resultado) => {
        this._comentarios = resultado;
      }
    );
  }

  ngOnInit() {

    this.comentarios.getComentarios(this.argum).subscribe(
      (resultado)=>{
        this._comentarios= resultado;
      }
    );
  }

}
