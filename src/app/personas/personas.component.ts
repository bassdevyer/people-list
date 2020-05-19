import {Component, OnInit} from '@angular/core';
import {Person} from '../person.model';
import {LoggingService} from '../LoggingService.service';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  people: Person[] = [];

  constructor(private loggingService: LoggingService,
              private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }


}
