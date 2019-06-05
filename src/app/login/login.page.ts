import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  username: String;
  password: String;

  constructor(private authService: AuthService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
  }

  async loginUsers() {
    const toast = await this.toast.create({
      message: 'login successfully',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
  async loginerrUsers() {
    const toast = await this.toast.create({
      message: 'login failed',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
  onLogin(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
         this.loginUsers();
          console.log('succussful login');
          this.router.navigate(['categories']);
        //  this.authService.storeUserData(data.token, data.user);
         
      } else {
        this.loginerrUsers();
       console.log('error login');
       this.router.navigate(['login']);
      }


      
   });

  }

}
