import { Component, OnInit } from '@angular/core';
import { ExperiencePro } from 'src/experience-pro';
import { ExperienceProService } from '../../../services/experience-pro.service';

@Component({
  selector: 'app-experiences-pro',
  templateUrl: './experiences-pro.component.html',
  styleUrls: ['./experiences-pro.component.css']
})

export class ExperiencesProComponent implements OnInit {

  constructor(private experienceProService: ExperienceProService) { }

  experiencesPro: ExperiencePro[];

  ngOnInit() {
    this.getExperiencesPro();
  }

  getExperiencesPro(): void {
    this.experienceProService.getExperiencesPro()
    .subscribe(experiencesPro => this.experiencesPro = experiencesPro);
  }

}
