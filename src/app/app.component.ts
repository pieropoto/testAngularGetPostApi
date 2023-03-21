import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewUser, User, UsersResponse } from 'src/types/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-finale';
  users !: User[];

  constructor(private userService: UserService){}

  onNewUser(newUser:NewUser){
    this.userService.addUser(newUser).subscribe({
      next: (data: User) => {
        this.users.push(data);
        data.id=this.users.length;
      },
      error: (error: HttpErrorResponse) => {
        let errorMessage = "An error occurred"
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Client Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert("C'è stato un errore con il server, riprova più tardi.");
        console.error(errorMessage, { error });
      }
    });
  }

  ngOnInit(){
    this.userService.getUsers().subscribe({
      next: (data: UsersResponse) => {
        this.users=data.users;
      },
      error: (error:HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Client Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert("C'è stato un errore con il server, riprova più tardi.");
        console.error(errorMessage, { error });
      }
    });
  }
  getUsers(){
    return this.users;
  }
}
