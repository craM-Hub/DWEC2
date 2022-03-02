import { Component, OnInit } from '@angular/core';
import  { ArticulosService } from '../articulos.service';
@Component({
  selector: 'app-ej7',
  templateUrl: './ej7.component.html',
  styleUrls: ['./ej7.component.css']
})
export class Ej7Component implements OnInit {
  articulos: any;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService.retornar()
      .subscribe( result =>  this.articulos = result)
  }

}
