import { Injectable } from '@angular/core';
import { ExperiencePro } from 'src/experience-pro';
import { EXPERIENCES_PRO } from 'src/mock-experiences-pro';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceProService {

  constructor() { }

  getExperiencesPro(): Observable<ExperiencePro[]> {
    return of(EXPERIENCES_PRO);
  }



}
