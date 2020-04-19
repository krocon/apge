import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { __capitalizedCp__VersionIndicatorComponent } from "./__cp__-version-indicator.component";
import { __capitalizedCp__LabelValueReadonlyComponent } from "./__cp__-label-value-readonly.component";
import { __capitalizedCp__MetaService } from "./__cp__-meta.service";
import { __capitalizedCp__TableHelperService } from "./__cp__-table-helper.service";

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
  declarations: [
    __capitalizedCp__VersionIndicatorComponent,
    __capitalizedCp__LabelValueReadonlyComponent
  ],
  exports: [
    __capitalizedCp__VersionIndicatorComponent,
    __capitalizedCp__LabelValueReadonlyComponent
  ],
  providers: [
    __capitalizedCp__MetaService,
    __capitalizedCp__TableHelperService
  ]
})
export class __capitalizedCp__CommonModule {
}

