// Definindo uma classe chamada Heroi
class Heroi {
  // O construtor é chamado quando uma nova instância da classe é criada
  constructor(nome, idade, tipo) {
    this.nome = nome;   // Atribui o nome fornecido à propriedade nome do herói
    this.idade = idade; // Atribui a idade fornecida à propriedade idade do herói
    this.tipo = tipo;   // Atribui o tipo fornecido à propriedade tipo do herói
  }

  // Método chamado atacar, que determina o ataque do herói com base no tipo
  atacar() {
    let ataque; // Declara uma variável para armazenar a descrição do ataque

    // Usa uma estrutura switch para determinar o ataque com base no tipo do herói
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque desconhecido";
        break;
    }

    // Retorna uma mensagem que inclui o nome do herói e o ataque usado
    return `${this.nome} atacou usando ${ataque}`;
  }
}

// Cria instâncias da classe Heroi com diferentes características
const heroi1 = new Heroi("Kingmago", 150, "mago");
const heroi2 = new Heroi("Kingninja", 37, "ninja");

// Chama o método atacar para cada herói e armazena as mensagens em variáveis
const mensagemHeroi1 = heroi1.atacar();
const mensagemHeroi2 = heroi2.atacar();

// Exibe as mensagens com os ataques dos heróis
console.log(mensagemHeroi1); // Exibe "Kingmago atacou usando magia"
console.log(mensagemHeroi2); // Exibe "Kingninja atacou usando shuriken"
