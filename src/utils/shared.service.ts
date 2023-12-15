import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // This is for the username
  private itemSource = new BehaviorSubject<string>('');
  currentName = this.itemSource.asObservable();

  setUserName(name: string) {
    this.itemSource.next(name);
  }

  // This is for the user age
  private ageSource = new BehaviorSubject<string>('');
  currentAge = this.ageSource.asObservable();

  setUserAge(age: string) {
    this.ageSource.next(age);
  }

  constructor() { }
}
