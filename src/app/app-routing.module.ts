import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'main',pathMatch:'full'
  },
  {
    path:'account',loadChildren:()=>import("./account/account.module").then(x=>x.AccountModule)
  },
  {
    path:'main',loadChildren:()=>import("./main/main.module").then(x=>x.MainModule),canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
