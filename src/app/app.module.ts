import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';
import { TecnologieUtilizzateComponent } from './tecnologie-utilizzate/tecnologie-utilizzate.component';
import { DoveTrovarmiComponent } from './dove-trovarmi/dove-trovarmi.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ChiSonoComponent,
    TecnologieUtilizzateComponent,
    DoveTrovarmiComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
