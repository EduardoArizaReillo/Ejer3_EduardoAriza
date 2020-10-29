import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class Dam1Page implements OnInit {

  checkedSistemasInformaticos = false;
  checkedBaseDeDatos = false;
  checkedEntornosDeDesarrollo = true;
  checkedLenguajeDeMarcas = true;
  checkedProgramacion = false;
  checkedIngles = false;
  checkedFol = true;
  constructor(public toastController: ToastController) { }

  async openIngles(message: string) {
    const toast = await this.toastController.create({
      message: 'Ingles',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async openFol(message: string) {
    const toast = await this.toastController.create({
      message: 'Fol',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async openProgramacion(message: string) {
    const toast = await this.toastController.create({
      message: 'Programacion',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async openBase(message: string) {
    const toast = await this.toastController.create({
      message: 'Programacion',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async openEntornos(message: string) {
    const toast = await this.toastController.create({
      message: 'Programacion',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async openLenguaje(message: string) {
    const toast = await this.toastController.create({
      message: 'Programacion',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  ngOnInit() {
  }

}
