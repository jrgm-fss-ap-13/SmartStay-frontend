import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-listings-page',
  imports: [],
  templateUrl: './my-listings-page.html',
  styleUrl: './my-listings-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyListingsPage { }
