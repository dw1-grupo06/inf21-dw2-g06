# Capítulo 1 : Car Dealpership API

## Descrição

Esta API foi desenvolvida com o recurso à OpenAPI, baseada na Arquitetura REST.
A API tem o intuito de fazer a gestão de um Concessionário de Automóveis. Consegue oferecer informação sobre motores, carros, fabricantes e proprietários. Abaixo apresenta-se todas as funcionalidades para controlar toda a informação descrita anteriormente.

A API é composta por 7 controladores:

* CarController
* EngineController
* EngineCarController
* ManufacturesController
* ManufacturerCarController
* OwnerController
* OwnerCarController


</br>

O controlador **CarController** é composto por 8 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** -> Retorna o numero de carros presentes na base de dados.
* **PUT{id}** -> Efetua alterações a um dado carro com um respetivo ID passado como parâmetro.
* **PATCH{id}** -> Efetua alterações a um dado carro com um respetivo ID passado como parâmetro.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo carro.
* **DELETE{id}** -> Elimina um carro da base de dados com um dado ID passado como parâmetro.
* **POST** -> Adiciona um carro à base de dados.
* **PATCH** -> Efetua alterações a todos os carros presentes na base de dados.
* **GET** -> Retorna um array com todos os carros presentes na base de dados.

<br>

O controlador **EngineController** é composto por 8 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** -> Retorna o numero de motores presentes na base de dados.
* **PUT{id}** -> Efetua alterações a um dado motor com um respetivo ID passado como parâmetro.
* **PATCH{id}** -> Efetua alterações a um dado motor com um respetivo ID passado como parâmetro.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo motor.
* **DELETE{id}** -> Elimina um motor da base de dados com um dado ID passado como parâmetro.
* **POST** -> Adiciona um motor à base de dados.
* **PATCH** -> Efetua alterações a todos os motores presentes na base de dados.
* **GET** -> Retorna um array com todos os motores presentes na base de dados.

<br>

O controlador **EngineCarController** é composto por 4 funcionalidades baseadas em verbos do protocolo HTTP:
* **POST{id}** -> Adiciona um carro a um determinado motor com um ID passado como parâmetro.
* **PATCH{id}** -> Efetua alterações a todos os carros associados a um motor com um ID passado como parâmetro.
* **GET{id}** -> Retorna todos os carros associados a um motor com um ID passado como parâmetro.
* **DELETE{id}** -> Elimina todos os carros da base de dados associados a um motor com um ID passado como parâmetro.

<br>

O controlador **ManufacturerController** é composto por 8 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** -> Retorna o numero de construtores presentes na base de dados.
* **PUT{id}** -> Efetua alterações a um dado construtor com um respetivo ID passado como parâmetro.
* **PATCH{id}** -> Efetua alterações a um dado construtor com um respetivo ID passado como parâmetro.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo construtor.
* **DELETE{id}** -> Elimina um construtor da base de dados com um dado ID passado como parâmetro.
* **POST** -> Adiciona um construtor à base de dados.
* **PATCH** -> Efetua alterações a todos os construtores presentes na base de dados.
* **GET** -> Retorna um array com todos os construtores presentes na base de dados.

<br>

O controlador **ManufacturerCarController** é composto por 4 funcionalidade baseada nos verbos do protocolo HTTP:
* **POST{id}** -> Adiciona um carro a um determinado construtor com um ID passado como parâmetro.
* **PATCH{id}** -> Efetua alterações a todos os carros associados a um construtor com um ID passado como parâmetro.
* **GET{id}** -> Retorna todos os carros associados a um construtor com um ID passado como parâmetro.
* **DELETE{id}** -> Elimina todos os carros da base de dados associados a um construtor com um ID passado como parâmetro.

<br>

O controlador **OwnerController** é composto por 8 funcionalidade baseada nos verbos do protocolo HTTP:
* **GET** -> Retorna o numero de proprietários presentes na base de dados.
* **PUT{id}** -> Efetua alterações a um dado proprietário com um respetivo ID passado como parâmetro.
* **PATCH{id}** -> Efetua alterações a um dado proprietário com um respetivo ID passado como parâmetro.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo proprietário.
* **DELETE{id}** -> Elimina um proprietário da base de dados com um dado ID passado como parâmetro.
* **POST** -> Adiciona um proprietário à base de dados.
* **PATCH** -> Efetua alterações a todos os proprietários presentes na base de dados.
* **GET** -> Retorna um array com todos os proprietários presentes na base de dados.

<br>

O controlador **OwnerCarController** é composto por 4 funcionalidade baseada nos verbos do protocolo HTTP:
* **POST{id}** -> Adiciona um carro a um determinado prorietário com um ID passado como parâmetro.
* **PATCH{id}** -> Efetua alterações a todos os carros associados a um prorietário com um ID passado como parâmetro.
* **GET{id}** -> Retorna todos os carros associados a um prorietário com um ID passado como parâmetro.
* **DELETE{id}** -> Elimina todos os carros da base de dados associados a um prorietário com um ID passado como parâmetro.

<br>

## Grupo 6

* André Cacheira / Perfil GitHub: [@Cacheira14](https://github.com/Cacheira14)
* Bruno Sousa / Perfil GitHub: [@brunomfsrw1](https://github.com/brunomfsrw1)
* Raul Gonçalves / Perfil GitHub: [@RaulGoncalves21x](https://github.com/RaulGoncalves21x)

<br>

| [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) | [>](capitulo2.md) | [>>](capitulo3.md) |
| :---: | :---: | :---: | :---: | :---: |
