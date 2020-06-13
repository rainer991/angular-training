import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  textoPadre: any;
  

  constructor() { }

  ngOnInit() {
  }
  recibirMensaje(mensaje:any) {
    this.textoPadre = mensaje; 
  }

}
