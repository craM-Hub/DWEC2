import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-pipe',
  templateUrl: './fecha-pipe.component.html',
  styleUrls: ['./fecha-pipe.component.css']
})
export class FechaPipeComponent implements OnInit {
  fecha = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
