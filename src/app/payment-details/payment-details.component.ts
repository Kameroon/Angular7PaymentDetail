import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit {

  // -- Injetcion du service dans notre ctor --
  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
  }

}
