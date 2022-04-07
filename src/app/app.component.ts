import { dataLabel } from './Shared/label-form-data';
import { LabelForm } from './Shared/label-form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  data : LabelForm[];

  inputLabel1:string = "Nom"
  inputLabel2:string = "Prénom"

  constructor() {
  }
  ngOnInit(): void {
    this.data = dataLabel;
  }

  ButtonNext(){

  }
  ButtonPrevious(){

  }

}
