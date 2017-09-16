import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component';
import { CommentsPageComponent } from './components/comments-page/comments-page.component';
import { CommentComponent } from './components/comment/comment.component';

import { CommentService } from './services/comment.service';
import { reducers } from './reducers';
import { effects } from './effects';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects)
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