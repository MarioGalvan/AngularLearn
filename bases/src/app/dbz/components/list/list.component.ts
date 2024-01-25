import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input() characters: Character[] = [];

  onDeleteCharacterList(index: number): void {
    this.onDeleteCharacter.emit(index);
  }
}
