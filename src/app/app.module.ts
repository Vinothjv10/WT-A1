import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CareersComponent } from './careers/careers.component';
import { ProductComponent } from './product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FilterPipe } from './careers/filter.pipe';
import { LoginComponent } from './auth/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AuthService } from "./auth/auth.service";

import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    NavbarComponent,
    AboutusComponent,
    CareersComponent,
    ProductComponent,
    FilterPipe,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule, MatListModule, MatSidenavModule,
    ReactiveFormsModule, MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
