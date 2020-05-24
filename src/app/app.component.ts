import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'People List';


  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9t318d-ofMz0aefbV43Z3M8YGtUlboSQ',
      authDomain: 'listado-personas-c3d21.firebaseapp.com',
    });
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}
