# Minhas anotações
## Diretivas de componentes:
  usado com um modelo. Esse tipo de diretiva é a mais comum.
```html
Ex: "<app-listarPensamentos>".
```

## Diretivas estruturais: 
  altera o layout do DOM adicionando e removendo elementos DOM.

Ex: NgIf, NgFor. NgSwitch.

## Diretivas de atributos:
  altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.

Ex: NgClass, NgStyle.

## Sobre a classe Validator:
 lista com os métodos mais usados e suas funcionalidades

```javascript
Validators.min()
```
Validador que exige que o valor do controle seja maior ou igual ao número fornecido.

```javascript
Validators.max()
```
Validador que exige que o valor do controle seja menor ou igual ao número fornecido.

```javascript
Validators.requiredTrue()
```
Validador que exige que o valor do controle seja verdadeiro. Este validador é comumente usado para caixas de seleção obrigatórias.

```javascript
Validators.email()
```
Validador que exige que o valor do controle passe em um teste de validação de email.

```javascript
Validators.maxLength()
```
Validador que exige que o comprimento do valor do controle seja menor ou igual ao tamanho máximo fornecido.

```javascript
Validators.nullValidator()
```
Validador de valores nulos.

```javascript
Validators.composeAsync()
```
Compõe vários validadores assíncronos em uma única função que retorna a união dos objetos de erro individuais para o controle fornecido.
