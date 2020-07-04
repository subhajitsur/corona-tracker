import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
//{ path:'', component:CardComponent},
{ path:'india', component:CardComponent},
 
 { path: ':state', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
