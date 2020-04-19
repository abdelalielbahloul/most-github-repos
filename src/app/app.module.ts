import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReposComponent } from './components/repos/repos.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    FilterFormComponent,
    DetailsDialogComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
