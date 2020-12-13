import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { ListComponent } from './includes/observable/list/list.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { IntervalComponent } from './includes/interval/interval.component';
import { OfFromComponent } from './includes/of-from/of-from.component';
import { CustomComponent } from './includes/custom/custom.component';
import { MapComponent } from './includes/map/map.component';
import { PluckComponent } from './includes/pluck/pluck.component';
import { FilterComponent } from './includes/filter/filter.component';
import { TabComponent } from './includes/tab/tab.component';
import { TakeComponent } from './includes/take/take.component';
import { ConcatComponent } from './includes/concat/concat.component';
import { MergeComponent } from './includes/merge/merge.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeSignupComponent } from './components/employee-signup/employee-signup.component';
import { HeadersComponent } from './components/headers/headers.component';


const routes: Routes = [

 // {path:'',redirectTo:'login',pathMatch:'full'},
  // {path:'login', component:  LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:  LoginComponent},
  {path:'dashboard',component: DashboardComponent,
   children:[
     {path:'signup',component:EmployeeSignupComponent},
     {path:'headers', component:  HeadersComponent},

   ] 
},
  
  


  // {path:'promise',component:PromiseComponent},
  // {path:'observable',component:ObservableComponent,children:[
  //   {path:'',component:ListComponent},
  //   {path:'fromEvent',component:FromEventComponent},
  //   {path:'interval',component:IntervalComponent},
  //   {path:'of-from',component:OfFromComponent},
  //   {path:'custom',component:CustomComponent},
  //   {path:'map',component:MapComponent},
  //   {path:'pluck',component:PluckComponent},
  //   {path:'filter',component:FilterComponent},
  //   {path:'tab',component:TabComponent},
  //   {path:'take',component:TakeComponent},
  //   {path:'concat',component:ConcatComponent},
  //   {path:'merge',component:MergeComponent},






//   ]},
//   {path:'**',redirectTo:'promise',},

// ];
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
