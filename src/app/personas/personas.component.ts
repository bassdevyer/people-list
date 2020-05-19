import {Component, OnInit} from '@angular/core';
import {Person} from '../person.model';
import {PeopleService} from '../people.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  people: Person[] = [];

  constructor(
    private peopleService: PeopleService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }


}
