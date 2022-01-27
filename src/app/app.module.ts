import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ButtonsComponent } from './components/buttons/buttons.component'
import { SpacingComponent } from './components/spacing/spacing.component'

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    HomepageComponent,
    ButtonsComponent,
    SpacingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
