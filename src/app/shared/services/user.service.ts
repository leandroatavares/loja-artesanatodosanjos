import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private authService: AuthService) {}

  getEmail(): string | undefined {
    try {
      const email = this.authService.getCurrentUser()?.email;
      if (!email) {
        throw Error('Nào foi possivel recuperar o email.');
      }
      return email;
    } catch (err) {
      //TODO -> tratar erro
      console.log(err);
      return;
    }
  }
}
