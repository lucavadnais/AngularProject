import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  faUser = faUser;
}
