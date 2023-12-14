import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvatationComponent } from './invatation/invatation.component';
import { InvatationGroomComponent } from './invatation-groom/invatation-groom.component';
import { InvatationBrideComponent } from './invatation-bride/invatation-bride.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/' ,pathMatch: "full"
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'khwedding/invitation',
    component: InvatationComponent
  },
  {
    path: 'khwedding/groom',
    component: InvatationGroomComponent
  },
  {
    path: 'khwedding/bride',
    component: InvatationBrideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
