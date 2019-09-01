import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    // -- Chargement de liste des details de paiement --
    this.service.refreshPaymentDetailList();
  }

  // -- Chargement du formulaire de la ligne selectionnée --
  populateForm(paymentDetail: PaymentDetail){
    // -- On fait une copie du formData avant de l'assigner à l'objet recu --  
    this.service.formData = Object.assign({}, paymentDetail);
  }

  onDelete(PMId){
    if(confirm('Etes-vous sûr de vouloir supprimer cette donnée?')){
      this.service.DeletePaymentDetail(PMId)
                  .subscribe(
                    result => {
                      this.service.refreshPaymentDetailList();
                      this.toastr.warning('Suppression effectuée avec success.', 'Application de paiement');
                    }, 
                    error => {
                      this.toastr.error('Erreur durant la suppression.', 'Application de paiement');
                      console.log(error);
                    }
                  )
    }
  }

}
