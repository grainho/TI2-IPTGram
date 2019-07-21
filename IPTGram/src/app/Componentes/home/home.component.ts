import { Component, OnInit } from '@angular/core';
import { FotoService, FotoList } from 'src/app/servicos/foto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public _procurar:string;
  public _fotos:FotoList[];
  public _mostrarFotos:FotoList[];


  constructor(private frame: FotoService){
    this._procurar = "";
    this._fotos = [];
    this._mostrarFotos = [];
  }

  ngOnInit() {
    this.frame.getFotos().subscribe((result: FotoList[])=>{
      this._fotos=result;
      this._mostrarFotos=result;
    });
  }

  public search(event): void {

    event.preventDefault();
   if (event.target.searchBox.value === this._procurar) return;
   this._procurar = event.target.searchBox.value;
   if(event.target.searchBox.value==""){

    this._mostrarFotos=this._fotos;
   }else{
     this._mostrarFotos=this._fotos.filter((each)=>{return each.id==event.target.searchBox.value;});
   }

}

  

}
