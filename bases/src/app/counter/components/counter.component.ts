import { Component } from '@angular/core';
import { CounterEnum } from '../../commons/enums/counter.enum';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['./counter.style.css'],
  exportAs: 'CounterComponent',
})
export class CounterComponent {
  public counter: number = 0;
  public counterEnum = CounterEnum;

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    this.counter--;
  }

  public reset(): void {
    this.counter = 0;
  }

  public isButtonDisabled(): boolean {
    return this.counter === 0;
  }
}
