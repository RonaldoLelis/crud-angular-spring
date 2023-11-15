import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category-pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    CategoryPipe,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
