class FuncoesLogicaProposicional {
  static implicacao(p: boolean, q: boolean): boolean {
    return !p || q;
  }
}

// Exemplo de uso:
const p: boolean = true;
const q: boolean = false;

const resultadoImplicacao: boolean = FuncoesLogicaProposicional.implicacao(p, q);

console.log(`Implicação: p -> q = ${resultadoImplicacao}`);
