import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { listComponent } from './components/list-component/list.component';
import { itemComponent } from './components/item-component/item.component';
import { formComponent } from './components/form-component/form.component';

@NgModule({
  declarations: [
    AppComponent,
    listComponent,
    itemComponent,
    formComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
