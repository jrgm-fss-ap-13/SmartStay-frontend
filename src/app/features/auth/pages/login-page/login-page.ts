import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { RouterLink } from '@angular/router';
import { SocialButtons } from "../../components/social-buttons/social-buttons";
import { Logo } from "../../../../shared/components/logo/logo";

@Component({
  selector: 'app-login-page',
  imports: [LoginForm, RouterLink, SocialButtons],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage { }
