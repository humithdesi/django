import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { HttpClientModule } from '@angular/common/http';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { TaglistComponent } from './taglist/taglist.component';
import { ApiquangcaoService } from './apiquangcao.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';
import { SwipeDirective } from './swipe.directive';
import { FooterComponent } from './footer/footer.component';
import { UoctinhchiphiComponent } from './uoctinhchiphi/uoctinhchiphi.component';
import { ChiphiinbatComponent } from './uoctinhchiphi/chiphiinbat/chiphiinbat.component';
import { ChiphibanghieuComponent } from './uoctinhchiphi/chiphibanghieu/chiphibanghieu.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule } from '@angular/material/select';
import { MatInputModule}from '@angular/material/input';
import { MatButtonModule}from '@angular/material/button';
import { LottieModule } from 'ngx-lottie';

export function playerFactory(): any {  
  return import('lottie-web');
}



@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent,
    NavbarComponent,

    CategorydetailComponent,
    TaglistComponent,
    HomeComponent,

    SwipeDirective,
     FooterComponent,
     UoctinhchiphiComponent,
     ChiphiinbatComponent,
     ChiphibanghieuComponent,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    NgbCollapseModule, 
    LayoutModule, FontAwesomeModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    LottieModule.forRoot({ player: playerFactory }),  
    

  ],
  providers: [ApiquangcaoService,Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
