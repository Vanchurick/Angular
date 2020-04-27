import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickerComponent } from '../clicker/clicker.component'
import { ResultComponent } from '../result/result.component';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "clicker",
    component: ClickerComponent
  }, {
    path: "result",
    component: ResultComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }