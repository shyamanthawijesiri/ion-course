import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    effect: 'flip'
  };
 
  constructor(private router: Router){ }

  gos() {
    this.router.navigate(['signup']);
  }

  gol() {
    this.router.navigate(['login']);
  }
     
}
