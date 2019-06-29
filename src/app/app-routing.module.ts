import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
//import { PacketsComponent } from './packets/packets.component';
import {PacketsComponent} from './packets/packets.component';

const routes: Routes = [  { path : '', component: HomeComponent ,
canActivate: [AuthGuard],
children:
[
  { path: 'users', component: UsersComponent},
  { path: 'packets', component: PacketsComponent}
]},
{
path: 'login', component : LoginComponent
},
{
path:'register', component : RegisterComponent
}];
// [
//   { path: 'users', component: UsersComponent},
//   { path: 'login', component : LoginComponent },
//   { path: 'register', component : RegisterComponent},
//   { path: 'packets', component: PacketsComponent}
// ]
// },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
