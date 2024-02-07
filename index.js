const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para atribuição de valor em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array.",
        "Adiciona um novo elemento ao final do array.",
        "Inverte a ordem dos elementos no array.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Compara dois valores.",
        "Verifica se uma variável é do tipo string.",
        "Retorna o tipo de dado de uma variável.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o primeiro elemento de um array?",
      respostas: [
        "shift()",
        "pop()",
        "removeFirst()",
      ],
      correta: 0
    },
    {
      pergunta: "Como se refere a um bloco de código que é executado repetidamente até que uma condição seja atendida?",
      respostas: [
        "Loop",
        "Interval",
        "Array",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Modificar o estilo de um elemento HTML.",
        "Adicionar um ouvinte de evento a um elemento HTML.",
        "Remover um ouvinte de evento de um elemento HTML.",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '&&' representa em JavaScript?",
      respostas: [
        "OU",
        "E",
        "Negação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código 'console.log(typeof [])'?",
      respostas: [
        "array",
        "object",
        "undefined",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'slice()' faz em um array em JavaScript?",
      respostas: [
        "Remove elementos de um array.",
        "Cria uma cópia superficial de parte de um array em um novo array.",
        "Adiciona elementos ao final de um array.",
      ],
      correta: 1
    },
   ];
   // Selecionando os nós Quiz e Template feitos no HTML
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
   
   
   // loop ou laço de repetição
   for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
   
   for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
   dt.querySelector('span').textContent = resposta
   dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta)
   
   dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta 
     
     corretas.delete(item)
     if(estaCorreta){
   corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
   
   }
   
   
   
   
   quizItem.querySelector('dl').appendChild(dt)
   }
   quizItem.querySelector('dl dt').remove()
   
   
   // coloca a pergunta na tela
   quiz.appendChild(quizItem)
   
   }
   
   