import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
//Auth Guard for deals and productdetails component
import { AuthGuard } from './auth.guard';
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'cards',component:CardsComponent},
  {path:'fridge',component:RefrigeratorComponent},
  {path:'washingmach',component:WashingmachineComponent},
  {path:'micro',component:MicroovenComponent},
  {path:'deals',component:AmazondealsComponent,canActivate: [AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'prod_details',component:ProductdetailsComponent,canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
