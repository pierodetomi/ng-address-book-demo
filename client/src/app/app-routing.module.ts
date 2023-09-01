import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactPageComponent } from './components/edit-contact-page/edit-contact-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: EditContactPageComponent },
  { path: 'contacts/edit/:id', component: EditContactPageComponent },
  { path: 'contacts/:highlightedContactId', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
