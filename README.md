2015.linguagil.com.br
=====================

Site do evento 2015

## Dependências

* [jekyll](http://jekyllrb.com/)

## Ambiente de desenvolvimento

É possível desenvolver usando vagrant, bundler ou instalar _globalmente_.

### Vagrant

Instale o vagrant e suba a máquina.

```
vagrant up
```

O jekyll estará instalado globalmente.

Para executar o jekyll dentro da máquina virtual:

```
vagrant ssh
cd /vagrant
jekyll serve
```

As portas mapeadas são:

* rails: 3000 -> http://localhost:30000
* jekyll: 4000 -> http://localhost:40000

### Bundler

```
bundle install
```

para rodar o jekyll use

```
bundle exec jekyll serve
```

### Gem global

Instalação:

```
gem install jekyll
```

para rodar o jekyll use

```
jekyll serve
```

