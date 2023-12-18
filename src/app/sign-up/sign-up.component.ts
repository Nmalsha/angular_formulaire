import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user: User = { firstname: '', lastname: '', email: '', password: '' };

  onSubmit() {
    console.log('Form is valid', this.user);
  }
  change(e: any) {
    console.log(e);
  }
}
