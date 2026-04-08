/\*
A busca binária é um algoritmo cujo lema é: dividir para conquistar;

Funciona assim: temos uma lista ordenada com 100 números;

Você tenta adivinhar um número, sempre no meio. Suponhamos que Mike esteja
pensando em um número. Se o seu palpite for maior ou menor que o número de Mike,
ele diz 'maior' ou 'menor';

Lembre-se: dividir para conquistar, então começamos com 50:

-- Mike: é maior;

Então sabemos que 50 é MAIOR que o número que ele está pensando,
porque já sabemos que todos os números de 50 a 100
são ainda maiores. Portanto, podemos DESCARTAR esses números, REDUZINDO
o tamanho da lista até adivinharmos o número que Mike está pensando;

Ótimo! Agora vamos para o próximo palpite.
Temos entre 1 e 49, vamos chutar 25:

-- Mike: É menor;

Sabemos que 25 é MENOR que o número que ele está pensando, então
podemos DESCARTAR todos os números entre 1 e 25 porque eles são ainda MENORES;

Agora temos entre 26 e 49, vamos chutar 37:

-- Mike: É maior;

Agora sabemos que entre 26 e 49, 37 é maior, então todos os números depois de
37 serão ainda maiores, então descartamos 37 e seus números consecutivos,

Ok, estamos perto! Agora temos entre 26 e 37, o número do meio
entre 26 e 37 é 31, vamos chutar 31:

-- Mike: É menor;

Ah, não! Ok, ok, agora sabemos que 31 é menor que o
número que ele está pensando, então todos os números antes de 31 também serão
menores, então descartamos os números menores que 31;

Agora temos entre 32 e 37, o número intermediário é 34, vamos chutar 34:

-- Mike: 34 é maior que o número que estou pensando;

Ok, se 34 é maior que o número que ele está pensando, e nós
temos de 34 a 37, podemos descartá-los e ficar apenas com 32 e 33, vamos chutar 32;

-- Mike: Você acertou!!!

Agora vamos revisar: de uma lista de 100 números, se tivéssemos usado uma busca simples, no
pior cenário teríamos que tentar 100 vezes. Agora, com a busca binária, passamos de: 100 -> 50 -> 37 -> 31 -> 34 -> !!32!!, veja, apenas 6 tentativas.

No pior cenário com a busca binária, tivemos que perguntar 6 vezes; No pior cenário possível, com uma busca simples, teríamos que perguntar 100 vezes.

\*/
