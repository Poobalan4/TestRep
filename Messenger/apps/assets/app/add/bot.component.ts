import { Component } from '@angular/core';

@Component({
    selector: 'bot',
    template: `<h4>{{msg}}</h4>`
})

export class BotComponent {
    msg: String = "Advance Search"
}