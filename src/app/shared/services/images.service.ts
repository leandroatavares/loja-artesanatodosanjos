import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private storage: Storage, private userService: UserService) {}

  uploadImage(files: File[]) {
    for (let file of files) {
      const storageRef = ref(
        this.storage,
        `${this.userService.getEmail()}/${file.name}`
      );
      uploadBytesResumable(storageRef, file);
    }
  }
}
