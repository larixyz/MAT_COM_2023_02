class FuncoesLogicaProposicional {
  static equivalencia(p: boolean, q: boolean): boolean {
    // Equivalência: Retorna true se p e q são logicamente equivalentes, caso contrário, retorna false.
    return p === q;
  }
}

// Exemplo de uso:
const p: boolean = true;
const q: boolean = false;

const resultadoEquivalencia: boolean = FuncoesLogicaProposicional.equivalencia(p, q);

console.log(`Equivalência: p <-> q = ${resultadoEquivalencia}`);
