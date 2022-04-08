import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div>
      <p>
        welcome
      </p>
      <button [routerLink]="['/form/1']" routerLinkActive="router-link-active">Commençer</button>
    </div>
  `,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
