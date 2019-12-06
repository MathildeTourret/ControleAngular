import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';


const routes: Routes = [
  { path: 'auth', component: FormAuthComponent},
  { path: 'chat', component: ChatMessagesComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
