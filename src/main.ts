import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app.routes'; // Import your routing module

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      ModalModule.forRoot(),
      BrowserAnimationsModule,
      AppRoutingModule // Include your routing module here
    )
  ]
}).catch(err => console.error(err));
