import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  

  // Methode de reset du formulaire
  resetForm(form?: NgForm)
  {
    // On appel form defini dans notre formulaire
    if(form != null)
      form.resetForm();

    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  // valider le formuaire "Gere l'ajout et la mise à jours"
  onSubmit(form: NgForm){
    if(this.service.formData.PMId == 0)
       this.insertRecord(form);
    else
       this.updateRecord(form);
  }

  // -- Insert --
  insertRecord(form: NgForm){
     // Appel du service -- Pas besoin de mette le formulaire en paramètre, nous utilisons les données du formulaire du service
     this.service.PostPaymentDetail().subscribe( // puis qu'on reçoit un Observable, on y souscrit
       res => {
          this.resetForm(form);
          this.toastr.success('Enregistrement effectué avec success.', 'Application de paiement');
          this.service.refreshPaymentDetailList();
       },
       error => {
          this.toastr.info('Erreur lors de l\'enregistrement.', 'Application de paiement');
          console.log(error);         
       }
     )
  }

  // -- Insert --
  updateRecord(form: NgForm){
    // Appel du service
    this.service.PutPaymentDetail().subscribe( // puis qu'on reçoit un Observable, on y souscrit
      res => {
        this.resetForm(form);
        this.toastr.info('Modification effectuée avec success.', 'Application de paiement');
        this.service.refreshPaymentDetailList();
      },
      error => {
        this.toastr.error('Erreur lors de la modification.', 'Application de paiement');
        console.log(error);         
      }
    )
  }

  onClearForm(){
    console.log('CLEAR FORM');
     //this.resetForm();
     //this.service.clearForm();
  }
}
