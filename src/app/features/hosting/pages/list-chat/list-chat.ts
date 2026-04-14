import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-chat',
  imports: [],
  templateUrl: './list-chat.html',
  styleUrl: './list-chat.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListChat { }
