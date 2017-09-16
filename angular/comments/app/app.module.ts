import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { CommentsPageComponent } from './components/comments-page/comments-page.component';
import { CommentComponent } from './components/comment/comment.component';

import { CommentService } from './services/comment.service';
import { reducers } from './reducers';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        StoreModule.forRoot(reducers),
    ],
    declarations: [
        AppComponent,
        CommentsPageComponent,
        CommentComponent,
    ],

    providers: [CommentService],

    bootstrap: [AppComponent]
})
export class AppModule { }