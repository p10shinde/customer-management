import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatListModule, MatIconModule,
          MatCardModule } from '@angular/material';
import { CustomersComponent } from './customers/customers/customers.component';
import { CustomerHeaderComponent } from './customers/customers/customer-header/customer-header.component';
import { CustomerToolbarComponent } from './customers/customers/customer-toolbar/customer-toolbar.component';
import { CustomerListComponent } from './customers/customers/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    CustomerHeaderComponent,
    CustomerToolbarComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
