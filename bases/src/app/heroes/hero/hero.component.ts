import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'SpiderMan';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get fullNameHero(): string {
    return `${this.name} - ${this.age}`;
  }

  set setName(name: string) {
    this.name = name;
  }


  public  handleChangeName(name:string): void {
    this.name = name;
  }

  public handleChangeAge(age: number): void {
    this.age = age;
  }

}
