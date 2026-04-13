# BioStart

BioStart e uma aplicacao educativa voltada ao incentivo do uso do biogas como fonte de energia renovavel. O projeto foi idealizado em contexto academico no curso de Analise e Desenvolvimento de Sistemas do Instituto Federal de Roraima, com foco em sustentabilidade, acessibilidade e disseminacao de conhecimento tecnico de forma pratica.

Este repositorio contem a implementacao mobile do projeto, desenvolvida com Expo e React Native, reunindo recursos de aprendizado, simulacao, acompanhamento e avaliacao sobre o uso do biogas.

## Sumario

- [Visao geral](#visao-geral)
- [Contexto do projeto](#contexto-do-projeto)
- [Objetivos](#objetivos)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Arquitetura e organizacao](#arquitetura-e-organizacao)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como executar](#como-executar)
- [Scripts disponiveis](#scripts-disponiveis)
- [Configuracao de ambiente](#configuracao-de-ambiente)
- [Resultados esperados e impacto](#resultados-esperados-e-impacto)
- [Autores e contexto academico](#autores-e-contexto-academico)

## Visao geral

O biogas representa uma alternativa promissora diante da crescente demanda por fontes renovaveis de energia. Mesmo com elevado potencial teorico de aproveitamento no Brasil, sua adocao ainda encontra barreiras praticas, especialmente entre pequenos produtores que enfrentam dificuldades tecnicas para implantar solucoes acessiveis e seguras.

O BioStart foi criado para reduzir essa distancia entre conhecimento tecnico e aplicacao pratica. A proposta e oferecer, em uma experiencia digital simples e didatica, orientacoes sobre biogas, simulacoes de producao, checklist de montagem, trilhas de aprendizagem e avaliacao de conhecimento.

## Contexto do projeto

O projeto surgiu em sala de aula, durante uma disciplina do curso de Analise e Desenvolvimento de Sistemas do Instituto Federal de Roraima, Campus Boa Vista. A atividade proposta tinha como foco o desenvolvimento de uma solucao tecnologica alinhada aos Objetivos de Desenvolvimento Sustentavel, unindo inovacao, pratica e impacto social positivo.

Dessa iniciativa nasceu o BioStart, inicialmente concebido como um prototipo iterativo com foco em acessibilidade e usabilidade. A ideia central foi criar uma aplicacao capaz de orientar usuarios sobre o aproveitamento de residuos organicos para producao de biogas, promovendo educacao ambiental, autonomia tecnica e incentivo ao uso de energia limpa.

## Objetivos

- Incentivar o uso do biogas como alternativa sustentavel de energia.
- Facilitar o acesso a informacoes tecnicas de forma simples e acessivel.
- Apoiar pequenos produtores e estudantes no entendimento do processo de producao.
- Promover educacao ambiental por meio de conteudo interativo.
- Reforcar a relacao entre tecnologia, sustentabilidade e impacto social.

## Funcionalidades

O aplicativo esta organizado em modulos principais que cobrem diferentes etapas da experiencia do usuario:

### 1. Autenticacao

- Tela de login.
- Tela de cadastro.
- Integracao com API para autenticacao de usuarios.

### 2. Menu principal

- Central de navegacao para os recursos do aplicativo.
- Acesso rapido aos modulos educacionais e ferramentas praticas.

### 3. Simulador de producao

- Simulacao de producao de biogas a partir da quantidade de resíduo organico informada.
- Seleção de tipo de material ou resíduo utilizado no calculo.
- Apoio ao entendimento do potencial energetico do aproveitamento organico.

### 4. Checklist de montagem e operacao

- Organizacao do processo em etapas.
- Acompanhamento de progresso.
- Apoio ao planejamento, construcao, operacao e manutencao.

### 5. Modulo de aprendizagem

- Conteudos educativos sobre biogas.
- Trilhas com topicos como vantagens, desvantagens e curiosidades.
- Registro de progresso do aprendizado.

### 6. Quiz educativo

- Perguntas de multipla escolha sobre biodigestores e biogas.
- Calculo de desempenho.
- Recurso voltado a revisao e fixacao do conteudo.

### 7. Forum

- Espaco para interacao e organizacao de perguntas.
- Estrutura pensada para estimular troca de conhecimento entre usuarios.

### 8. Perfil

- Visualizacao de progresso nas funcionalidades do app.
- Consolidacao de indicadores de aprendizado e acompanhamento.

## Tecnologias utilizadas

Este repositorio foi construido com foco em desenvolvimento mobile moderno e organizacao modular.

- Expo
- React Native
- TypeScript
- Expo Router
- NativeWind
- Tailwind CSS
- Zustand
- AsyncStorage
- Axios
- React Hook Form
- Zod

## Arquitetura e organizacao

O projeto adota uma organizacao modular por dominio e uma separacao inspirada em MVVM, o que facilita manutencao, escalabilidade e reaproveitamento de componentes.

### Principais decisoes de estrutura

- `src/app`: rotas da aplicacao com base em arquivos.
- `src/modules`: modulos funcionais da aplicacao, como autenticacao, quiz, simulador e aprendizado.
- `src/components`: componentes reutilizaveis de interface.
- `src/store`: gerenciamento de estado global e persistencia local.
- `src/config`: configuracoes compartilhadas, como cliente HTTP.
- `src/utils`: utilitarios e funcoes auxiliares.

Essa abordagem ajuda a manter cada funcionalidade isolada, com responsabilidades bem definidas entre view, viewmodel, model, servicos e validacoes.

## Estrutura de pastas

```text
.
|- src/
|  |- app/
|  |  |- index.tsx
|  |  |- menu/
|  |  |- simulator/
|  |  |- checklist/
|  |  |- learn/
|  |  |- quiz/
|  |  |- forum/
|  |  |- profile/
|  |  \- register/
|  |- components/
|  |- config/
|  |- modules/
|  |- store/
|  \- utils/
|- global.css
|- app.json
|- package.json
\- README.md
```

## Como executar

### Pre-requisitos

- Node.js instalado
- npm instalado
- Expo CLI disponivel via `npx`
- Emulador Android, simulador iOS ou aplicativo Expo Go

### Instalacao

```bash
npm install
```

### Execucao em ambiente de desenvolvimento

```bash
npx expo start
```

Depois de iniciar o projeto, o Expo exibira opcoes para abrir a aplicacao em:

- Android
- iOS
- Web
- Expo Go

## Scripts disponiveis

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
```

## Configuracao de ambiente

O projeto utiliza uma variavel de ambiente publica para definir a URL base da API:

```env
EXPO_PUBLIC_BASE_URL=http://localhost:3000
```

Essa configuracao e usada pelo cliente HTTP da aplicacao para chamadas como autenticacao.

## Resultados esperados e impacto

O BioStart foi concebido para ampliar o acesso a informacoes sobre energias renovaveis e estimular praticas ambientalmente responsaveis. A proposta combina tecnologia e educacao para tornar o tema do biogas mais compreensivel, aplicavel e proximo da realidade de estudantes, produtores e demais interessados.

De acordo com a base conceitual do projeto, a solucao foi avaliada por cerca de 80 participantes e obteve alto indice de aprovacao em criterios como facilidade de uso, clareza e utilidade. Esses resultados reforcam o potencial da plataforma como instrumento de sensibilizacao, aprendizagem e incentivo ao aproveitamento sustentavel de residuos organicos.

## Autores e contexto academico

O BioStart nasceu como iniciativa academica vinculada ao Instituto Federal de Roraima, Campus Boa Vista, em uma proposta voltada a sustentabilidade e aos ODS. O projeto demonstra como a tecnologia pode ser aplicada para gerar impacto positivo, promovendo educacao, conscientizacao ambiental e incentivo a solucoes energeticas limpas.

Autores do projeto:

- Juliana Caldas
- Leticia Alves
- Maria Vitoria Sousa

## Observacao

O texto-base do projeto menciona etapas de prototipacao envolvendo Figma, Expo Snack, GitHub Pages, Firebase e Render. Este repositorio, no entanto, corresponde especificamente a implementacao atual do aplicativo mobile em Expo/React Native, organizada em modulos e preparada para execucao local.
