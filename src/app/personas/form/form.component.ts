import {Component, OnInit} from '@angular/core';
import {Person} from '../../person.model';
import {LoggingService} from '../../LoggingService.service';
import {PeopleService} from '../../people.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  nameInput: string;
  lastNameInput: string;

  constructor(
    private peopleService: PeopleService,
    private router: Router) {
    this.peopleService.greet.subscribe(
      (index: number) => alert('The index is ' + index)
    );
  }

  ngOnInit(): void {
  }

  onGuardarPersona() {
    const person1 = new Person(this.nameInput, this.lastNameInput);
    this.peopleService.addPerson(person1);
    this.router.navigate(['personas']);
  }
}
