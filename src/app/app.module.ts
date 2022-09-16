import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { SquarePipe } from './square.pipe';
import { MicroovenComponent } from './microoven/microoven.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { WashingmachinedealsComponent } from './washingmachine/washingmachinedeals/washingmachinedeals.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { DealsComponent } from './deals/deals.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    SquarePipe,
    MicroovenComponent,
    RefrigeratorComponent,
    WashingmachineComponent,
    WashingmachinedealsComponent,
    AllproductsComponent,
    DealsComponent,
    AdvertisementComponent,
    AmazondealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
