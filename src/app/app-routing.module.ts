import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SpacingComponent } from './components/spacing/spacing.component';




const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'get-started', component: GetStartedComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'spacing', component: SpacingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
