"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.events = [
            { id: 10, title: 'Title 1', date: 'Date 1' },
            { id: 11, title: 'Title 2', date: 'Date 2' },
            { id: 12, title: 'Title 3', date: 'Date 3' }
        ];
        this.message = 'Hello!';
        this.users = [
            { id: 25, name: 'Emily', username: 'esmikl' },
            { id: 26, name: 'Nick', username: 'whatnicktweets' },
            { id: 27, name: 'Holly', username: 'hollylawly' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    AppComponent.prototype.onUserCreated = function (event) {
        this.users.push(event.user);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map