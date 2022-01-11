# Capítulo 1 : Car Dealpership API

## Descrição

Esta API foi desenvolvida com o recurso à OpenAPI, baseada na Arquitetura REST.
A API tem o intuito de fazer a gestão de um Concessionário de Automóveis. Consegue oferecer informação sobre motores, carros, fabricantes e proprietários. Abaixo apresenta-se todas as funcionalidades para controlar toda a informação descrita anteriormente.

A API é composta por 7 controladores:
* EngineController
* CarsController
* ManufacturersController
* OwnersController
* EnginesByCarController
* OwnersByCarController
* ManufacturersByCarController

</br>

O controlador **EnginesController** é composto por 5 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** -> Retorna todos os motores presentes na base de dados.
* **POST** -> Adiciona um motor à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo motor.
* **PUT{id}** -> Efetua alterações a um dado motor com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Remove da base de dados um motor com um respetivo ID passado como parâmetro.

<br>

O controlador **CarsController** é composto por 5 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** -> Retorna todos os carros presentes na base de dados.
* **POST** -> Adiciona um carro à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo carro.
* **PUT{id}** -> Efetua alterações a um dado carro com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Remove da base de dados um carro com um respetivo ID passado como parâmetro.

<br>

O controlador **ManufacturersController** é composto por 5 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** -> Retorna todos os fabricantes presentes na base de dados.
* **POST** -> Adiciona um fabricante à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo fabricante.
* **PUT{id}** -> Efetua alterações a um dado fabricante com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Remove da base de dados um fabricante com um respetivo ID passado como parâmetro.

<br>

O controlador **OwnersController** é composto por 5 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** -> Retorna todos os proprietários presentes na base de dados.
* **POST** -> Adiciona um proprietário à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo proprietário.
* **PUT{id}** -> Efetua alterações a um dado prprietário com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Remove da base de dados um prorpietário com um respetivo ID passado como parâmetro.

<br>

O controlador **EnginesByCarController** é composto por 1 funcionalidade baseada nos verbos do protocolo HTTP:
* **GET{id}** -> Retorna todos os motores do carro que tem o ID passado como parâmetro.

<br>

O controlador **OwnersByCarController** é composto por 1 funcionalidade baseada nos verbos do protocolo HTTP:
* **GET{id}** -> Retorna todos os proprietários do carro que tem o ID passado como parâmetro.

<br>

O controlador **ManufacturersByCarController** é composto por 1 funcionalidade baseada nos verbos do protocolo HTTP:
* **GET{id}** -> Retorna todos os fabricantes do carro que tem o ID passado como parâmetro.

<br>

## Grupo 6

* André Cacheira / Perfil GitHub: [@Cacheira14](https://github.com/Cacheira14)
* Bruno Sousa / Perfil GitHub: [@brunomfsrw1](https://github.com/brunomfsrw1)
* Raul Gonçalves / Perfil GitHub: [@RaulGoncalves21x](https://github.com/RaulGoncalves21x)

<br>

| [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) | [>](capitulo2.md) | [>>](capitulo3.md) |
| :---: | :---: | :---: | :---: | :---: |