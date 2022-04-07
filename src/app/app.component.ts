import { LabelForm } from './Shared/label-form';
import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { StepperOrientation } from '@angular/cdk/stepper';
import { dataLabel } from './Shared/label-form-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data : LabelForm[] = dataLabel

  inputLabel1:string = "Nom"
  inputLabel2:string = "Prénom"

  constructor() {
  }

  ButtonNext(){

  }
  ButtonPrevious(){

  }

}
