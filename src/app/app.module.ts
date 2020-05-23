import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PersonComponent} from './personas/person/person.component';
import {FormComponent} from './personas/form/form.component';
import {LoggingService} from './LoggingService.service';
import {PeopleService} from './people.service';
import {PersonasComponent} from './personas/personas.component';
import {ErrorComponent} from './error/error.component';
import {DataServices} from './data.services';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent,
    PersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingService, PeopleService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
