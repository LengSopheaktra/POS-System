import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  message = '';
  isError = false;
  show = false; // show / hide password

  constructor(private router: Router) {}

  toggleEye() {
    this.show = !this.show;
  }

  login(user: string, pass: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (user === '' || pass === '') {
      this.isError = true;
      this.message = 'Please enter username and password';
    } else if (user === 'admin' && pass === '123') {
      this.isError = false;
      this.message = 'Login successful! Redirecting...';
      setTimeout(() => {
        this.router.navigate(['/pos']);
      }, 500);
    } else {
      this.isError = true;
      this.message = 'Invalid username or password';
    }
  }
}
