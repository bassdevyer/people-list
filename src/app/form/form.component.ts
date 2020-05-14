import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() personCreated = new EventEmitter<Person>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddPerson(nameInput: HTMLInputElement, lastNameInput: HTMLInputElement) {
    const person1 = new Person(nameInput.value, lastNameInput.value);
    this.personCreated.emit(person1);
  }

}
