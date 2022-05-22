import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DescriptionKingFrenchComponent } from './components/description-king-french/description-king-french.component';
import { DescriptionPipe } from './pipes/description/description.pipe';
import { AscendingPipe } from './pipes/ascending/ascending.pipe';
import { TitleComponent } from './components/title/title.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import {FormsModule} from "@angular/forms";
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe';

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
    TitleComponent,
    InputSearchComponent,
    SearchFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
