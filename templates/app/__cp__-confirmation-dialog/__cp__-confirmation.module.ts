import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { __capitalizedCp__ConfirmationDialogComponent } from './__cp__-confirmation-dialog.component';
import { __capitalizedCp__ConfirmationDialogService } from './__cp__-confirmation-dialog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  entryComponents: [
    __capitalizedCp__ConfirmationDialogComponent
  ],
  declarations: [
    __capitalizedCp__ConfirmationDialogComponent,
  ],
  exports: [],
  providers: [
    __capitalizedCp__ConfirmationDialogService
  ]
})
export class __capitalizedCp__ConfirmationModule {
}

