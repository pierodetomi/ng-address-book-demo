import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactPageComponent } from './components/edit-contact-page/edit-contact-page.component';
import { HomeComponent } from './components/home/home.component';
import { ViewChildSampleComponent } from './components/view-child-sample/view-child-sample.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: EditContactPageComponent },
  { path: 'contacts/edit/:id', component: EditContactPageComponent },
  { path: 'contacts/:highlightedContactId', component: ContactListComponent },
  { path: 'viewchild', component: ViewChildSampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
