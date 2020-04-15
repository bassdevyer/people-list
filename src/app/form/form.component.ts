import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() personCreated = new EventEmitter<Person>();
  nameInput: string;
  lastNameInput: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddPerson() {
    let person1 = new Person(this.nameInput, this.lastNameInput);
    this.personCreated.emit(person1);
  }

}
