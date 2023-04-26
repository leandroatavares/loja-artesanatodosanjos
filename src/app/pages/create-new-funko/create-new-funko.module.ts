import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ImagesUploadComponent } from './components/images-upload/images-upload.component';
import { CreateNewFunkoComponent } from './create-new-funko.component';

@NgModule({
  declarations: [CreateNewFunkoComponent, ImagesUploadComponent],
  imports: [CommonModule, NgxDropzoneModule, MatButtonModule],
  exports: [ImagesUploadComponent, CreateNewFunkoComponent],
})
export class CreateNewFunkoModule {}
