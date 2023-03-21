import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewUser } from 'src/types/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() user = new EventEmitter<NewUser>();
  
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  newUser: NewUser = {
    firstName: '',
    lastName: '',
    email: '',
  };

  onSubmit() {
    this.newUser.firstName = this.userForm.value.firstName as string;
    this.newUser.lastName = this.userForm.value.lastName as string;
    this.newUser.email = this.userForm.value.email as string;
    this.user.emit(this.newUser);
  }
}
