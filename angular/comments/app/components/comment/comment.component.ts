import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, animate, sequence, style, stagger, keyframes, query, state } from '@angular/animations'
import './comment.component.css';

import { Comment } from './../../models/comment.model';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('approvedAnimation', [
            transition('* => 1', [
                style({ opacity: 1 }),
                animate('.5s', keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    style({ opacity: .5, transform: 'translateX(-200px)', background: 'green', offset: 0.5 }),
                    style({ opacity: 0, offset: 1.0 }),
                ])),
            ]),
            transition('* => 0', [
                style({ opacity: 1 }),
                animate('.5s', keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    style({ opacity: .5, transform: 'translateX(200px)', background: 'red', offset: 0.5 }),
                    style({ opacity: 0, offset: 1.0 }),
                ])),
            ])
        ])
    ]
})
export class CommentComponent {
    @Input() comment: Comment;
    @Output() approve = new EventEmitter();
    @Output() reject = new EventEmitter();

    onApproveClicked() {
        this.approve.emit(this.comment);
    }

    onRejectClicked() {
        this.reject.emit(this.comment);
    }
}