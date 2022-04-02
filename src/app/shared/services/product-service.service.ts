import { Injectable } from '@angular/core';
import { ProductDTO } from 'src/app/domain/dtos/ProductDTO';
import { Storage } from '@ionic/storage-angular';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public data: any = [];

  constructor(
    private storage: Storage
  ) { }

  calcularEstoque(nome: string, descricao: string, categoria: string, qtde: number, preco: number): ProductDTO {
    const resultado = new ProductDTO(nome, descricao, categoria, qtde, preco);

    console.log(resultado.precoEstoque);

    this.salvarProduto(resultado);

    return resultado;
  }

  async salvarProduto(resultado: ProductDTO) {
    const now = new Date();

    const productHistory: any = {
      id: uuidv4(),
      timestamp: now.getTime(),
      timestampIso: now.toISOString(),
      result: resultado
    };

    const collectionProductHistory: any[] = await this.storage.get('product') || [];


    collectionProductHistory.push(productHistory);

    await this.storage.set('product', collectionProductHistory);

  }

  listarProdutos(): Promise<any> {
    //return this.storage.get('product');
    const products: any = [];

    return this.storage.forEach((product: any, key: string, i: number) => {
        products.push(product);
      })
      .then(() => Promise.resolve(products))
      .catch(() => Promise.reject('Erro ao recuperar dados do storage!'));
  }

}
