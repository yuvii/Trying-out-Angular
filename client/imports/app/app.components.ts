import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ChatsPage } from '../pages/chats/chats';
import template from "./app.html";

@Component({
    template
});

export class MyApp {
    rootPage = ChatsPage;
    
    constructor(platform: Platform) {
        platform.ready().then(() => {
            if (platform.is('cordova')) {
                StatusBar.styleDefault();
                Splashscreen.hide();
            }
        });
    }
}