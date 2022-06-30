import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button{
      margin-right:5px;
    }
  
  `
  ]
})
export class PorRegionComponent{

  regiones: string[] = [  'EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']

  regionActiva:string = '';
  termino:string = '';
  hayError:boolean = false;

  paises : Country[] = [];

  constructor(private paisService:PaisService) { }

  activarRegion(region: string){
    // para que no vuelva a refrescar si se vuelve a hacer click en el mismo
    // si se hace click en la misma region no se vuelve a recargar la pagina
    if (region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paises=[];
    this.paisService.buscarRegion(region)
      .subscribe(paises => {
        this.paises = paises;
        console.log(paises);
      })

  }

  getClaseCSS(region: string):string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  buscar(termino:string){
    this.hayError = false;
    // el this.termino va a ser igual al termino que se recibe como argumento
    // es el que viene de input
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarRegion(this.termino)
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
