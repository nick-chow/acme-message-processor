import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule, MdDialogModule, MdSelectModule, MdListModule, MdButtonModule, MdGridListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent, MessageDialogComponent, MockDataService } from './index';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessageDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdSelectModule,
    MdDialogModule,
    MdListModule,
    MdButtonModule,
    MdGridListModule
  ],
  entryComponents: [MessageDialogComponent],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
