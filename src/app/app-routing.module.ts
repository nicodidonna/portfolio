import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TecnologieUtilizzateComponent } from './tecnologie-utilizzate/tecnologie-utilizzate.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"chi-sono", component: ChiSonoComponent},
  {path:"tecnologie-utilizzate", component: TecnologieUtilizzateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
