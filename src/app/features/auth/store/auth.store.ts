import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStore {

  emailToConfirm = signal<string | null>(null);

}