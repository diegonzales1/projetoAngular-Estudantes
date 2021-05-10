import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EstudanteComponent } from './estudante/estudante.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudanteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
