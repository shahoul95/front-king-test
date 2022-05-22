import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionKingFrenchComponent } from './description-king-french/description-king-french.component';
import { DescriptionPipe } from './pipes/description.pipe';
import { AscendingPipe } from './pipes/ascending.pipe';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TableComponent,
    FooterComponent,
    HeaderComponent,
    DescriptionKingFrenchComponent,
    DescriptionPipe,
    AscendingPipe,
    TitleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
