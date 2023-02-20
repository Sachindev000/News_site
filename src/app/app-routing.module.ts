import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},//home
  {path:'tech',component:TechnewsComponent},//technews
  {path:'businessnews',component:BusinessnewsComponent}//businessnew

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
