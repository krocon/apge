import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { __capcp__LoginPageComponent } from "./__cp__-auth/__cp__-login/__cp__-login-page.component";
import { __capcp__AuthGuardCanActivate } from "./__cp__-auth/__cp__-auth-guard-can-activate";
import { environment } from "../environments/environment";


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./__cp__-welcome/__cp__-welcome.module')
        .then(m => m.__capcp__WelcomeModule)
  },
  {
    path: 'willkommen',
    redirectTo: '/'
  },
  {
    path: 'recht',
    loadChildren: () =>
      import('./__cp__-rechtliches/__cp__-rechtliches.module')
        .then(m => m.__capcp__RechtlichesModule)
  },
  {
    path: 'anmelden',
    component: __capcp__LoginPageComponent
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./__cp__-demo/__cp__-demo.module')
        .then(m => m.__capcp__DemoModule),
    canActivate: [__capcp__AuthGuardCanActivate],
  },
  {
    path: '',
    loadChildren: () =>
      import('./__cp__-auth/__cp__-auth.module')
        .then(m => m.__capcp__AuthModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./__cp__-welcome/__cp__-welcome.module')
        .then(m => m.__capcp__WelcomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: environment.routerTracing})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
