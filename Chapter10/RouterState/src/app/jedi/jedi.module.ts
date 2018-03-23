import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { JediListComponent } from './jedi-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [JediListComponent],
  declarations: [JediListComponent],
  providers: [],
})
export class JediModule { }
