import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'SpiderMan',
    'IronMan',
    'Hulk',
    'Thor',
    'Captain America',
  ];
  public deletedHero?: string = '';

  public deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
