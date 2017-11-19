import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../classes/Contact';

@Injectable()
export class ContactService {
  private contactsUrl = 'app/contacts';

  constructor(private http: Http) {
  }

  getContacts(): Promise<Array<Contact>> {
    return this.http
      .get(this.contactsUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Contact[];
      })
      .catch(this.handleError);
  }

  deleteContact(contact: Contact) {
    return this.delete(contact)
  }

  getContact(id: number): Promise<Contact> {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.id === id));
  }

  saveContact(contact: Contact): Promise<Contact> {
    if (contact.id) {
      return this.put(contact);
    }
    return this.post(contact);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  delete(contact: Contact): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.contactsUrl}/${contact.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(contact: Contact): Promise<Contact> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.contactsUrl, JSON.stringify(contact), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(contact: Contact): Promise<Contact> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.contactsUrl}/${contact.id}`;

    return this.http
      .put(url, JSON.stringify(contact), { headers: headers })
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }
}
