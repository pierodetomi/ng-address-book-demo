import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddContactPageComponent } from './components/add-contact-page/add-contact-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts/add', component: AddContactPageComponent },
  { path: 'contacts', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
