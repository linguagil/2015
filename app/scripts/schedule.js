/* globals console */

(function($) {
  'use strict';

  var schedules = [
    {
      speaker: 'Wilson Mendes',
      title: 'AngularJS: Um Framework para facilitar sua vida (o curso)',
      description: 'Angularjs é um framework javascript construido e mantido pelo grupo de engenheiros do Google, ele usa o HTML como uma "template engine" aliado a conceitos de Orientação a Objetos, testes, dentre outros, no intuito de fornecer uma solução completa para o cliente-side de sua aplicação. Além disso tem total compatibilidade com as bibliotecas javascript mais utilizadas, como jQuery. é um novo conceito para desenvolvimento de web apps client-site.\n\nEste curso vai mostrar através de exemplos práticos que é possível criar aplicações complexas com um código baseado em boas práticas, simples, coeso, performático e modularizado.',
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
      speaker: 'Robson Peixoto/Rodrigo Ribeiro',
      title: 'Scala: Programação funcional na JVM',
      description: '',
      aboutSpeaker: '',
      image: ['images/talks/a-confirmar.jpg', 'images/talks/a-confirmar.jpg']
    },
    {
      speaker: 'Paulo Ortins',
      title: 'Bem vindo ao mundo fantástico do Xamarin',
      description: '',
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
      aboutSpeaker: 'Docente da FATEC São José dos Campos, adora dar aulas, graduado em Computação pelo IME-USP, mestrado pelo ITA.\n\nDesenvolveu projetos para a Cobra Tecnologia, Credicard Mastercard, PriceWaterhouse & Coopers e Itaú BankBoston. Interesses: Python, NoSQL, Pentaho, Google Technology, Facebook.',
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
        .addClass('img-circle img-responsive img-speaker center-block')
        .attr('width', 206)
        .attr('height', 206)
        .attr('src', source)
      );
    });

    if (info.image.length > 1) {
      $modal.find('.speaker-images img').addClass('pull-left');
    }

    $modal.find('.speaker-desc').text(info.description);
    $modal.find('.speaker-name').text(info.speaker);
    $modal.find('.speaker-title').text(info.title);
    $modal.find('.speaker-about').text(info.aboutSpeaker);

    $modal.modal({ keyboard: false }).show();
  }

  if( $('.open-modal')[0] ) {
    $('.open-modal').on('click', function(){
      loadModalContent( $(this).data('schedule-key'));
    });
  }

})(jQuery);
