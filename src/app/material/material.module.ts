import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ClipboardModule } from '@angular/cdk/clipboard';





const materialModules = [
  MatTableModule,
  MatCardModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatButtonModule,
  MatDatepickerModule,
  MatDividerModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatChipsModule,
  MatToolbarModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  ClipboardModule
]

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          // dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'L',
          monthYearA11yLabel: 'MMMM YYYY',
        }
      }
    }
  ]
})
export class MaterialModule {
  // /**
  //  *
  //  */
  // constructor(private _adapter: DateAdapter<any>) {}

  // french() {
  //   this._adapter.setLocale('fr');
  // }
}
