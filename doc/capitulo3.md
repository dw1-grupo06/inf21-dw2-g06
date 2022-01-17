# Capítulo 3 : Produto

## 3.1 Desenvolvimento

### 3.1.1 



### 3.1.2 



### 3.1.3 Docker

Com vista a API poder ser montada rapidamente, ignorando definições anteriores, a API e o servidor MySQL foram postos em containers Docker. Para estes containers conseguirem comunicar entre si, foi desenvolvido um dockercompose que cria as imagens, detalhando o seu espaço de trabalho e cria uma rede interna partilhada pelos dois contentores.

## 3.2 Instalação

Para efetuar a instalação e compilação deste projeto, estão abaixo apresentados os passos que serão necessários:

<br>

* Passo 1: 
* Passo 2: Abrir a linha de comandos (CLI);
* Passo 3: Entrar no diretório onde se encontra o ficheiro importado anteriormente;
* Passo 4: Executar o seguinte comando **'docker-compose up'**;
* Passo 5: Abrir o Browser no URL **'localhost:8080/docs'**.

<br>

Seguindo os passos corretamente, deve conseguir utilizar a API.

## 3.3 Instruções de Utilização

Depois de instalada, basta executar os dois containers através do Docker Desktop e ligar-se ao endereço http://localhost:8080/docs/ através do seu browser.
Aqui terá acesso completo a todas as funções da API.
As operações estarão visivelmente marcadas com os verbos HTTP que lhes corresponde e terão uma breve descrição da sua função. Selecionando uma das operações um menu irá ser visível onde estará o botão "Try it out" exposto. Premindo este botão temos acesso a um campo de texto caso esteja a inserir ou a editar um recurso, ou terá imediatamente o resultado da sua operação, se esta for de consulta.

**No caso de inserção ou atualização:** Como referido anteriormente, a API possui três exemplos para cada recurso: dois com o aspeto final do recurso e um com o aspeto recomendado para a inserção. É então recomendado que quando crie ou atualize um recurso, utilize este exemplo, geralmente denominado por '*NomeRecurso*Insert' ou '*NomeRecurso*Update'. Estes exemplos terão valores como *placeholders* que deverão ser eliminados a fim de evitar confusão.

## 3.4 Detalhes de Implementação

O ponto inicial do desenho da API passou pelo desenvolvimento do ficheiro **['Definição_do_tema.docx'](../Definição_do_tema.docx)**. Neste ficheiro ficou a ideia inicial para os Recursos com que a API trabalharia.
Efetuado o desenvolvimento referido no ponto 3.1, foi necessário adaptar a API para que esta pudesse funcionar em containers. Para tal foram desenvolvidos os seguintes ficheiros:
* **['db.js'](../src/utils/db.js)** - Ficheiro de ligação à base de dados onde contém as credenciais de acesso à base de dados, host e a especificação da base de dados;
* **['database_v1.sql'](../src/db/database_v1.sql)** - Ficheiro com a criação do Schema e Tabelas a usar pelo container de MySQL e com a alteração de permissões para o utilizador;
* **['setup.sh'](../src/db/setup.sh)** - Script responsável por ligar o serviço MySQL, carregar a base de dados e desligar o serviço novamente;
* **['dockerfile.mysql'](../src/dockerfile.mysql)** - Ficheiro dockerfile responsável pela configuração da imagem MySQL, definição de espaço de trabalho;
* **['dockerfile'](../src/dockerfile)** - Ficheiro dockerfile responsável pela configuração da imagem da aplicação, definição de espaço de trabalho e definição do **port** que ficaria exposto;
* **['docker-compose.yml'](../src/docker-compose.yml)** - Ficheiro docker-compose que, durante o desenvolvimento, permitiu aos dois containers serem lançados em paralelo e estabelecerem uma ligação entre si;
* **['docker-compose.yaml'](../docker-compose.yaml)** - Ficheiro docker-compose responsável por, numa versão final, facilitar a obtenção dos dois containers.

<br>

| [<<](capitulo1.md) | [<](capitulo2.md) | [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) |
| :---: | :---: | :---: | :---: | :---: |