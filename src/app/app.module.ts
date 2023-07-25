import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PocComponent } from './pages/poc/poc.component';
import { MainComponent } from './pages/main/main.component';
import { MenuDataService } from './menu-dataservice';
import { TaskComponent } from './pages/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PocComponent,
    MainComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MenuDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
