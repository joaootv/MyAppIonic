export class ProductDTO {

  nome: string;
  descricao: string;
  categoria: string;
  qtde: number;
  preco: number;
  precoEstoque: number;

  constructor(nome: string, descricao: string, categoria: string, qtde: number, preco: number) {
      this.nome = nome;
      this.descricao = descricao;
      this.categoria = categoria;
      this.qtde = qtde;
      this.preco = preco;
      this.precoEstoque = this.calcPrecoEstoque();
  }

  private calcPrecoEstoque(): number {
      return Number((this.qtde * this.preco).toFixed(2));
  }

}
