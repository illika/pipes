import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayuscula: boolean = true;
  heroes: Heroes[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Robin",
      vuela: false,
      color: Color.verde
    },
    {
      nombre: "Daredevil",
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: "Linterna Verde",
      vuela: true,
      color: Color.verde
    }
  ]

  heroes2: Heroes[] = [...this.heroes];

  ordenarPor: string = "";

  cambiarMM() {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarorden(valor: string) {
    this.ordenarPor = valor;
  }

}
