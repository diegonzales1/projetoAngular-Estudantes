import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EstudanteComponent } from './estudante/estudante.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudanteComponent,
    EstudanteDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
