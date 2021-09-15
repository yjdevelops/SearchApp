import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUserComponent } from './display-user/display-user.component';
import { UserdataComponent } from './userdata/userdata.component';

const routes: Routes = [
      { path: 'user', component: UserdataComponent },
      { path: 'display', component: DisplayUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
