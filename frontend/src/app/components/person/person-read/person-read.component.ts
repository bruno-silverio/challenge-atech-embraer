import { Component, OnInit } from '@angular/core';
import { Person } from "./../person.model";
import { PersonService } from "./../person.service";

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrl: './person-read.component.css'
})
export class PersonReadComponent implements OnInit {

  people!: Person[]
  displayedColumns = ['name', 'email', 'phone', 'action']

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.read().subscribe(people => {
      this.people = people
    })
  }
}
