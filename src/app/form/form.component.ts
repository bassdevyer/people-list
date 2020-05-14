import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Person} from '../person.model';
import {LoggingService} from '../LoggingService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  @Output() personCreated = new EventEmitter<Person>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('lastNameInput') lastNameInput: ElementRef;

  constructor(private loggingService: LoggingService) {
  }

  ngOnInit(): void {
  }

  onAddPerson() {
    const person1 = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);
    this.loggingService.sendMessageToConsole('Sending person: ' + person1.name + ' lastname: ' + person1.lastName);
    this.personCreated.emit(person1);
  }

}
