import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comment } from './../models/comment.model';

const defaultComments: Comment[] = [
    {
        id: 2,
        commentContent: 'comment 1',
        Date: new Date(),
        Name: 'admin'
    },
    {
        id: 1,
        commentContent: 'comment 1',
        Date: new Date(),
        Name: 'admin'
    },
    {
        id: 1,
        commentContent: 'comment 1',
        Date: new Date(),
        Name: 'admin'
    },
    {
        id: 1,
        commentContent: 'comment 1',
        Date: new Date(),
        Name: 'admin'
    },
]

@Injectable()
export class CommentService {
    comments: Observable<any>;
    
    constructor() {
        let bufferSize = 10;
        this.comments = Observable.of(defaultComments)
            .publish()
            .refCount();
    }

}