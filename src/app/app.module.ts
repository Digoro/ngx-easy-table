import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from './ngx-easy-table/table.module';
import { AppComponent } from './app.component';

import { routing } from './routes';

import {
  PaginationComponent,
  GlobalSearchComponent,
  SortComponent,
  ExportComponent,
  ClickEventComponent,
  TemplateComponent,
  SelectRowComponent,
  SelectColComponent,
  SelectCellComponent,
  ModalComponent,
  SearchComponent,
  BasicComponent,
  LiveUpdateComponent,
  ExchangeTemplateComponent,
  ServerPaginationComponent,
  RowTemplateComponent,
  ServerSortComponent,
  GroupRowsComponent,
  ManyTablesComponent,
  DynamicRowComponent,
  CustomSortComponent,
  CollapsedRowsComponent,
  HorizontalScrollComponent,
  CheckboxesComponent,
  CustomFiltersComponent,
  ToggleColumnComponent,
  DynamicConfigurationComponent,
  CheckboxDefaultComponent,
  ExportsComponent,
  ResizableComponent,
  ColumnWidthComponent,
  FixedWidthComponent,
  CustomizeThemeComponent,
  StylesComponent
} from './demo';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    routing,
    // TrendModule,
  ],
  declarations: [
    AppComponent,
    BasicComponent,
    SearchComponent,
    PaginationComponent,
    GlobalSearchComponent,
    SortComponent,
    ExportComponent,
    ClickEventComponent,
    TemplateComponent,
    SelectRowComponent,
    SelectColComponent,
    SelectCellComponent,
    ModalComponent,
    LiveUpdateComponent,
    ExchangeTemplateComponent,
    ServerPaginationComponent,
    RowTemplateComponent,
    ServerSortComponent,
    GroupRowsComponent,
    ManyTablesComponent,
    DynamicRowComponent,
    CustomSortComponent,
    CollapsedRowsComponent,
    HorizontalScrollComponent,
    CheckboxesComponent,
    CustomFiltersComponent,
    ToggleColumnComponent,
    DynamicConfigurationComponent,
    CheckboxDefaultComponent,
    ExportsComponent,
    ResizableComponent,
    ColumnWidthComponent,
    FixedWidthComponent,
    CustomizeThemeComponent,
    StylesComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
