import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegisterForm } from '../../components/register-form/register-form';
import { RouterLink } from '@angular/router';
import { SocialButtons } from "../../components/social-buttons/social-buttons";


@Component({
  selector: 'app-register-page',
  imports: [RegisterForm, RouterLink, SocialButtons],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage { }
