import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketio from 'socket.io-client';
import { environment } from '../../environment';

@Injectable()
export class SocketService {
    private socket: SocketIOClient.Socket;
    constructor() {
        this.socket = socketio(environment.socket.baseUrl);
        this.socket.on('connect', () => console.log('connected'));
        this.socket.on('disconnect', () => console.log('disconnected'));
    }


    connect() {
        this.socket.connect();
    }

    disconnect() {
        this.socket.disconnect();
    }

    join(room: string) {
        this.socket.emit('join', room);
    }

    emit(event: string, data?: any) {
        this.socket.emit(event, data);
    }

    listen(event: string): Observable<any> {
        return new Observable(observer => {
            this.socket.on(event, (data: any) => {
                observer.next(data);
            })
        })
    }

}