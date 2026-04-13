# BioStart

BioStart é uma aplicação educativa voltada ao incentivo do uso do biogás como fonte de energia renovável. O projeto foi idealizado em contexto acadêmico no curso de Análise e Desenvolvimento de Sistemas do Instituto Federal de Roraima, com foco em sustentabilidade, acessibilidade e disseminação de conhecimento técnico de forma prática.

Este repositório contém a implementação mobile do projeto, desenvolvida com Expo e React Native, reunindo recursos de aprendizado, simulação, acompanhamento e avaliação sobre o uso do biogás.

## Sumário

- [Visão geral](#visao-geral)
- [Contexto do projeto](#contexto-do-projeto)
- [Objetivos](#objetivos)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Arquitetura e organização](#arquitetura-e-organizacao)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como executar](#como-executar)
- [Scripts disponíveis](#scripts-disponiveis)
- [Configuração de ambiente](#configuracao-de-ambiente)
- [Resultados esperados e impacto](#resultados-esperados-e-impacto)
- [Autores e contexto acadêmico](#autores-e-contexto-academico)

## Visão geral

O biogás representa uma alternativa promissora diante da crescente demanda por fontes renováveis de energia. Mesmo com elevado potencial teórico de aproveitamento no Brasil, sua adoção ainda encontra barreiras práticas, especialmente entre pequenos produtores que enfrentam dificuldades técnicas para implantar soluções acessíveis e seguras.

O BioStart foi criado para reduzir essa distância entre conhecimento técnico e aplicação prática. A proposta é oferecer, em uma experiência digital simples e didática, orientações sobre biogás, simulações de produção, checklist de montagem, trilhas de aprendizagem e avaliação de conhecimento.

## Contexto do projeto

O projeto surgiu em sala de aula, durante uma disciplina do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal de Roraima, Campus Boa Vista. A atividade proposta tinha como foco o desenvolvimento de uma solução tecnológica alinhada aos Objetivos de Desenvolvimento Sustentável, unindo inovação, prática e impacto social positivo.

Dessa iniciativa nasceu o BioStart, inicialmente concebido como um protótipo iterativo com foco em acessibilidade e usabilidade. A ideia central foi criar uma aplicação capaz de orientar usuários sobre o aproveitamento de resíduos orgânicos para produção de biogás, promovendo educação ambiental, autonomia técnica e incentivo ao uso de energia limpa.

## Objetivos

- Incentivar o uso do biogás como alternativa sustentável de energia.
- Facilitar o acesso a informações técnicas de forma simples e acessível.
- Apoiar pequenos produtores e estudantes no entendimento do processo de produção.
- Promover educação ambiental por meio de conteúdo interativo.
- Reforçar a relação entre tecnologia, sustentabilidade e impacto social.

## Funcionalidades

O aplicativo está organizado em módulos principais que cobrem diferentes etapas da experiência do usuário:

### 1. Autenticação

- Tela de login.
- Tela de cadastro.
- Integração com API para autenticação de usuários.

### 2. Menu principal

- Central de navegação para os recursos do aplicativo.
- Acesso rápido aos módulos educacionais e ferramentas práticas.

### 3. Simulador de produção

- Simulação de produção de biogás a partir da quantidade de resíduo orgânico informada.
- Seleção de tipo de material ou resíduo utilizado no cálculo.
- Apoio ao entendimento do potencial energético do aproveitamento orgânico.

### 4. Checklist de montagem e operação

- Organização do processo em etapas.
- Acompanhamento de progresso.
- Apoio ao planejamento, construção, operação e manutenção.

### 5. Módulo de aprendizagem

- Conteúdos educativos sobre biogás.
- Trilhas com tópicos como vantagens, desvantagens e curiosidades.
- Registro de progresso do aprendizado.

### 6. Quiz educativo

- Perguntas de múltipla escolha sobre biodigestores e biogás.
- Cálculo de desempenho.
- Recurso voltado à revisão e fixação do conteúdo.

### 7. Fórum

- Espaço para interação e organização de perguntas.
- Estrutura pensada para estimular a troca de conhecimento entre usuários.

### 8. Perfil

- Visualização de progresso nas funcionalidades do app.
- Consolidação de indicadores de aprendizado e acompanhamento.

## Tecnologias utilizadas

Este repositório foi construído com foco em desenvolvimento mobile moderno e organização modular.

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

## Arquitetura e organização

O projeto adota uma organização modular por domínio e uma separação inspirada em MVVM, o que facilita manutenção, escalabilidade e reaproveitamento de componentes.

### Principais decisões de estrutura

- `src/app`: rotas da aplicação com base em arquivos.
- `src/modules`: módulos funcionais da aplicação, como autenticação, quiz, simulador e aprendizado.
- `src/components`: componentes reutilizáveis de interface.
- `src/store`: gerenciamento de estado global e persistência local.
- `src/config`: configurações compartilhadas, como cliente HTTP.
- `src/utils`: utilitários e funções auxiliares.

Essa abordagem ajuda a manter cada funcionalidade isolada, com responsabilidades bem definidas entre view, viewmodel, model, serviços e validações.

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
- Expo CLI disponível via `npx`
- Emulador Android, simulador iOS ou aplicativo Expo Go

### Instalação

```bash
npm install
```

### Execução em ambiente de desenvolvimento

```bash
npx expo start
```

Depois de iniciar o projeto, o Expo exibirá opções para abrir a aplicação em:

- Android
- iOS
- Web
- Expo Go

## Scripts disponíveis

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
```

## Configuração de ambiente

O projeto utiliza uma variável de ambiente pública para definir a URL base da API:

```env
EXPO_PUBLIC_BASE_URL=http://localhost:3000
```

Essa configuração é usada pelo cliente HTTP da aplicação para chamadas como autenticação.

## Resultados esperados e impacto

O BioStart foi concebido para ampliar o acesso a informações sobre energias renováveis e estimular práticas ambientalmente responsáveis. A proposta combina tecnologia e educação para tornar o tema do biogás mais compreensível, aplicável e próximo da realidade de estudantes, produtores e demais interessados.

De acordo com a base conceitual do projeto, a solução foi avaliada por cerca de 80 participantes e obteve alto índice de aprovação em critérios como facilidade de uso, clareza e utilidade. Esses resultados reforçam o potencial da plataforma como instrumento de sensibilização, aprendizagem e incentivo ao aproveitamento sustentável de resíduos orgânicos.

## Autores e contexto acadêmico

O BioStart nasceu como iniciativa acadêmica vinculada ao Instituto Federal de Roraima, Campus Boa Vista, em uma proposta voltada à sustentabilidade e aos ODS. O projeto demonstra como a tecnologia pode ser aplicada para gerar impacto positivo, promovendo educação, conscientização ambiental e incentivo a soluções energéticas limpas.

Autores do projeto:

- Juliana Caldas
- Letícia Alves
- Maria Vitória Sousa

## Observação

O texto-base do projeto menciona etapas de prototipação envolvendo Figma, Expo Snack, GitHub Pages, Firebase e Render. Este repositório, no entanto, corresponde especificamente à implementação atual do aplicativo mobile em Expo/React Native, organizada em módulos e preparada para execução local.
