import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import {LoggingService} from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
