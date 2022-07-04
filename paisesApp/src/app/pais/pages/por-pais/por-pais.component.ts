import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent{

  termino:string = '';
  hayError:boolean = false;
  // para tener la lista de paises
  paises : Country[] = [];
  // para paises sugeridos

  paisesSugeridos : Country[] = [];
// por defecto el falsa
  mostrarSugerencias : boolean = false;


  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    // y ahora tengo que ocultar la barra de sugerncias
    this.mostrarSugerencias = false;


    this.hayError = false;
    // el this.termino va a ser igual al termino que se recibe como argumento
    // es el que viene de input
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
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
    this.termino = termino;
    this.mostrarSugerencias= true;

    

    this.paisService.buscarPais(termino)
    // este arreglo se va a encargar de mostrar las sugerencias y con el splice corto la lista desde la 3ra posiscionm para mostrar 3 sugerencias nomas
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,3),
        // para pasar una lista vacia
        (err) => this.paisesSugeridos = []
        );
  }

  buscarSugerido(termino:string){
    this.buscar(termino);

    
  }




}
