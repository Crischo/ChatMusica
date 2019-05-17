import { Injectable } from '@angular/core';

// importacion de http o httpClient segun la clase

import {Http, Headers, Response} from '@angular/http';

//importa la clace persona
import { ClasePersona  } from '../clases/Clase-Persona';
//enviroment
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  constructor( private http: Http
      ) { }
      getSalas(id: number) {
        const data = { id: id };   
     //   return this.http.post('http://192.168.0.107:80/server/chat/consultar_salas', JSON.stringify(data)).toPromise().then(
     console.log(this.http.post(environment.api+'chat/consultar_salas', JSON.stringify(data)));
     return this.http.post(environment.api+'chat/consultar_salas', JSON.stringify(data)).toPromise().then(
     
     
     respuesta => {
            return respuesta.json();
          }
        ).catch(
          error => {
            Promise.reject(error.message || error);
          }
        );
        
        
        }

        getNumMensages(nombreSala: any) {
    
 
        }

       

}
