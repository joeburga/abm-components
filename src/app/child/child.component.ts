import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  personUpdate = {};
  copy = {};

  gendersList: string[] = ['M', 'F', 'Others'];

  ngOnInit() { }

  @Output() personUpdateEvent = new EventEmitter();
  @Output() flag = new EventEmitter();

  savePersonUpdate() {
    console.log(this.personUpdateEvent);
    this.copy = Object.assign({}, this.personUpdate);
    this.personUpdateEvent.emit(this.copy);

    console.log(this.copy);
  }

  // Para el untoggle del formulario.
  toggleButtonUpdate() {
    this.flag.emit(false);
  }
}
