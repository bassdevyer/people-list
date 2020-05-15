import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person.model';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Input() index: number;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
  }

  emitGreeting() {
    this.peopleService.greet.emit(this.index);
  }
}
