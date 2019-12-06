import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.sass']
})
export class FormAuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('connexion') === 'true'){
      this.isConnected = true
    }else {
      this.isConnected = false;
    }
  }
  
  // @Output() userName = new EventEmitter()
  userName : string;
  isConnected: Boolean = false;

  login() {
    this.isConnected = true;
    if (this.userName !=  undefined || '' ) {
      console.log(this.userName)
      // return this.userName.emit(this.userName.toString())
      localStorage.setItem('user', this.userName);
      localStorage.setItem('connexion', JSON.stringify(this.isConnected));
      this.router.navigate(['chat'])
    }

  }
}
