import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLogin(email: string, password: string) {
    if (email === 'nahidash@code.edu.az' && password === '123') {
      return true;
    }
    return false;
  }
}
