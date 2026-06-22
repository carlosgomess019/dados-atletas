# Projeto Dados Atletas 🏃‍♂️🏅

Segunda etapa do sistema de avaliação esportiva desenvolvido em JavaScript. O objetivo deste projeto foi evoluir a lógica estruturada anterior para o paradigma de **Programação Orientada a Objetos (POO)**, centralizando as informações e os cálculos dos competidores dentro de uma classe estruturada.

## 🛠️ Funcionalidades da Classe

A classe `Atleta` encapsula os atributos principais do competidor (Nome, Idade, Peso, Altura e Notas) e realiza os seguintes cálculos automaticamente através de seus métodos:

1. **Categorização por Idade:** Classifica o atleta entre *Infantil*, *Juvenil*, *Intermediário* ou *Adulto*.
2. **Cálculo de IMC:** Aplica a fórmula matemática $IMC = \frac{peso}{altura^2}$ para avaliar o índice de massa corporal.
3. **Média Válida Descartável:** Ordena as 5 notas recebidas, elimina a maior e a menor, e calcula a média aritmética das 3 notas centrais restantes.

---

## 🚀 Como Testar este Projeto

Você pode testar e visualizar o resultado deste script de três formas:

### 1. Pelo Editor Online (Mais Prático)
1. Acesse uma ferramenta como o [Playcode.io](https://playcode.io/javascript) ou [JSFiddle](https://jsfiddle.net/).
2. Copie todo o código do arquivo `dados-atletas.js` e cole no editor.
3. O resultado formatado com os dados do atleta aparecerá imediatamente na janela do console ao lado.

### 2. Pelo Console do Navegador
1. Abra qualquer página da web e pressione a tecla `F12` (ou clique com o botão direito e escolha **Inspecionar**).
2. Vá até a aba **Console**.
3. Cole o código completo de `dados-atletas.js` e pressione `Enter`.

### 3. Localmente com Node.js
Caso possua o ambiente do Node.js configurado na sua máquina:
1. Abra o terminal na pasta onde salvou o arquivo.
2. Digite o seguinte comando:
   ```bash
   node dados-atletas.js
