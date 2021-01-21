import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
sitekey= "";
isvalid= false;
  constructor() {
    this.sitekey = environment.recaptcha.siteKey;

  }


resolved(ev){
  this.isvalid = !this.isvalid;
  console.log(this.isvalid);
}  

}
