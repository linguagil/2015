/* globals console */

(function($) {
  'use strict';

  var schedules = [
    {
      speaker: 'Wilson Mendes',
      title: 'AngularJS: Um Framework para facilitar sua vida',
      description: 'Angularjs é um framework javascript construido e mantido pelo grupo de engenheiros do Google, ele usa o HTML como uma "template engine" aliado a conceitos de Orientação a Objetos, testes, dentre outros, no intuito de fornecer uma solução completa para o cliente-side de sua aplicação. Além disso tem total compatibilidade com as bibliotecas javascript mais utilizadas, como jQuery. é um novo conceito para desenvolvimento de web apps client-site.<br/><br/>Este curso vai mostrar através de exemplos práticos que é possível criar aplicações complexas com um código baseado em boas práticas, simples, coeso, performático e modularizado.',
      aboutSpeaker: 'Google Developer Expert (GDE) AngularJS and GDG Salvador Organizer. Musician and designer in his spare time.',
      image: ['images/talks/wilson-mendes.jpeg']
    },
    {
      speaker: 'Marlon Carvalho/Luciano Borges',
      title: 'Aplicações Restful com Demoiselle 2.5',
      description: '',
      aboutSpeaker: '',
      image: ['images/talks/marlon-carvalho.jpeg', 'images/talks/luciano-borges.jpg']
    },
    {
      speaker: 'Robson Peixoto/Rodrigo Ribeiro/Isabela Gonçalves',
      title: 'Scala: Programação funcional na JVM',
      description: 'Conheça as vantagens de usar programação funcional com Scala, a linguagem de programação baseada na JVM que conquistou empresas como Twitter, LinkedIn e Netflix.',
      aboutSpeaker: 'Rodrigo Ribeiro:<br/><br/>Formado em Ciência da Computação pela Unifacs, Rodrigo é desenvolvedor na JusBrasil, com foco maior no backend. Iniciou o processo de evangelização interna para uso de Scala. Tem interesse em programação funcional e sistemas distribuídos.<br/><br/>Robson Peixoto:<br/><br/>Mestre em Ciência da Computação pela UNICAMP, Robson é desenvolvedor na JusBrasil na equipe de Crawler. Amante das soluções poliglotas e preguiçoso por natureza, encontrou em Scala uma forma de resolver problema complexos escrevendo pouco código.<br/><br/>Isabela Gonçalves:<br/><br/>Formada em Engenharia da Computação pela UEFS, Bel é desenvolvedora na JusBrasil na equipe de Crawler. Começando a conhecer o mundo da programação funcional, encontrou em Scala uma forma de aproveitar projetos e conhecimentos em Java para se tornar uma pessoa e programadora mais feliz.',
      image: ['images/talks/robson-peixoto.png', 'images/talks/rodrigo-ribeiro.png', 'images/talks/isabela-goncalves.jpg']
    },
    {
      speaker: 'Paulo Ortins',
      title: 'Bem vindo ao mundo fantástico do Xamarin',
      description: 'Você é um desenvolvedor C# e sempre teve vontade de desenvolver aplicações mobile nativas para Android e iOS mas nunca teve vontade ou tempo de aprender Objective-c ou Java? Ou você já precisou desenvolver aplicações nativas para as 3 principais plataformas do mercado (Windows Phone, Android e iOS) mas se pegou escrevendo o mesmo código mas em 3 linguagens diferentes? A verdade, é que existe solução para esses problemas e nesse curso vou mostrar como podemos utilizar o Xamarin para desenvolver aplicações nativas (sim, nativas mesmo e não html5 + javascript) em uma única linguagem e compartilhando até 90% do código entre as plataformas. Não perca tempo e aprenda o que outros milhares de desenvolvedores e empresas já estão usando.',
      aboutSpeaker: 'Paulo Ortins, é sócio e desenvolvedor na OnceDev e aluno de mestrado na UFBA, atua com desenvolvimento de software há pouco mais de 5 anos e tem participado ativamente de comunidades de software há 3 anos seja organizando eventos, escrevendo artigos ou fazendo palestras pelo Brasil. É apaixonado por linguagens de programação, código bonito, testes e refactoring!',
      image: ['images/talks/paulo-ortins.jpg']
    },
    {
      speaker: 'Otávio Santana',
      title: 'Lambdas, Streams, com Java8 e além!',
      description: 'Certamente com a versão do Java 8, além das melhorias de performances, tivemos diversas melhorias que tornaram a vida do desenvolvedor muito mais fácil, como Lambda e Streams conheça esses recursos e muitos outros que virão para compor o vigésimo ano da linguagem mais utilizada no mundo.',
      aboutSpeaker: 'Um Desenvolvedor apaixonado pelo que faz. Praticante da filosofia ágil e do desenvolvimento poliglota na Bahia, JUG Leader do JavaBahia, coordenador do SouJava, um dos fomentadores do grupo LinguÁgil. Leva a sério o termo “Make the future Java” presente como membro do Java Expert Group trabalhando na próxima geração de todas as plataformas Java (SE, ME, EE), principalmente na SE em que contribui diretamente para o projeto OpenJDK, além de ser membro atuante do JCP inclusive ganhando um outstanding member award. Presente nos maiores eventos Java e desenvolvimento de software do mundo. Contribuiu para diversos projetos Open Source além de ser membro da OSI, Open Source Instituite, desenvolve e realiza manutenções nos principais projetos Java da Apache Foundation na qual atualmente é commiter. além de escrever artigos para DevMedia, revista espírito livre e java.net e atuar como engenheiro de software no Elo7, o maior e-commerce de artesanato do Brasil.',
      image: ['images/talks/otavio-santana.jpg']
    },
    {
      speaker: 'Fernando Masanori',
      title: 'Python para Zumbis',
      description: 'Conheça esta importante linguagem de programação com a mão na massa e de uma maneira divertida. Um conteúdo aprovado por milhares de pessoas que já fizeram a versão completa do curso.',
      aboutSpeaker: 'Docente da FATEC São José dos Campos, adora dar aulas, graduado em Computação pelo IME-USP, mestrado pelo ITA.<br/><br/>Desenvolveu projetos para a Cobra Tecnologia, Credicard Mastercard, PriceWaterhouse & Coopers e Itaú BankBoston. Interesses: Python, NoSQL, Pentaho, Google Technology, Facebook.',
      image: ['images/talks/fernando-masanori.jpg']
    },
    {
      speaker: 'Osni Oliveira',
      title: 'DDD - quando o modelo é tudo, menos trivial',
      description: 'Conceitos básicos sobre modelagem, conceitos básicos sobre DDD, linguagem ubíqua e o código, modelagem evolutiva e iterativa, aplicando boas práticas de Orientação a Objetos.',
      aboutSpeaker: 'Engenheiro de Software no Elo7 e instrutor na Caelum, com uma carreira de cerca de 20 anos. Estudou Processamento de Dados no Colégio Técnico da Unicamp e Análise de Sistemas na PUC Campinas. Já trabalhou com C/C++, Visual Basic e PHP, entre outras tecnologias. Hoje, trabalha com Java, estuda C#/.NET e Objective-C/iOS.',
      image: ['images/talks/osni-oliveira.jpg']
    }
  ];

  function loadModalContent( key ) {
    var info = schedules[key];

    var $modal = $('#myModal');

    $modal.find('.speaker-images').html('');
    $(info.image).each(function(item, source){
      console.log(item);
      $modal.find('.speaker-images').append(
        $('<img/>')
        .addClass('img-circle img-responsive img-speaker center-block img-modal')
        .attr('width', 206)
        .attr('height', 206)
        .attr('src', source)
      );
    });

    if (info.image.length > 1) {
      $modal.find('.speaker-images img').addClass('pull-left')
        .attr('width', 150)
        .attr('height', 150);
    }

    $modal.find('.speaker-name').text(info.speaker);
    $modal.find('.speaker-title').text(info.title);
    $modal.find('.speaker-desc').html(info.description);
    $modal.find('.speaker-about').html(info.aboutSpeaker);

    $modal.modal({ keyboard: false }).show();
  }

  if( $('.open-modal')[0] ) {
    $('.open-modal').on('click', function(){
      loadModalContent( $(this).data('schedule-key'));
    });
  }

})(jQuery);
