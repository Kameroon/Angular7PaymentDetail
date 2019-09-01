import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailService } from './shared/payment-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailListComponent,
    PaymentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Gere l'affichage des messages
    ToastrModule.forRoot()  // Gere l'affichage des messages  Ajouter le CSS "angular.json"
  ],
  // Injection du service pour pour pouvoir y acceder dans les differents components
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
