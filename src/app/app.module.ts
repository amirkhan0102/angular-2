import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { OrderFormComponent } from './order-form/order-form.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactFormComponent,
    SignComponent,
    LoginComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    
  
  
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
