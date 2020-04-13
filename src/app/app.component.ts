import {Component} from '@angular/core';
import {Person} from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'People List';
  people: Person[] = [new Person('Juan', 'Perez'), new Person('Laura', 'Juarez')];
  nameInput: string;
  lastNameInput: string;

  onAddPerson() {
    let person1 = new Person(this.nameInput, this.lastNameInput);
    this.people.push(person1);
  }
}
