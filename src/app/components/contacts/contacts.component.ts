import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../classes/Contact';


@Component({
  selector: 'my-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts: Contact[];
  error: any;

  constructor(
    private router: Router,
    private contactService: ContactService) { }

  getContacts(): void {
    this.contactService
      .getContacts()
      .then((contacts) => this.contacts = contacts)
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getContacts();
  }

  delete(contact: Contact): void {
    this.contactService
      .deleteContact(contact)
      .then(res => this.contacts = this.contacts.filter(c => c !== contact))
      .catch(error => this.error = error);
  }

  gotoDetail(contact: Contact): void {
    if (contact == null) {
      this.router.navigate(['/detail']);
    } else {
      this.router.navigate(['/detail', contact.id]);
    }
  }

}
