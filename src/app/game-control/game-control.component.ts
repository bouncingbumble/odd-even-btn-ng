import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberEvent = new EventEmitter<number>();
  i: number = 0;
  interval;
  constructor() { }

  ngOnInit() {
  }

  onStartBtnClick(){
    this.interval = setInterval(() => {
      this.numberEvent.emit(this.i+1);
    }, 1000);
  }

  onStopBtnClick(){
    clearInterval(this.interval);
  }
}
