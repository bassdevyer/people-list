import {HttpClient} from '@angular/common/http';
import {Person} from './person.model';
import {Injectable} from '@angular/core';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {
  }

  cargarPersonas() {
    return this.httpClient.get('https://listado-personas-c3d21.firebaseio.com/datos.json');
  }

  guardarPersonas(personas: Person[]) {
    this.httpClient.put('https://listado-personas-c3d21.firebaseio.com/datos.json', personas)
      .subscribe(
        response => console.log('resultado guardar Personas ' + response),
        error => console.log('Error al guardar personas ' + error)
      );
  }

}
