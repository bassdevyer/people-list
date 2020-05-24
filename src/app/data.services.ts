import {HttpClient} from '@angular/common/http';
import {Person} from './person.model';
import {Injectable} from '@angular/core';
import {LoginService} from './login/login.service';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient,
              private loginService: LoginService) {
  }

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-c3d21.firebaseio.com/datos.json?auth=' + token);
  }

  guardarPersonas(personas: Person[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-c3d21.firebaseio.com/datos.json?auth=' + token, personas)
      .subscribe(
        response => console.log('resultado guardar Personas ' + response),
        error => console.log('Error al guardar personas ' + error)
      );
  }

  modificarPersona(index: number, persona: Person) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-c3d21.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log('resultado modificar Persona: ' + response),
        error => console.log('Error en modificar Persona: ' + error)
      );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-c3d21.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log('resultado eliminar Persona: ' + response),
        error => console.log('Error en eliminar Persona: ' + error)
      );
  }

}
