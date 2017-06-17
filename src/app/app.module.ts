import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module'
import {CoreModule} from './core/core.module';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        SharedModule,
        ShoppingListModule,
        AuthModule,
        CoreModule,
        BrowserAnimationsModule,
        ToasterModule,
        ConfirmationPopoverModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
