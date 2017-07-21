import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloworldComponent} from './hello-world.component'
@NgModule({
  declarations: [
    AppComponent,HelloworldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,HelloworldComponent]
})
export class AppModule { }
