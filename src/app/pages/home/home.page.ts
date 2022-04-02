import { FormPage } from './../form/form.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: FormPage,
      cssClass: 'small-modal'
    });

    await modal.present();

  }

}
