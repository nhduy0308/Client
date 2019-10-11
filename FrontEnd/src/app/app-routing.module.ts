import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomePageComponent } from './pages/Client/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
