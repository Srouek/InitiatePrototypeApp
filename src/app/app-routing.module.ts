import { WelcomeComponent } from './welcome/welcome.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'welcome', pathMatch:'full'},
  { path:'welcome', component:WelcomeComponent },
  { path:'form/:id', component: FormDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
