import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  fecha = new Date();
  today = this.fecha.getDate()+'-'+(this.fecha.getMonth()+1)+'-'+this.fecha.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
