import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = "Lucy";
  genero: string = "femenino";

  invitacionMapa = {
    "masculino": "invitarlo",
    "femenino": "invitarla",
  }

  cambiarPersona() {
    this.nombre = "Nilo";
    this.genero = "masculino"
  }

  // i18nPlural
  clientes: string[] = ["Maria", "Lucy", "Pepe", "Juan", "Nilo"];
  clientesMap = {
    "=0": "no tenemos ningun cliente esperando",
    "=1": "tenemos un cliente esperando",
    "=2": "tenemos 2 clientes esperando",
    "other": "tenemos # clientes esperando"
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //keyvalue
  persona = {
    nombre: "illika",
    edad: 18,
    direccion: "GC, Trux"
  }

  //JsonPipe
  heroes = [
    {
      nombre: "Superman",
      vuela: true,
    },
    {
      nombre: "Robin",
      vuela: false,
    },
    {
      nombre: "Aquaman",
      vuela: false,
    }
  ];

  //AyncPipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data de promesa");
    }, 3500);
  })

}
