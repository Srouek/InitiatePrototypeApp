import { dataLabel } from './Shared/label-form-data';
import { LabelForm } from './Shared/label-form';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  data : LabelForm[];


  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.data = dataLabel;
  }

  ButtonNext(){
    this.router.navigate(['form/1']);
  }
  ButtonPrevious(){

  }

}
