import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  guests : Person[];
  searchGuest : Person = new Person();

  constructor(private peopleService : PeopleService) { }

  getPeople() {
    this.peopleService.getPeople().subscribe(results => this.guests = results);
  }

  findPerson(searchGuest? : Person) {
    console.log(searchGuest);
    this.peopleService.findPerson(searchGuest).subscribe(results => this.guests = results);
    console.log("guests array: " + this.guests.length)
  }

  ngOnInit() {
    this.getPeople();
  }

}
