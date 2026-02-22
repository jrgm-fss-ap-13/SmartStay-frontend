import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarVerifiaction } from "../../components/navbar-verifiaction/navbar-verifiaction";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-verification-layout',
  imports: [NavbarVerifiaction, RouterOutlet],
  templateUrl: './verificationLayout.html',
  styleUrl: './verificationLayout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationLayout { }
