import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() notify = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick () {
    this.notify.emit("Message from child");
    
  }

}
