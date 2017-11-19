import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';

import { ContactService } from './services/contact.service';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetail } from './components/contact-detail/contact-detail.component';

import { AppRoutingModule } from  './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  providers: [ ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
