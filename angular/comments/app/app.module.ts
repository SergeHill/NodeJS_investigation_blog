import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { CommentsPageComponent } from './components/comments-page/comments-page.component';
import { CommentComponent } from './components/comment/comment.component';

import { SocketService } from './services/socket.service';
import { CommentService } from './services/comment.service';
import { reducers } from './reducers';
import { effects } from './effects';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument(),
    ],
    declarations: [
        AppComponent,
        CommentsPageComponent,
        CommentComponent,
    ],

    providers: [SocketService, CommentService],

    bootstrap: [AppComponent]
})
export class AppModule { }