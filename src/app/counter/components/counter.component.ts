import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Contador: {{ counter }}</h3>
    <button (click)="incrementCounter(1)">+1</button>
    <button (click)="resetCounter()">Resetear contador</button>
    <button (click)="decrementCounter(1)">-1</button>`,
})
export class CounterComponent {
  counter = 0;

  incrementCounter(value: number): void {
    this.counter += value;
  }

  decrementCounter(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
