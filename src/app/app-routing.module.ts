import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
const routes: Routes = [
  // { path: '**', redirectTo: '/home' },
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: HomeComponent },
  {path: 'guachaca', component: CardOneComponent },
  {path:'cascada-fin-del-mundo', component: CardTwoComponent},
  {path: 'isla-gorgona', component: CardThreeComponent},
  {path: 'mompox', component:CardFourComponent},
  {path: 'galerazamba', component:CardFiveComponent},
  {path: 'oceta', component:CardSixComponent},
  {path: 'los-estoraques', component:CardSevenComponent},
  {path: 'santa-cruz', component:CardEightComponent},
  {path: 'teyuna', component:CardNineComponent},
  {path: 'nuqui', component:CardTenComponent},
  {path: 'cueva-del-esplendor', component:CardElevenComponent},
  {path: 'mavecure', component:CardTwelveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
