import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { CarouselComponent } from './parts/objects/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './parts/objects/sidebar/sidebar.component';
import { AlbumComponent } from './parts/molecules/album/album.component';
import { ImageComponent } from './parts/atoms/image/image.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponent } from './parts/molecules/footer/footer.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
   declarations: [	
      AlbumComponent,
      AppComponent,
      CarouselComponent,
      FooterComponent,
      HomeComponent,
      InfoComponent,
      ImageComponent,
      NavComponent,
      SidebarComponent,
      AboutmeComponent,
      ContactComponent
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      MatSidenavModule,
      ModalModule.forRoot(),
      NgbModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
