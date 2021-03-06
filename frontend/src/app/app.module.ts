import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ClassroomComponent } from './modules/classroom/classroom.component';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
    declarations: [
        AppComponent,
        ClassroomComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SocketIoModule.forRoot(config),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
