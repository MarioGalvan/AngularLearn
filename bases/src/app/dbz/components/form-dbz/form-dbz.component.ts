import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form-dbz',
  templateUrl: './form-dbz.component.html',
  styleUrls: ['./form-dbz.component.css'],
})
export class FormDbzComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  constructor() {}

  addCharacter() {
    console.log(this.character);
    if (this.character.name.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0,
    };
  }
}
