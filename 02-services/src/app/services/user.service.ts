import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';

// you use the @Injectable() decorator to tell Angular that 
// this service should be created and provided in the root injector, 
// which is the global injector for the application instead of adding it to the app.module.
@Injectable({
  providedIn:'root'
})
export class UserService {

  constructor(
    private consoleService: ConsoleService
  ){}

  users: {name: string }[] = [
    {name: 'Francis'},
    {name: 'Steve'},
    {name: 'John'},
  ];

  onUserRemoved( toRemove: {position: number}) {
    this.users.splice(toRemove.position, 1);
    this.consoleService.consoleLog('A user was removed')
  }

  onAddUser(user: { name: string }) {
    this.users.push(user);
    this.consoleService.consoleLog('A user was added')
  }

  consoleSomething() {
    console.log('Something happened!!');
  }

}
