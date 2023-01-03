import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }} </h1> 
        <!-- Las dobles "{{ }} nos ayuda a imprimir codigo " -->
        <h3> La base es: <strong> {{ base }}</strong></h3>

        <button (click)="acumular(+base)"> +{{ base }} </button>
        <!-- Los eventos son definidos en parentesis y luego escribimos lo que queremos hacer. -->

        <span> {{ numero }} </span>

        <button (click)="acumular(-base)"> -{{ base }} </button>

    `
})

// Para poder agregar este component al html, debemos de declararlo en la clase "app.module.ts"; de esta manera podremos ocupar el component en el html sin ningun problema
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;

    acumular( valor: number) {
    this.numero += valor;
  }
}