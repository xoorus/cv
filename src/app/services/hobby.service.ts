import { Injectable } from '@angular/core';
import { HOBBIES } from 'src/mock-hobbies';
import { Observable, of } from 'rxjs';
import { Hobby } from 'src/objects/hobby';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }

  
  getHobbies(): Observable<Hobby[]> {
    return of(HOBBIES);
  }


}
