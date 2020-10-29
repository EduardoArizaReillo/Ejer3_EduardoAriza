import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {
  public form = [
    { icono: '/assets/icon/David.PNG',
      asignatura: 'Desarrollo interfaces',
      color: 'primary',
      isChecked: 'true'
    },
    { icono: '/assets/icon/keanujpg.jpg',
      asignatura: 'Desarrollo aplicaciones móviles',
      color: 'danger',
      isChecked: 'false'
    },
    { icono: '/assets/icon/hola.png',
      asignatura: 'Programación de procesos y servicios',
      color: 'dark',
      isChecked: 'false'
    },
    { icono: '/assets/icon/hola.png',
      asignatura: 'Acceso a datos',
      color: 'medium',
      isChecked: 'true'
    },
    { icono: '/assets/icon/empresas.png',
      asignatura: 'Empresa e iniciativa emprendedora',
      color: 'secondary',
      isChecked: 'false'
    },
  ];
  ngOnInit() {
  }
 onClick( entry ){
   console.log(entry);

  }

}
