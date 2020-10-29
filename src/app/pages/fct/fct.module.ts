import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FCTPageRoutingModule } from './fct-routing.module';

import { FCTPage } from './fct.page';
import { ComponenteModule } from '../../componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FCTPageRoutingModule,
    ComponenteModule
  ],
  declarations: [FCTPage]
})
export class FCTPageModule {}
