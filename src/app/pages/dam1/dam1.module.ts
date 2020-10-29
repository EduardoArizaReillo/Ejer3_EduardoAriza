import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dam1PageRoutingModule } from './dam1-routing.module';

import { Dam1Page } from './dam1.page';
import { ComponenteModule } from '../../componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dam1PageRoutingModule,
    ComponenteModule
  ],
  declarations: [Dam1Page]
})
export class Dam1PageModule {}
