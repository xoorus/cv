import { Component, OnInit } from '@angular/core';
import { Education } from 'src/objects/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private educationService: EducationService) { }

  educationList: Education[];

  ngOnInit() {
    this.getEducationList();
  }

  getEducationList(): void {
    this.educationService.getEducationList()
    .subscribe(educationList => this.educationList = educationList);
  }
}
