import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './components/page-acceuil/page-acceuil.component';

const routes: Routes = [
  { path: 'acceuil', component: PageAcceuilComponent }
];
@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
