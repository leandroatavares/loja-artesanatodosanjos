import { Component } from '@angular/core';
import { ImagesService } from '../../../../shared/services/images.service';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss'],
})
export class ImagesUploadComponent {
  files: File[] = [];
  constructor(private imageService: ImagesService) {}

  onSelect(event: any) {
    console.log(event);
    if (this.files.length !== 3) {
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadImages() {
    this.imageService.uploadImage(this.files);
  }
}
