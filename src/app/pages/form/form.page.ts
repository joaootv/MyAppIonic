import { ProductServiceService } from './../../shared/services/product-service.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

interface Formacao {

  key: string;
  value: string;
  title: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  data: any = {};

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    public productService: ProductServiceService
  ) { }

  ngOnInit() {
  }

  calcular(): void {
    if (!this.data.qtde || !this.data.preco) {
      return;
    }

    const resultado = this.productService.calcularEstoque(
      this.data.nome, this.data.descricao, this.data.categoria, this.data.qtde, this.data.preco);

    this.data.precoEstoque = resultado.precoEstoque;
  }

  confirmar(): void {
    this.calcular();
    this.router.navigate(['/']);
    this.modalCtrl.dismiss({
      dismissed: true
    }).catch(() => console.log('dismiss chamado sem modal'));
    document.location.reload();
  }

  cancelar() {
    console.log('cancelar');
    this.data = {};
    this.modalCtrl.dismiss({
      dismissed: true
    }).catch(() => console.log('dismiss chamado sem modal'));
  }

}
