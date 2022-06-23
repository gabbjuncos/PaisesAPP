import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string = '';
  hayError:boolean = false;
  // para tener la lista de paises
  paises : Country[] = [];

  constructor(private paisService:PaisService) {}

  buscar(termino:string){
    this.hayError = false;
    // el this.termino va a ser igual al termino que se recibe como argumento
    // es el que viene de input
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises=paises;
      
        // para acceder a las propiedades
        //paises[0].languages[0].iso639_1;
      }, (err) => {
        //console.log('Error');
        //console.info(err)
        this.hayError = true;
        //si da un error la lista queda vacia
        this.paises = [];
        
      });
  }

  sugerencias(termino:string){
    this.hayError = false;
    //TODO: crear sugerencias 
  }
  

}


