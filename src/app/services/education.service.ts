import { Injectable } from '@angular/core';
import { Education } from 'src/objects/education';
import { EDUCATION_LIST } from 'src/mock-education-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  
  getEducationList(): Observable<Education[]> {
    return of(EDUCATION_LIST);
  }



}
