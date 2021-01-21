import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {
  sitekey= "";
  nombre: string;
  correoElectronico: string;
  isvalid= false;
  correoValidacion= "";
  valor= "";
  bool:boolean;
    constructor() {
      this.sitekey = environment.recaptcha.siteKey;
  
    }
  ngOnInit() {
  }
  resolved(ev){
    this.isvalid = !this.isvalid;
    console.log(this.isvalid);
  } 
  validarCorreo(){
  
    //let valor = 
      if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(this.correoElectronico)){
       this.correoValidacion = "La dirección de email es valida.";
       this.bool = true;
      } else {
      this.correoValidacion = "La dirección de email es invalida.";
       this.bool = false;
      }
    
  }

}
