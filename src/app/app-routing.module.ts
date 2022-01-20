import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {SignUpComponent} from "./components/ui/auth/sign-up/sign-up.component";
import {AuthComponent} from "./components/ui/auth/auth.component";

const routes: Routes = [
  // {
  //   path: 'signup',
  //   component: SignUpComponent
  // },
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: '',
      loadChildren: () => import('./components/ui/auth/auth.module').then(m => m.AuthModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
