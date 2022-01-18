# Capítulo 3 : Produto

## 3.1 Desenvolvimento

### 3.1.1 LoopBack 4

Para o desenvolvimento deste projeto, foi utilizada a ferramenta LoopBack 4 com vista a automatizar o processo de criação das funcionalidades da API.

Numa primeira fase, começamos por criar a aplicação com o Loopback 4. De seguida, foi indicado os modelos através do comando "lb4 model" e toda a informação para a conexão à base de dados com o comando "lb4 datasource". Por fim, indicamos o repositório responsável pela conexão entre os modelos à base de dados, tendo sido criado um repositório e um controlador para cada modelo.

<br>

Depois de concluido todos os passos anteriores, indicamos todas as relações necessárias com o comando "lb4 relation" para que, quando formos criar os controladores, garantir que as relações existentes na base de dados sejam cumpridas. Depois de todas as relações estarem devidamente indicadas, passamos ao passo de criação dos controladores com o comando "lb4 controller".

<br>

Por fim, para executarmos todo o desenvolvimento efetuado anteriormente, usamos o comando "npm run migrate" para migrar os modelos para a base de dados e utilizou-se o comando "npm start" para iniciar a aplicação e analisar o resultado final.

### 3.1.2 React Admin

Foi criada uma interface gráfica para que a utilização da API seja mais confortável e mais intuitiva. Para isso, utilizamos as ferramentas do React Admin.

<br>

Começamos por criar a nossa aplicação com o comando "npx create-react-app". Depois de criada a aplicação, instalamos as dependencias necessárias com o comando "npm i react-admin react-admin-lb4 prop-types". Logo depois de executado o passo anterior, editamos o ficheiro **package.json** com o intuito de alterar a default port para o valor 3006. De seguida, iniciamos o servidor com o comando "npm start". Nesta fase, colocamos a funcionar a API juntamente com a nossa aplicação React Admin.

### 3.1.3 Docker

Com vista a API poder ser montada rapidamente, ignorando definições anteriores, a API e o servidor MySQL foram postos em containers Docker. Para estes containers conseguirem comunicar entre si, foi desenvolvido um dockercompose que cria as imagens, detalhando o seu espaço de trabalho e cria uma rede interna partilhada pelos dois contentores.

## 3.2 Instalação

Para efetuar a instalação e compilação deste projeto, estão abaixo apresentados os passos que serão necessários:

<br>

* Passo 1: Importar o ficheiro **['docker-compose.yaml'](../docker-compose.yaml)**;
* Passo 2: Abrir a linha de comandos (CLI);
* Passo 3: Entrar no diretório onde se encontra o ficheiro importado anteriormente;
* Passo 4: Executar o seguinte comando **'docker-compose up'**;
* Passo 5: Abrir o Browser no URL **'localhost:8080/docs'**.

<br>

Seguindo os passos corretamente, deve conseguir utilizar a API.

## 3.3 Instruções de Utilização



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