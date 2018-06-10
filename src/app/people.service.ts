import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  people : Person[] = [
    new Person(1,'John', 'Smith', new Date('1985/06/9')),
    new Person(2,'Jane', 'Doe', new Date('1995/07/12')),
    new Person(3,'Jason', 'Borne', new Date('2000/11/16'))
  ];

  getPeople () : Observable<Person[]> {
    return of (this.people);
  }
  constructor() { }
}
