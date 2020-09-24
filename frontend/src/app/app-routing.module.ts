import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { List_companiesComponent } from './components/list_companies/list_companies.component';



export const routes: Routes = [

  { path: '', component: List_companiesComponent },
  { path: '**', redirectTo: '' }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}