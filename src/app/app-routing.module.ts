import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { RequirementsComponent } from './requirements/requirements.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path:'home',
    component: HomeComponent,
  },

  {
    path:'listings',
    component:ListingComponent,
   
  },

  {
    path:'requirements',
    component: RequirementsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
