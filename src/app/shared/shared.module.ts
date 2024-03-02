import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category-pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    CategoryPipe,
    ErrorDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    CategoryPipe,
    ErrorDialogComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
