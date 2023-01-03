import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Los modulos nos ayudan a agrupar componentes
@NgModule ({
    declarations: [//las declaraciones nos dicen que componentes tiene el modulo, estas inician invisible para la aplicacion, son las clases de ts.
        HeroeComponent,
        ListadoComponent
    ],
    exports: [//Los exports nos dicen que queremos hacer publico del modulo
        ListadoComponent
    ],
    imports: [
        // CommonModule
    ]
})
export class HeroesModule {

}