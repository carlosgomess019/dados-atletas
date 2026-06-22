class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // Métodos de cálculo
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    // Fórmula: IMC = peso / (altura * altura)
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    // Clona o array original para não alterar a ordem dos atributos originais do atleta
    let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
    
    // Elimina a maior e a menor nota (pega os índices 1, 2 e 3)
    let notasComputadas = notasOrdenadas.slice(1, 4);
    
    // Soma os valores restantes
    let soma = 0;
    notasComputadas.forEach(nota => {
      soma += nota;
    });
    
    // Retorna a média
    return soma / notasComputadas.length;
  }

  // Métodos de retorno de informações (Getters)
  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

// --- Exemplo de teste fornecido pelo enunciado ---
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Exibindo as saídas exatamente no formato exigido
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(',')}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);