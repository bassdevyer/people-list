import {Component} from '@angular/core';
import {Person} from './person.model';
import {LoggingService} from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'People List';
  people: Person[] = [new Person('Juan', 'Perez'), new Person('Laura', 'Juarez')];


  constructor(private loggingService: LoggingService) {
  }

  onPersonAdded(person: Person) {
    this.loggingService.sendMessageToConsole('Adding a new person to array: ' + person.name);
    this.people.push(person);
  }

}
