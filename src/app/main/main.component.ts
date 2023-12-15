import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedService} from "../../utils/shared.service";
import {ProfileComponent} from "../profile/profile.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ProfileComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  item = 'Enter a product id';
  name = 'Luca';
  age = '22';

  constructor(private sharedService: SharedService, private router: Router) {}

  navigateToProfile() {
    this.sharedService.setUserName(this.name);
    // redirect to profile page
    // this.router.navigate(['/profile']);
  }

  setAge() {
    this.sharedService.setUserAge(this.age);
  }
}
