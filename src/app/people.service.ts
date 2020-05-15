import {Person} from './person.model';
import {LoggingService} from './LoggingService.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PeopleService {
  people: Person[] = [new Person('Juan', 'Perez'), new Person('Laura', 'Juarez')];

  constructor(private loggingService: LoggingService) {
  }

  addPerson(person: Person) {
    this.loggingService.sendMessageToConsole('adding person: ' + person.name);
    this.people.push(person);
  }
}
