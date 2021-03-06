import {Component, OnInit} from '@angular/core';
import {Person} from '../../person.model';
import {LoggingService} from '../../LoggingService.service';
import {PeopleService} from '../../people.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  nameInput: string;
  lastNameInput: string;
  index: number;
  modoEdicion: number;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute) {
    this.peopleService.greet.subscribe(
      (index: number) => alert('The index is ' + index)
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      const persona: Person = this.peopleService.encontarPersona(this.index);
      this.nameInput = persona.name;
      this.lastNameInput = persona.lastName;
    }
  }

  onGuardarPersona() {
    const person1 = new Person(this.nameInput, this.lastNameInput);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.peopleService.modificarPersona(this.index, person1);
    } else {
      this.peopleService.addPerson(person1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.index != null) {
      this.peopleService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
