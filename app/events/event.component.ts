import {Component, Input} from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'events',
    template: `
        <table *ngIf="event">
			<tr>
				<th>Event ID</th>
				<th>Title</th>
				<th>Date</th>
			</tr>
			<tr>
				<td>{{event.id}}</td>
				<td>{{event.title}}</td>
				<td>{{event.date}}</td>
			</tr>
        </table>
    `
})

export class EventComponent{
    @Input() event: Event;
}