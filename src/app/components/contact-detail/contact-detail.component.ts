import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../classes/Contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})

export class ContactDetail implements OnInit {
  @Input() contact: Contact;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.contactService.getContact(id)
          .then(contact => this.contact = contact);
      } else {
        this.navigated = false;
        this.contact = new Contact();
      }
    });
  }

  save(): void {
    this.contactService
      .saveContact(this.contact)
      .then(contact => {
        this.contact = contact; // saved new
        this.goBack(contact);
      })
      .catch(error => this.error = error);
  }

  goBack(savedContact: Contact = null): void {
    this.close.emit(savedContact);
    if (this.navigated) {
      window.history.back();
    } else {
      this.router.navigate(['']);
    }
  }
}
