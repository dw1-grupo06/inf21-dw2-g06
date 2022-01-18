# Capítulo 3 : Produto

## 3.1 Desenvolvimento

### 3.1.1 LoopBack 4

Para o desenvolvimento deste projeto, foi utilizada a ferramenta LoopBack 4 com vista a automatizar o processo de criação das funcionalidades da API.

Numa primeira fase, começou-se por criar a aplicação com recurso ao LoopBack 4. De seguida, criou-se os modelos através do comando **"lb4 model"** e toda a informação para a conexão à base de dados com o comando **"lb4 datasource"**. Por fim, construiu-se o repositório responsável pela conexão entre os modelos à base de dados. Foi criado um controlador para cada modelo, de forma a ser possível manipular individualmente.

<br>

Depois de concluido todos os passos anteriores, indicou-se todas as relações existentes com o comando **"lb4 relation"** para que, quando se fosse criar os controladores, garantir que as relações existentes na base de dados sejam cumpridas. Depois de todas as relações estarem devidamente indicadas, passamos ao passo de criação dos controladores com o comando "lb4 controller".

<br>

Por fim, para se executar todo o desenvolvimento efetuado anteriormente, usou-se o comando **"npm run migrate"** para migrar os modelos para a base de dados e utilizou-se o comando **"npm start"** para iniciar a aplicação e analisar o resultado final.

### 3.1.2 React Admin

Foi criada uma interface gráfica para que a utilização da API seja mais confortável e intuitiva. Para isso, utilizámos as ferramentas do React-Admin.

<br>

Começou-se por criar a nossa aplicação com o comando **"npx create-react-app"**. Depois de criada a aplicação, instalou-se as dependências necessárias com o comando **"npm i react-admin react-admin-lb4 prop-types"**. Após executado o passo anterior, editou-se o ficheiro **package.json** com o intuito de alterar a default port para o valor 3006. De seguida, iniciou-se o servidor com o comando **"npm start"**. Nesta fase, colocamos a funcionar a API juntamente com a nossa aplicação React Admin.

<br>

De forma a ser possível apresentar, editar e criar novos elementos, através dos controladores presentes na API, foram utilizadas os métodos presentes no React-Admin **"ListGuesser"** e **"EditGuesser"**, tendo sido alterados de forma a serem apresentados corretamente.

<br>

Ficheiros de manipulação de cada recurso da Base de Dados:
* **['Car'](../src/ra_dealership/src/car.js)**;
* **['Manufacturer'](../src/ra_dealership/src/manufacturer.js)**;
* **['Engine'](../src/ra_dealership/src/engine.js)**;
* **['Owner'](../src/ra_dealership/src/owner.js)**;


### 3.1.3 Docker

Com vista a API poder ser montada rapidamente e utilizada através de uma interface, ignorando definições anteriores, a API, o servidor MySQL e a interface gerada pelo React-Admin, foram postos em containers Docker. Para estes containers conseguirem comunicar entre si, foi desenvolvido um docker-compose que junta as imagens, detalhando o seu espaço de trabalho e cria uma rede interna partilhada pelos três contentores.

## 3.2 Instalação

Para efetuar a instalação e compilação deste projeto, estão abaixo apresentados os passos que serão necessários:

<br>

* Passo 1: Importar o ficheiro **['docker-compose.yaml'](../docker-compose.yaml)**;
* Passo 2: Abrir a linha de comandos (CLI);
* Passo 3: Entrar no diretório onde se encontra o ficheiro importado anteriormente;
* Passo 4: Executar o seguinte comando **'docker-compose up'**;
* Passo 5: Abrir o Browser no URL **'localhost:3006'**.

<br>

## 3.3 Instruções de Utilização

Na interface criada, foram disponibilizadas as instruções de **Edição**, **Criação** e **Remoção**, fornecendo os principais métodos necessários para a utlização por parte de qualquer utilizador.<br>
Para além destas instruções, existem ainda disponíveis filtros, de forma a facilitar a pesquisa ao utilizador.

## 3.4 Detalhes de Implementação

O ponto inicial do desenho da API passou pelo desenvolvimento do ficheiro **['Definição_do_tema.docx'](../Definição_do_tema.docx)**. Neste ficheiro ficou a ideia inicial para os Recursos com que a API trabalharia.
Efetuado o desenvolvimento referido no ponto 3.1, foi necessário adaptar a API para que esta pudesse funcionar em containers. Para tal foram desenvolvidos os seguintes ficheiros:
* **['database_v1.sql'](../src/API/db/database_v1.sql)** - Ficheiro com a criação do Schema e Tabelas a usar pelo container de MySQL e com a alteração de permissões para o utilizador;
* **['setup.sh'](../src/API/db/setup.sh)** - Script responsável por ligar o serviço MySQL, carregar a base de dados e desligar o serviço novamente;
* **['dockerfile.mysql'](../src/API/dockerfile.mysql)** - Ficheiro dockerfile responsável pela configuração da imagem MySQL, definição de espaço de trabalho;
* **['dockerfile'](../src/API/dockerfile)** - Ficheiro dockerfile responsável pela configuração da imagem da aplicação, definição de espaço de trabalho e definição do **port** que ficaria exposto;
* **['docker-compose.yml'](../src/API/docker-compose.yml)** - Ficheiro docker-compose que, durante o desenvolvimento, permitiu aos dois containers serem lançados em paralelo e estabelecerem uma ligação entre si;
* **['dockerfile'](../src/ra_dealership/dockerfile)** - Ficheiro dockerfile responsável pela configuração da imagem da interface gerada através do React-Admin, definição de espaço de trabalho e definição do **port** que ficaria exposto;
* **['docker-compose.yaml'](../docker-compose.yaml)** - Ficheiro docker-compose responsável por, numa versão final, facilitar a obtenção dos três containers, gerando também uma ligação entre os mesmos.

<br>

| [<<](capitulo1.md) | [<](capitulo2.md) | [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) |
| :---: | :---: | :---: | :---: | :---: |