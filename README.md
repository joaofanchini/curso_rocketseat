# Projeto 01 - Ignite Feed

## Projeto relacionado à parte 1 do curso Fundamentos React

Foi utilizado CSS Modules, pois seu formato de separação de arquivo 
permite que o estilo já seja aplicado de modo a possuir um escopo, 
sendo mais uma camada de "segurança" para aplicação de estilo 
e manutenabilidade.

# Projeto 01D - ToDo App

## Projeto relacinado ao desafio proposto para o curso Fundamentos React

# Projeto 02 - Timer

## Projeto relacionado à parte 2 do curso SPAs

Os formulários podem ser construídos de duas formas: CONTROLLED e UNCONTROLLED.

CONTROLLED nós fazemos com que os inputs sejam acompanhados para que haja um acompanhamento dos
seus valores. Em React normalmente nós fazemos isso através do Hook useState, o problema que quando
o useState recebe um parâmetro, ele faz a renderização de sua tela do componente o tempo todo, e quando 
a tela possui diversos inputs, acaba tendo um problema de performance para a renderização da tela como um todo.

UNCONTROLLED nós obtedos os valores dos inputs somente quando precisamos. É o modo mais performático de se interagir 
com formulários.

** As bibliotecas também fazem essa separação de lógica para combinar componentes.