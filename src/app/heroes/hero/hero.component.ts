import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman'.toUpperCase();
  }

  changeAge(): void {
    this.age = 18;
  }
  restauredHero(): void {
    this.name = 'Ironman'.toUpperCase();
    this.age = 45;
  }
}
