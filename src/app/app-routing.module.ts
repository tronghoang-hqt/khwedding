import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvatationComponent } from './invatation/invatation.component';
import { InvatationGroomComponent } from './invatation-groom/invatation-groom.component';
import { InvatationBrideComponent } from './invatation-bride/invatation-bride.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'wedding' ,pathMatch: "full"
  },
  {
    path: 'wedding',
    component: HomeComponent
  },
  {
    path: 'wedding/invitation',
    component: InvatationComponent
  },
  {
    path: 'wedding/groom',
    component: InvatationGroomComponent
  },
  {
    path: 'wedding/bride',
    component: InvatationBrideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
