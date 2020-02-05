import { Component, OnInit } from '@angular/core';
import { Hobby } from 'src/objects/hobby';
import { HOBBIES } from 'src/mock-hobbies';
import { of, Observable } from 'rxjs';
import { HobbyService } from 'src/app/services/hobby.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor(private hobbyService: HobbyService) { }

  hobbyList: Hobby[];

  ngOnInit() {
    this.getHobbies();
  }
  
  getHobbies(): void {
    this.hobbyService.getHobbies()
    .subscribe(hobbyList => this.hobbyList = hobbyList);
  }
}
