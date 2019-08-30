import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  { path: 'view', component: GithubComponent },
  { path: 'view/:id', component: GithubComponent },
  { path: '', component: SearchFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//