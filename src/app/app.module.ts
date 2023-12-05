import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardOneComponent } from './modals/card-one/card-one.component';
import { CardTwoComponent } from './modals/card-two/card-two.component';
import { CardThreeComponent } from './modals/card-three/card-three.component';
import { CardFourComponent } from './modals/card-four/card-four.component';
import { CardFiveComponent } from './modals/card-five/card-five.component';
import { CardSixComponent } from './modals/card-six/card-six.component';
import { CardSevenComponent } from './modals/card-seven/card-seven.component';
import { CardEightComponent } from './modals/card-eight/card-eight.component';
import { CardNineComponent } from './modals/card-nine/card-nine.component';
import { CardTenComponent } from './modals/card-ten/card-ten.component';
import { CardElevenComponent } from './modals/card-eleven/card-eleven.component';
import { CardTwelveComponent } from './modals/card-twelve/card-twelve.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent,
    CardSixComponent,
    CardFiveComponent,
    CardEightComponent,
    CardSevenComponent,
    CardTenComponent,
    CardNineComponent,
    CardTwelveComponent,
    CardElevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
