import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component ({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent{
	events: Event[] = [
		{id: 10, title: 'Title 1', date: 'Date 1'},
		{id: 11, title: 'Title 2', date: 'Date 2'},
		{id: 12, title: 'Title 3', date: 'Date 3'}
	]


    message: string = 'Hello!';
    users: User[] = [
        {id: 25, name: 'Emily', username: 'esmikl'},
        {id: 26, name: 'Nick', username: 'whatnicktweets'},
        {id: 27, name: 'Holly', username: 'hollylawly'}
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}