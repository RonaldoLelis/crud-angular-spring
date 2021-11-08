import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';


@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
  ],
})
export class AppMaterialModule { }
