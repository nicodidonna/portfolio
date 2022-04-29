import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"chi-sono", component: ChiSonoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
