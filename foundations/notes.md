# Minhas anotações

## States:

<b>State</b> is the data that determines a component’s behaviour and rendering.\
<b>Stateful</b> components manage their own state.\
<b>Stateless</b> components rely on inputs for data and outputs for events.

## Data Binding:

<b>Interpolation</b>: Data flows from controller to the View and mixes with HTML tags. This allows one to display the value of a component’s property in the template by wrapping it in double curly braces ```{{ property }}```.

<b>Property binding</b>: Data flows from the controller to the View. This allows to bind a component’s property to an element’s property by using square brackets ```[property]```.

<b>Event binding</b>: When we send Event from the View to the Component. This allows to bind a component’s method to an element’s event by using round brackets ```(click)="save()"```.

<b>Two-way binding</b>: Bidirectional. Data flows from Component to the View and sends Event from View to the Component. This allows to bind a component’s property to an element’s property and vice versa using the ngModel directive. ```<input [(ngModel)]="name"/>```

## Diretivas e seus tipos:
directives, basically, change the behavior of the HTML DOM.

### Diretivas de componentes:
  usado com um modelo. Esse tipo de diretiva é a mais comum.
```html
Ex: "<app-listarPensamentos>".
```

### Diretivas estruturais: 
  altera o layout do DOM adicionando e removendo elementos DOM.

Ex: NgIf, NgFor. NgSwitch.

### Diretivas de atributos:
  altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.

Ex: NgClass, NgStyle.

### Sobre a classe Validator:
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

### Observables
Observables are lazy Push collections of multiple values.

