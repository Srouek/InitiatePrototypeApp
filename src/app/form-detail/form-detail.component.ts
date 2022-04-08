import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { LabelForm } from './../Shared/label-form';
import { Component, OnInit } from '@angular/core';
import { dataLabel } from '../Shared/label-form-data';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ]
})
export class FormDetailComponent implements OnInit {

  page1 : boolean = true;
  pageId:number
  constructor(private route : ActivatedRoute
            , private router : Router
            , fb : FormBuilder) {
              this.pageId = +this.route.snapshot.paramMap.get("id");
              this.data = dataLabel.filter(v => v.pageID = this.pageId).pop();
              this.contract = fb.group({
                cdd:false,
                cdi:false,
                alternance: false,
                partTime:false
              })
            }

  backPage:number;
  nextPage: number;
  data : LabelForm;
  genre: string[] = ['Homme','Femme','Non Binaire','Je prefère ne pas me définir'];
  brancheActivite : string[] = ["BTP", "Numérique", "Santé", "Finances"];
  dreamJob: string[] = ["UX Designer","UI Designer","Directeur Artistique"];
  uxTools : string[] = ["Figma","Adobe XD","Miro","Maze"];
  formation : string[] = ["J'ai été formé dans mon entreprise","Oui lors de mon cursus"," Non" ];
  expertise : string[] = ["Recherche","Idéation","Prototypage","Test utilisateur"];
  experience : string[] = ["Je n'ai pas encore eu d'expérience", "Quelques missions", "Plus d'un an"];
  diploma : string[] = ["Brevet", "Bac", "CAP", "Bac +2", "Bac +3", "Bac +5", "Bac +7"];
  experiencePro : string[] = ["Je cherche ma première expérience", "Moins d'un an", "Entre 1 et 2 ans", "Entre 2 et 5 ans", "Plus de 5 ans"];
  teleTravail : string[] = ["Temps plein", "Partiel", "Je ne souhaite pas télétravailler"];
  contract : FormGroup


  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get("id");
    this.nextPage = +this.data.pageID
  }


  btnNext(){
    if(this.nextPage > 1){
      this.router.navigate(['form/',this.nextPage])
    }
  }
  btnBack(){
    if(this.backPage != null){
      this.router.navigate(['form/',this.backPage])
    }
  }

}
