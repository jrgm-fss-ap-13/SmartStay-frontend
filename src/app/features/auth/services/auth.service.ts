import { inject, Injectable, signal, computed } from '@angular/core';
import { RegisterRequest, RegisterResponse } from '../interfaces/auth-response.interface';

import { HttpClient } from '@angular/common/http';
import { VerifyEmailRequest } from '../interfaces/verifity-email.interface';
import { LoginRequest, LoginResponse, UserInfo } from '../interfaces/login.interface';
import { tap } from 'rxjs';

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private url = 'http://127.0.0.1:8000/api/users/';

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<UserInfo | null>(null);

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') {
      return 'checking';
    }
    if (this._user()) {
      return 'authenticated';
    }
    return 'not-authenticated';
  });

  isHost = computed<boolean>(() => this._user()?.is_host ?? false);

  constructor() {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    const token = localStorage.getItem('access_token') || localStorage.getItem('access');
    const userStr = localStorage.getItem('user');

    if (!token) {
      this.logout();
      return;
    }

    let user = null;
    if (userStr) {
      try {
        user = JSON.parse(userStr);
      } catch (e) { }
    }

    if (!user) {
      user = { email: '', is_host: false };
    }

    this._user.set(user);
    this._authStatus.set('authenticated');
  }

  private setAuthentication(access: string, refresh: string | undefined, user: UserInfo): void {
    this._user.set(user);
    this._authStatus.set('authenticated');
    localStorage.setItem('access_token', access);
    if (refresh) localStorage.setItem('refresh_token', refresh);
    if (user) localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    this._user.set(null);
    this._authStatus.set('not-authenticated');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');

    // Cleanup old keys 
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }

  register(user: RegisterRequest) {
    return this.http.post<RegisterResponse>(`${this.url}register/`, user);
  }

  verifyEmail(data: VerifyEmailRequest) {
    return this.http.post<RegisterResponse>(`${this.url}verify-email/`, data);
  }

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.url}login/`, data).pipe(
      tap((response) => {
        this.setAuthentication(response.access_token, response.refresh_token, response.user);
      })
    );
  }

}
