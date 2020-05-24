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

  modificarPersona(index: number, persona: Person) {
    let url: string;
    url = 'https://listado-personas-c3d21.firebaseio.com/datos/' + index + '.json';
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log('resultado modificar Persona: ' + response),
        error => console.log('Error en modificar Persona: ' + error)
      );
  }

  eliminarPersona(index: number) {
    let url: string;
    url = 'https://listado-personas-c3d21.firebaseio.com/datos/' + index + '.json';
    this.httpClient.delete(url)
      .subscribe(
        response => console.log('resultado eliminar Persona: ' + response),
        error => console.log('Error en eliminar Persona: ' + error)
      );
  }

}
