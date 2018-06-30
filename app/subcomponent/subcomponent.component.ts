import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
  @Output() public UserName = new EventEmitter();
   
 
  // Action listener for button
  public SendEvent()
  {
    // Send the event to parent
    console.log("Send Event function called...!!!");
    this.MyEvent.emit('Hello from child');
    this.UserName.emit('User name is Mohit');
  }
  constructor() { }

  ngOnInit() {
  }

}
