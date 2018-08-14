import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { InitAuthGuard } from './guards/init-auth.guard';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';


// const routes: Routes = [
//   { path: '',  component: HomePageComponent },
//   { path: 'login',  component: LoginPageComponent },
//   { path: 'signup',  component: SignupPageComponent },
//   { path: 'private',  component: PrivatePageComponent },
//   ];

  const routes: Routes = [
    { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuard ] },
    { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuard ] },
    { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuard ] },
    // { path: 'page',  component: ... , canActivate: [ RequireUserGuard ] },
    // { path: '**' , redirectTo: '' }
    ]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
