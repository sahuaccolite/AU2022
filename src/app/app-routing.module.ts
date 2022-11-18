import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
//locahost:4200/xyz
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'auto', component:AutoCompleteComponent},
  {path:'home', component: DashboardComponent, canActivate:[AppGuardGuard]},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
