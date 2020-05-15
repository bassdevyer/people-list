import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Person} from '../person.model';
import {LoggingService} from '../LoggingService.service';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('lastNameInput') lastNameInput: ElementRef;

  constructor(private loggingService: LoggingService,
              private peopleService: PeopleService) {
    this.peopleService.greet.subscribe(
      (index: number) => alert('The index is ' + index)
    );
  }

  ngOnInit(): void {
  }

  onAddPerson() {
    const person1 = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);
    this.peopleService.addPerson(person1);
  }

}
