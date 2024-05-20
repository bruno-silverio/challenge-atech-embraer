import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css'
})
export class PersonCreateComponent implements OnInit {
  person: Person = {
    name: '',
    email: '',
    phone: null
  }

  constructor(private personService: PersonService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createPerson(): void {
    this.personService.create(this.person).subscribe(() => {
      this.personService.showMessage('Cadastro criado!')
      this.router.navigate(['/people'])
    })

  }

  cancel(): void {
    this.router.navigate(['/people'])
  }
}
