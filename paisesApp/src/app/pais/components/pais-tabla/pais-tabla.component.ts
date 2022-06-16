import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  //recibo lo que manda el components por pais en [paises] tiene que tener el mismo nombre del html
  @Input() paises: Country[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
