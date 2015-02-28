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
    },
    {
      speaker: 'Angelo Orrico',
      title: 'Desenvolvimento de aplicações móveis: principais desafios para os marinheiros de primeira viagem',
      description: 'A necessidade de desenvolver aplicações móveis é cada vez maior tanto para profissionais liberais quanto para as empresas. Entretanto, a falta de experiência na criação de apps mobile impacta diretamente no tempo e na qualidade dos produtos desenvolvidos, fatores chave que determinam o sucesso e a aceitação das aplicações pelo mercado.<br/>Mesmo para os profissionais que possuem grandes conhecimentos em programação de sistemas web ou desktop, a criação de sistemas mobile pode ser um grande desafio, pois há uma enorme quebra de paradigmas quando se trata de aplicações e aparelhos móveis.<br/>Por isto, conhecer alguns dos principais problemas e barreiras logo no início do desenvolvimento de um projeto de mobilidade é crucial para os marinheiros de primeira viagem que desejam criar aplicações móveis robustas e de qualidade!',
      aboutSpeaker:  'Angelo Orrico é analista sênior de mobilidade na MTM Tecnologia com mais de 9 anos de experiência prática no desenvolvimento de aplicações mobile de grande porte para os mais variados segmentos de mercado. Trabalhou no desenvolvimento de algumas das maiores soluções de mobilidade corporativa do Brasil, além de desenvolver apps mobile para grandes clientes internacionais.<br/>Está sempre antenado com as inovações tecnológicas na área de mobilidade e investe bastante em Pesquisa & Desenvolvimento, almejando sempre acompanhar o estado da arte em matéria de aplicações móveis, tanto nativas quanto híbridas.',
      image: ['images/talks/angelo-orrico.jpg']
    },
    {
      speaker: 'Alexandre Santos Costa',
      title: 'Processos Acessíveis de Desenvolvimento de Software',
      description: 'As metodologias ágeis e seu foco em pessoas provém um ambiente ideal para inclusão de deficientes.<br/>Saiba como ouvindo a experiência de quem vive isto em seu dia-a-dia.',
      aboutSpeaker:  'Alexandre Santos Costa desenvolvedor, deficiente visual e apaixonado por tecnologia, evangelizador da acessibilidade trabalha a mais de 20  anos em projetos nos mais diversos segmentos.',
      image: ['images/talks/alexandre-costa.jpg']
    },
    {
      speaker: 'Rafael Miranda',
      title: 'Em busca do desenvolvedor perdido',
      description: 'Você se considera um desenvolvedor (ou desenvolvedora) Profissional? E quanto aos seus colegas de trabalho e de profissão, considera-os Profissionais? Quais os maiores desafios que você enfrentou nos últimos tempos em projetos de software? E quantas gambiarras ou "soluções de contorno" você fez? Nesta palestra falarei sobre as experiências que tive no último ano buscando, entrevistando e contratando desenvolvedores. Falaremos sobre agilidade, profissionalismo, algumas coisas técnicas e outras não. Levantaremos diversas perguntas difíceis, para as quais provavelmente surgirão visões e opiniões polêmicas...',
      aboutSpeaker:  '',
      image: ['images/talks/rafael-miranda.png']
    },
    {
      speaker: 'Marlon Carvalho',
      title: 'SÉRIO, SUA API NÃO É RESTFUL.',
      description: 'Os sistemas monolíticos estão em baixa. Um sistema que não provê uma interface de acesso pública não está preparado para o novo mundo que nos cerca: totalmente mobile. E APIs são a resposta. Mas, este não é um assunto novo, pois já ouvimos falar de SOAP, RPC-XML e muitas outras siglas há bastante tempo.<br/>Atualmente, temos a sigla REST, que designa uma filosofia para a construção de APIs que utilizam em sua plenitude as características da web. Mas, você aí, que gosta de clamar que sua API é RESTful, tem certeza que ela é mesmo?<br/>O objetivo desta palestra é demonstrar as reais características das APIs verdadeiramente RESTful, como construí-las e fazer um pedido para que os desenvolvedores revejam suas APIs para as adequarem a este conceito.',
      aboutSpeaker:  'Desenvolvedor poliglota há 20 anos, hoje é entusiasta Ruby e fã de programação mobile. Tem na tecnologia sua paixão, na família sua motivação e na degustação de cervejas artesanais seu hobby predileto. Líder do Google Developers Group de Salvador e Colunista da revista JavaMagazine.',
      image: ['images/talks/marlon-carvalho.jpeg']
    },
    {
      speaker: 'Wilson Mendes',
      title: 'Performance com AngularJS',
      description: 'Sua aplicação AngularJS está lenta? Como otimizar a performance? Combinar outras tecnologias como workaround são paliativos, pois não resolvem o problema. Nessa palestra, entenda conceitos do núcleo do AngularJS e várias técnicas para aumentar o desempenho de suas aplicações web.<br/>Vamos explorar conceitos fundamentais como o ciclo de vida do $rootScope e como funciona o dirty checking, assim como $compile, $watch e $emit. Veremos também boas práticas ao utilizar diretivas, filters, services e outros componentes do framework. Outro ponto abordado é a utilização de paradigmas e patterns assíncronos para melhorar o desempenho de suas aplicações.<br/>Por fim, veremos boas práticas, como melhorar os nossos testes unitários e end-to-end, discutiremos conceitos de lazy web e conheceremo ferramentas que podem nos ajudar nesta tarefa.',
      aboutSpeaker:  'Wilson é GDE (Google Developer Expert) de AngularJS, organizador do GDG Salvador, apaixonado por tecnologia e ativo em várias comunidades com foco em desenvolvimento web, incluindo AngularJS, JavaScript, HTML5, CSS3, Workflow, web performance e segurança. Participa de organizações de eventos, palestra em conferências pelo Brasil e contribui com vários projetos open source.',
      image: ['images/talks/wilson-mendes.jpeg']
    },
    {
      speaker: 'Osni Oliveira',
      title: 'DDD - Ágil ou Frágil?',
      description: 'Qual a relação entre DDD e Agilidade? Podemos ter um sem o outro? Entenda como podemos aplicá-los em conjunto e extrair o máximo de ambos.',
      aboutSpeaker: 'Engenheiro de Software no Elo7 e instrutor na Caelum, com uma carreira de cerca de 20 anos. Estudou Processamento de Dados no Colégio Técnico da Unicamp e Análise de Sistemas na PUC Campinas. Já trabalhou com C/C++, Visual Basic e PHP, entre outras tecnologias. Hoje, trabalha com Java, estuda C#/.NET e Objective-C/iOS.',
      image: ['images/talks/osni-oliveira.jpg']
    },
    {
      speaker: 'Vladson Freire',
      title: 'Requisitos Ágeis',
      description: 'Scrum Master e Sócio Fundador da Oncedev Tecnologia da Informação. Possui mais de sete anos de experiência em desenvolvimento de sistemas utilizando .NET. Em 2013 teve seu primeiro contato com metodologia ágeis após a participação da implantação do Lean Capgemini na filial Salvador. Após esse primeiro contato tornou-se entusiasta do Scrum e Kanban.',
      aboutSpeaker: '',
      image: ['images/talks/vladson-freire.jpg']
    },
    {
      speaker: 'Rafael Gomes',
      title: 'O fim do "na minha máquina funciona"',
      description: 'Docker é um plataforma aberta para desenvolvedores criarem, distribuírem e rodarem aplicações distribuídas em Containers. No Docker, esses containers são como máquinas virtuais, porém simplificadas e normalmente sem overhead da virtualização.<br/>Essa apresentação tem como objetivo explicar como utilizar essa nova solução, demonstrando que é possível replicar facilmente o ambiente de produção para desenvolvimento e vice-versa, assim como também as melhores práticas, tanto de segurança, como de produtividade do seu uso.',
      aboutSpeaker: 'Soteropolitano, hacker urbano e consultor de infraestrutura, formado na Universidade de Salvador no curso de Gestão de Redes, pós-graduando pela Universidade Federal da Bahia em sistemas distribuídos.<br/>Trabalho atualmente como Arquiteto de Soluções na Superintendência de Tecnologia da Informação da  Universidade Federal da Bahia, focado em aplicações, monitoramento e segurança. Certificado em LPIC-1, MCSO e Zabbix Certified Specialist.',
      image: ['images/talks/rafael-gomes.jpg']
    },
    {
      speaker: 'Juliano Ribeiro',
      title: 'Nós precisamos de um P.O.!',
      description: 'Porque os projetos falham, mesmo sendo bem construídos, usando clean code e as melhores técnicas de desenvolvimento? Porque os produtos ficam lá, estacionados, sem vendas e com dezenas de features implementadas e não usadas? Vamos conversar sobre esses assuntos hoje.',
      aboutSpeaker: 'Juliano Ribeiro atuou como team member, Scrum Master e Agile Coach. Desenvolve software a 20 anos, liderou a equipe Delphi na Produtec por 5 anos e implementou diversas práticas de XP e Scrum nessa e em outras empresas da região. É CSM, CSP (SA) e CDD (Embarcadero). Palestrou no Agile Tour em Maringá e Curitiba (2012) e no Scrum Bolívia Day.<br/>Ministrou cursos ágeis no Brasil e EUA e atua como Agile Coach e Trainer pela Massimus C&T.',
      image: ['images/talks/juliano-ribeiro.jpg']
    },
    {
      speaker: 'Juliano Ribeiro',
      title: 'Extreme Pair Programming',
      description: 'Programação pareada é indiscutivelmente uma excelente prática de desenvolvimento de software. Porém, quando levada ao extremo de ser imposta em 100% do tempo trará os mesmos benefícios? Nessa apresentação será relatada uma experiência na qual isso ocorreu e quais foram os prós e contras dessa ação. Também irei demonstrar como essa prática evoluiu para um modelo menos extremo, porém sem deixar de reconhecer e incentivar a sua utilização, principalmente em equipes que têm alta rotatividade de desenvolvedores.',
      aboutSpeaker: 'Juliano Ribeiro atuou como team member, Scrum Master e Agile Coach. Desenvolve software a 20 anos, liderou a equipe Delphi na Produtec por 5 anos e implementou diversas práticas de XP e Scrum nessa e em outras empresas da região. É CSM, CSP (SA) e CDD (Embarcadero). Palestrou no Agile Tour em Maringá e Curitiba (2012) e no Scrum Bolívia Day.<br/>Ministrou cursos ágeis no Brasil e EUA e atua como Agile Coach e Trainer pela Massimus C&T.',
      image: ['images/talks/juliano-ribeiro.jpg']
    },
    {
      speaker: 'Nelson Glauber',
      title: 'Acelerando o desenvolvimento com Android Libs',
      description: 'Nessa apresentação veremos como agilizar o desenvolvimento, testes e distribuição de aplicações Android utilizando as bibliotecas mais "famosas" do mercado.',
      aboutSpeaker: 'Mestre em Engenharia de Software pelo Centro de Estudos e Sistemas Avançados do Recife (CESAR), onde atua desde 2006 como engenheiro de sistemas especializado em projetos mobile. É professor de tecnologias móveis em cursos de extensão, graduação e pós-graduação na Unibratec e em outras instituições do nordeste. Em 2014, foi nomeado pelo Google como primeiro Developer Expert de Android da América Latina. É autor do livro "Dominando o Android, do básico ao avançado" lançado pela editora Novatec em 2015.',
      image: ['images/talks/nelson-glauber.jpg']
    },
    {
      speaker: 'Victor Germano',
      title: 'Democracia Organizacional',
      description: 'Auto-organização, auto-gestão, descentralização de poder são todos valores da comunidade ágil. Mas por algum motivo eles terminam dentro do time de desenvolvimento. O que aconteceria se esses valores fosse além? Se toda a empresa trabalhasse com liderança servidora? Se toda a hierarquia fosse meritocrática e flexível? Se não houvessem gerentes comandando e controlando, em nenhum ponto da empresa? Teríamos uma empresa democrática. E é possível.<br/>Há décadas temos casos de sucesso que seguem a filosofia da democracia organizacional. Nesta palestra faremos uma análise histórica das origens da hierarquia e avaliaremos suas consequências. Avaliaremos então as opções democráticas e alguns casos de sucesso com empresas de todos os tamanhos, demonstrando como eles fizeram para dar certo.',
      aboutSpeaker: 'Desenvolvedor há 13 anos, Escalador, Harcore Gamer aficionado e mais recentemente: empreendedor. Trabalhando com métodos ágeis desde 2003, Victor já viu várias empresas falirem. Atuando como desenvolvedor e coach ágil, vem organizando e palestrando em eventos há 10 anos: Maré de Agilidade, Ágiles, TDC, AgileBrazil, Capira Ágil entre muitos outros.<br/>Depois de inúmeras tentativas "in company" de mudança cultural, cansou de trabalhar para os outros e decidiu o óbvio: fazer a própria empresa dar certo. Assim nasceu a Lambda3, uma empresa multidisciplinar que atualmente possui projetos Ágeis de diversos tamanhos entregando valor de negócio com inovação e muito bom humor. Victor também é maluco o bastante para acreditar que é possível um mundo sem gerentes.<br/>Natural de Guarulhos SP, já rodou o mundo à procura de desafios. Já morou em Florianópolis, Montreal, Dublin e São Paulo fazendo o que gosta: software!',
      image: ['images/talks/victor-germano.jpg']
    },
    {
      speaker: 'Henrique Bastos',
      title: 'Como um programador pode ser dono do seu tempo e fazer o que quiser.',
      description: 'Tá no título! Bora conversar sobre as tecnologias que nenhum curso de programação menciona, mas que são essenciais para quem quer ter nas mãos as rédeas da própria carreira.',
      aboutSpeaker: 'Henrique Bastos é um inquieto eupreendedor. Aplica tecnologia para iniciativas que promovem autonomia de pessoas comuns. É membro da Python Software Foundation, da Django Software Foundation e da Associação PythonBrasil, atuando constantemente nas comunidades de programadores ministrando palestras, cursos e evangelizando o empoderamento através do desenvolvimento software, no Brasil e no exterior.',
      image: ['images/talks/henrique-bastos.png']
    },
    {
      speaker: 'Achilles Fróes',
      title: 'Continuous Delivery com Visual Studio + TFS + Azure',
      description: 'Apresentar na prática a entrega contínua, um conjunto de práticas e princípios cujo objetivo é reduzir o tempo de entrega do software e por sua vez feedback do cliente, afinal software bom é aquele entregue e funcionando.',
      aboutSpeaker: 'Formado em Sistemas de Informação pela UniJorge, Microsoft Certified Trainer e Microsoft Certified Solutions Developer: Web Applications. A mais de 10 desenvolve sistemas web, atualmente atual como consultor e líder técnico, além de ministrar cursos oficiais Microsoft na Sênior Labs. Atualmente curte ASP.NET MVC e suas tecnologias satélite como: Entity Framework, Web API, SignalR (real-time), jQuery, Knockout, CSS e HTML 5.',
      image: ['images/talks/achilles-froes.jpeg']
    },
    {
      speaker: 'Leonardo Soares/Leandro Coelho',
      title: 'Como acontece a mudança de cultura ágil?',
      description: 'Coragem, comprometimento, comportamento e comunidade mais que práticas, processos e prescrição. Praticas e métodos são essenciais para pavimentar um caminho sustentável, mas sem mudança na forma de pensar, não passam de mais do mesmo. Processos e prescrição, não podem ser um escape para a falta de coragem na implementação do Ágil.',
      aboutSpeaker: 'Leonardo Soares:<br/><br/>Cientista da Computação formado pela UFBA, com MBA em Consultoria de TI pela Unifacs. Empresário, programador poliglota, entusiasta de tecnologias e métodos ágeis. Micro-agricultor nas horas vagas. Experiência com desenvolvimento de Software em diversos mercados. Atualmente dedica a maior parte tempo, a atividades de coach e facilitador ágil.<br/><br/>Leandro Coelho:<br/><br/>Analista de Sistemas com especialização em Sistemas Distribuídos pela UCSal. Trabalha com gente há mais de 10 anos. Promove a adoção do Ágil no Serpro, atuando como coach (seja lá o que isso significa). É entusiasta de Gamification, Playfull Learning e Serious Games.',
      image: ['images/talks/leonardo-soares.jpg', 'images/talks/leandro-coelho.jpg']
    },
    {
      speaker: 'Marcos Antônio',
      title: 'METODOLOGIAS ÁGEIS EM SISTEMAS ENTERPRISE',
      description: 'A palestra tem com objetivo demonstrar a aplicação de uma metodologia híbrida que foi utilizada na implementação de um sistema integrado em uma empresa de pequeno porte. A metodologia baseia-se na adaptação de três modelos de processos ágeis. São eles: Scrum, Programação Extrema (XP) e Desenvolvimento Voltado à Funcionalidade (FDD).',
      aboutSpeaker: 'Bacharel em Ciência da Computação pelo Centro Universitário de Formiga (2008). Pós Graduado em MBA em BPM - Gestão de Processo de Negócio Faculdades Pitágoras - Belo Horizonte (2011). Pós Graduado em Gestão de Projetos - UNIS-MG (2013). Atualmente atuo como Analista de Sistema Senior no Centro Universitário de Formiga - MG. Participei no desenvolvimento de vários projetos, apresentações no congresso internacional Contesc - USP 9° e 10º edição.<br/>Publicação na revista periódica do curso de Ciência da Computação da Universidade de Salvador. Atuo na área de TIC desde 2003.',
      image: ['images/talks/a-confirmar.jpg']
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

  $(window).load(function(){
    var tab = window.location.hash;
    if (tab !== '') {
      $('.nav-tabs').find('a[href="' + tab + '"]').trigger('click');
    }
  });

})(jQuery);
