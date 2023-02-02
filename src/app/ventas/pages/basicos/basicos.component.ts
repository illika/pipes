import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "illika";
  nombreUpper: string = "ILLIKA";
  nombreCompleto: string = "iLliKa pA. vZ.";

  constructor() { }

}
