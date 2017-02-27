"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventComponent = (function () {
    function EventComponent() {
    }
    return EventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Event)
], EventComponent.prototype, "event", void 0);
EventComponent = __decorate([
    core_1.Component({
        selector: 'events',
        template: "\n        <table *ngIf=\"event\">\n\t\t\t<tr>\n\t\t\t\t<th>Event ID</th>\n\t\t\t\t<th>Title</th>\n\t\t\t\t<th>Date</th>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>{{event.id}}</td>\n\t\t\t\t<td>{{event.title}}</td>\n\t\t\t\t<td>{{event.date}}</td>\n\t\t\t</tr>\n        </table>\n    "
    })
], EventComponent);
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map