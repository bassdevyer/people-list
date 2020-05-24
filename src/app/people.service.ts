import {Person} from './person.model';
import {LoggingService} from './LoggingService.service';
import {EventEmitter, Injectable} from '@angular/core';
import {DataServices} from './data.services';

@Injectable()
export class PeopleService {
  people: Person[] = [];

  greet = new EventEmitter<number>();

  constructor(private loggingService: LoggingService, private dataServices: DataServices) {
  }

  setPersonas(personas: Person[]) {
    this.people = personas;
  }

  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }

  addPerson(person: Person) {
    this.loggingService.sendMessageToConsole('adding person: ' + person.name);
    if (this.people == null) {
      this.people = [];
    }
    this.people.push(person);
    this.dataServices.guardarPersonas(this.people);
  }

  encontarPersona(indice: number) {
    return this.people[indice];
  }

  modificarPersona(index: number, persona: Person) {
    let persona1 = this.people[index];
    persona1.name = persona.name;
    persona1.lastName = persona.lastName;
    this.dataServices.modificarPersona(index, persona1);
  }

  eliminarPersona(index: number) {
    this.people.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    // Se vuelve a guardar el arreglo
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.people != null) {
      this.dataServices.guardarPersonas(this.people);
    }
  }
}
