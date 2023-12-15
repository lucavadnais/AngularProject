import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../utils/shared.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  name: string = '';
  age: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentName.subscribe((name) => {
      this.name = name? name : 'not defined';
    });
    this.sharedService.currentAge.subscribe((age) => {
      this.age = age ? age : 'not defined';
    });
  }
}
