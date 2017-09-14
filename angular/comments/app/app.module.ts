import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CommentsPageComponent} from './components/comments-page/comments-page.component';
import {CommentComponent} from './components/comment/comment.component';

import {CommentService} from './services/comment.service';

@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        CommentsPageComponent,
        CommentComponent,
    ],

    providers: [CommentService],
    
    bootstrap: [AppComponent]
})
export class AppModule{}