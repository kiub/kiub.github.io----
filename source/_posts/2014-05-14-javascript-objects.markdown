---
layout: post
title: "javaScript Objects"
date: 2014-05-14 12:37:12 -0400
permalink: /year/month/day/title.html
published: true
comments: false
# Multiple categories
categories: [code]
# Multiple tags
tags: [javaScript, oop]
---

Los objetos tienen atributos y métodos, el siguiente ejemplo me aclaró la lógica de la programació orientada a objetos (). En este caso utilizamos un constructor e instanciamos.

``` javascript create object
// make a constructor function
function Car(model, wheels, seats, doors, year){
	this.model = model;
	this.wheels = wheels;
	this.seats = seats;
	this.doors = doors;
	this.year = year;
}
// new object instances
var sentra = new Car('Sentra 1999', '4', '5', '1999');
var reliant = new Car('Rialto', '3', '2', '1983');
// output object attr
sentra.wheels // 4
reliant.wheels // 3
```
#### Añadiendo metodos a nuestro objeto
El siguiente ejemplo se basa en la clasificación de "Antique Vehicle" en la Florida
>In Florida, an antique vehicle is defined as any motor vehicle that was manufactured after 1945 and is at least thirty years old.

Creamos una nueva funcion que calcule cuantos años faltan para clasificar basandonos en los 30 años de antigüedad
``` javascript create new method
function yearsToAntic(){
	var now = new Date();
	var numYears = now.getFullYear() - this.year;
	if (numYears >= 30 ){
		return 'It is Antique';
	} else {
		return 'Not Antique';
	}
}
```

Añadimos el método al nuestro constructor

{% codeblock lang:javascript add method to object %}
function Car(model, wheels, seats, doors, year){
	this.model = model;
	this.wheels = wheels;
	this.seats = seats;
	this.doors = doors;
	this.year = year;
	// new method. Atention! not include parentesis to the end
	this.antique = yearsToAntic;
}
{% endcodeblock %}

Ahora podemos llamar al nuevo metodo perteneciente al objeto. Hemos de tener cuidado con la sintaxis ya que hemos de añadir los parentesís al método a diferencia del atributo que no lo lleva `code`.

``` javascript add method to object
reliant.antique() // It is Antique
```

