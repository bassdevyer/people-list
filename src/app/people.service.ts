import {Person} from './person.model';

export class PeopleService {
  people: Person[] = [new Person('Juan', 'Perez'), new Person('Laura', 'Juarez')];

  addPerson(person: Person) {
    this.people.push(person);
  }
}
