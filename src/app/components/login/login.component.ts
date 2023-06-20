import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  name!: string;
  pass!: string;

  constructor(private router:Router){}

  login() {

    if(this.name === 'admin' && this.pass === 'admin'){
      this.router.navigateByUrl('products');
    }
    else{
      alert('use "admin" as username and password');
      console.log('pass: ',this.pass," name :",this.name );
      
    }


  }
}
