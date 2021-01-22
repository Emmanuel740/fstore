import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {
  sitekey= "";
  nombre= "";
  correoElectronico= "";
  estado= "";
  ciudad= "";
  telefono= "";
  password= "";
  confirmacion= "";
  captcha= false;
  correoValidacion= "";
  valor= "";
  bool:boolean;
    constructor(private router: Router) {
      this.sitekey = environment.recaptcha.siteKey;
  
    }
  ngOnInit() {
  }
  resolved(ev){
    this.captcha = !this.captcha;
    console.log(this.captcha);
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
  async AlertaExito(){
    Swal.fire({
      
      icon: 'success',
      title: 'Listo',
      text: 'Tu cuenta se ha creado con exito',
      showConfirmButton: false,
      timer: 2000
    })
  }

  ErrorAlert(mensaje){
    Swal.fire({
      icon: 'info',
      title: '!Atención¡',
      text: mensaje,
      footer: 'FASTORE'
    })
  }
  validacionCuenta(){
    console.log('ebtro');
    if(this.nombre === ""){
    console.log(1);
    this.ErrorAlert('Falta ingresar tu nombre');
    }else{
      if(this.correoElectronico === ""){
        console.log(2);
        this.ErrorAlert('Falta ingresar tu Correo Electronico');
      }else{
        if(this.estado === ""){
          console.log(3);
          this.ErrorAlert('Falta ingresar tu Estado');
        }else{
          if(this.ciudad === ""){
            console.log(4);
            this.ErrorAlert('Falta ingresar tu Ciudad');
          }else{
            if(this.telefono === ""){
              console.log(5);
              this.ErrorAlert('Falta ingresar tu telefono');
            }else{
              if(this.password === ""){
                console.log(6);
                this.ErrorAlert('Falta ingresar tu Contraseña');
              }else{
              if(this.confirmacion === ""){
                console.log(7);
                this.ErrorAlert('Falta confirmar tu contraseña');
              }else{
                if(!this.captcha){
                  console.log(8);
                  this.ErrorAlert('Falta rellenar el Captcha');
                }else{
                  if(this.bool){
                   
                    if(this.password === this.confirmacion){
                      console.log('ok');

                      this.AlertaExito().then((res)=>{
                      this.router.navigate(['/home']);
                    });
                    }else{
                      this.ErrorAlert('La contraseña es incorrecta');

                    }
                    
                  }else{
                    this.ErrorAlert('El correo es invalido');

                  }
                }
              }
              }
            }
          }
        }
      }
    }
  }

}
