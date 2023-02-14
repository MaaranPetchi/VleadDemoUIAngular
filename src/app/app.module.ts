import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './Components/LandingPage/landingpage/landingpage.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeecontrollerModule } from './Modules/EmployeeController/employeecontroller/employeecontroller.module';
import { EmployeevsdivisioncontrollerModule } from './Modules/EmployeeVsDivisions/employeevsdivisioncontroller/employeevsdivisioncontroller.module';
import { FooterComponent } from './Components/LandingPage/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    FooterComponent,

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EmployeecontrollerModule,
    EmployeevsdivisioncontrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
