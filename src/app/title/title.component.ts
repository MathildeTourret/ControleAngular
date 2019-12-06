import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  userName: string;
  constructor() { }
  
  ngOnInit() {
    this.getUser()
  }
  getUser(){
    this.userName = localStorage.getItem('user');
  }
 

}
