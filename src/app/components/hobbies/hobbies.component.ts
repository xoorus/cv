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

  fullhobbyList: Hobby[];
  hobbyListLeft: Hobby[];
  hobbyListRight: Hobby[];

  ngOnInit() {
    this.getHobbies();

    this.hobbyListLeft = [];
    this.hobbyListRight = [];

    this.fullhobbyList.forEach(hobby => {
      hobby.id % 2 ? this.hobbyListLeft.push(hobby) : this.hobbyListRight.push(hobby);
    });

    this.hobbyListLeft = this.shuffle(this.hobbyListLeft);
    this.hobbyListRight = this.shuffle(this.hobbyListRight);
  }
  
  getHobbies(): void {
    this.hobbyService.getHobbies()
    .subscribe(fullhobbyList => this.fullhobbyList = fullhobbyList);
  }

 shuffle(hobbies): Array<Hobby> {
    var currentIndex = hobbies.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = hobbies[currentIndex];
      hobbies[currentIndex] = hobbies[randomIndex];
      hobbies[randomIndex] = temporaryValue;
    }

    return hobbies;
  }
}
