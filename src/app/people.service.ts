import {Person} from './person.model';
import {LoggingService} from './LoggingService.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class PeopleService {
  people: Person[] = [new Person('Juan', 'Perez'), new Person('Laura', 'Juarez')];

  greet = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {
  }

  addPerson(person: Person) {
    this.loggingService.sendMessageToConsole('adding person: ' + person.name);
    this.people.push(person);
  }

  encontarPersona(indice: number) {
    return this.people[indice];
  }

  modificarPersona(index: number, persona: Person){
    let persona1 = this.people[index];
    persona1.name = persona.name;
    persona1.lastName = persona.lastName;
  }
}
