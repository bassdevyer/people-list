import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'People List';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9t318d-ofMz0aefbV43Z3M8YGtUlboSQ',
      authDomain: 'listado-personas-c3d21.firebaseapp.com',
    });
  }
}
