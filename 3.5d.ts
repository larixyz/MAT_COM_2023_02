class FuncoesLogicaProposicional {
  static equivalencia(p: boolean, q: boolean): boolean {
    return p === q;
  }
}

// Exemplo de uso:
const p: boolean = true;
const q: boolean = false;

const resultadoEquivalencia: boolean = FuncoesLogicaProposicional.equivalencia(p, q);

console.log(`Equivalência: p <-> q = ${resultadoEquivalencia}`);
