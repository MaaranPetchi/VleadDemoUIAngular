import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './Components/LandingPage/landingpage/landingpage.component';
import { LoginComponent } from './Components/Login/login/login.component';

const routes: Routes = [
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: LandingpageComponent },
{ path: 'login', component: LoginComponent },
//{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
//{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
