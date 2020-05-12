import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: #fff;
        } 
    `]
})

export class ServerComponent {
    serverId: number = 10;
    status: string = 'offline';

    constructor() {
        this.status = Math.random() > .5 ? "offline" : "online";
    }

    getColor() {
        if(this.status === 'offline') {
            return 'red';
        } else if(this.status === 'online') {
            return 'green';
        }
    }
}

