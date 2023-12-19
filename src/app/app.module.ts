import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { MainSliderComponent } from './Pages/main-slider/main-slider.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServicesComponent } from './Pages/services/services.component';
import { WhyChooseComponent } from './Pages/why-choose/why-choose.component';
import { WorkProcessComponent } from './Pages/work-process/work-process.component';
import { SssComponent } from './Pages/sss/sss.component';
import { RequestServicesComponent } from './Pages/request-services/request-services.component';
import { ProjectComponent } from './Pages/project/project.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { BrandComponent } from './Pages/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSliderComponent,
    AboutComponent,
    ServicesComponent,
    WhyChooseComponent,
    WorkProcessComponent,
    SssComponent,
    RequestServicesComponent,
    ProjectComponent,
    BlogComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
