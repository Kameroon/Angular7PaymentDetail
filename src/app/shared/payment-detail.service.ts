import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PaymentDetailService {
  // Url du Web API
  readonly root ='http://localhost:59453/api';

  // -- propriété contenant notre model --
  formData: PaymentDetail
  paymentDetaitList: PaymentDetail[];

  constructor(private http: HttpClient) { }

  // Envoie de données du formulaire au WebAPI
  PostPaymentDetail(){
    return this.http.post(this.root + '/PaymentDetail', this.formData)
  }

  // Modification de données formulaire au WebAPI
  PutPaymentDetail(){
    return this.http.put(this.root + '/PaymentDetail/' + this.formData.PMId, this.formData)
  }

  // Suppression de données formulaire au WebAPI
  DeletePaymentDetail(id){
    return this.http.delete(this.root + '/PaymentDetail/' + id)
  }

  /*
  * Pour pouvoir utiliser les services d'une ASP.Net Web API, il faut installer
  * dans Le webApi "Microsoft.ApsNetCore.cors"
  * 
  * Pour gerer l'affichage des messages installer "npmjs.com" - rechercher - "ngx-toastr"
  * npm install ngx-toastr --save
  */

  refreshPaymentDetailList(){ // puis qu'on recoit un Observable, on converti avec ToPromise les résultat dans un tableaux
    this.http.get(this.root + '/PaymentDetail')
            .toPromise()
            .then(result => this.paymentDetaitList = result as PaymentDetail[]);
  }
  
  clearForm(){
    this.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }
}
