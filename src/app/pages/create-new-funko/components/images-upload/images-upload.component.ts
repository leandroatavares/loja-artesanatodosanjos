import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagesService } from '../../../../shared/services/images.service';
import { addItem } from '../../../../store/cart/cart.actions';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss'],
})
export class ImagesUploadComponent {
  files: File[] = [];
  constructor(private imageService: ImagesService, private store: Store) {}

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

  addProductToCart() {
    console.log(this.files);
    const item = {
      name: 'boneco personalizado',
      images: this.files,
      price: 69.9,
    };

    this.store.dispatch(addItem({ item }));
  }
}
