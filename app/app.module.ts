import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent }  from './app.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';

@NgModule({
  imports: [ BrowserModule,routing,FormsModule, ],
  declarations: [ AppComponent,SearchComponent,AboutComponent ],
  bootstrap: [ AppComponent ],
  providers: [appRoutingProviders]
})
export class AppModule { }
