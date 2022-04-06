import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { StepperOrientation } from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputLabel1:string = "Nom"
  inputLabel2:string = "Prénom"

  constructor() {
  }

  ButtonNext(){

  }
  ButtonPrevious(){

  }

}
