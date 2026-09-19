# BioStart

BioStart é uma aplicação educativa voltada ao incentivo do uso do biogás como fonte de energia renovável. O projeto foi idealizado em contexto acadêmico no curso de Análise e Desenvolvimento de Sistemas do Instituto Federal de Roraima, com foco em sustentabilidade, acessibilidade e disseminação de conhecimento técnico de forma prática.

Este repositório contém a implementação mobile do projeto, desenvolvida com Expo e React Native, reunindo recursos de aprendizado, simulação, acompanhamento e avaliação sobre o uso do biogás.

## Sumário

- [Visão geral](#visao-geral)
- [Contexto do projeto](#contexto-do-projeto)
- [Premiações](#premiações)
- [Publicação acadêmica](#publicação-acadêmica)
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
- [Direitos de uso](#direitos-de-uso)

## Visão geral

O biogás representa uma alternativa promissora diante da crescente demanda por fontes renováveis de energia. Mesmo com elevado potencial teórico de aproveitamento no Brasil, sua adoção ainda encontra barreiras práticas, especialmente entre pequenos produtores que enfrentam dificuldades técnicas para implantar soluções acessíveis e seguras.

O BioStart foi criado para reduzir essa distância entre conhecimento técnico e aplicação prática. A proposta é oferecer, em uma experiência digital simples e didática, orientações sobre biogás, simulações de produção, checklist de montagem, trilhas de aprendizagem e avaliação de conhecimento.

## Contexto do projeto

O projeto surgiu em sala de aula, durante uma disciplina do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal de Roraima, Campus Boa Vista. A atividade proposta tinha como foco o desenvolvimento de uma solução tecnológica alinhada aos Objetivos de Desenvolvimento Sustentável, unindo inovação, prática e impacto social positivo.

Dessa iniciativa nasceu o BioStart, inicialmente concebido como um protótipo iterativo com foco em acessibilidade e usabilidade. A ideia central foi criar uma aplicação capaz de orientar usuários sobre o aproveitamento de resíduos orgânicos para produção de biogás, promovendo educação ambiental, autonomia técnica e incentivo ao uso de energia limpa.

## Premiações

- **2º lugar no Hackathon AmazonTech 2025**, em Boa Vista (RR). [Registro da equipe do IFRR](https://levaagntpracop30.vercel.app/).
- **1º lugar na Mostra Tecnológica do evento IFs do Norte na COP30**, realizado em 2025 em Belém (PA), com o projeto “BioStart: Guia interativo para produção de biogás com resíduos orgânicos”. [Notícia do IFPA](https://www.ifpa.edu.br/ultimas-noticias/2776-ifs-do-norte-na-cop30-mostra-tecnologica-e-hackathon-revelam-o-potencial-inovador-dos-estudantes-nortistas).

## Publicação acadêmica

O projeto também foi apresentado no XIII Fórum de Integração Ensino, Pesquisa, Extensão e Inovação Tecnológica do IFRR. O trabalho [“BioStart: Guia interativo para produção de biogás com resíduos orgânicos”](https://periodicos.ifrr.edu.br/index.php/anais_forint/pt_BR/article/view/2311), de Letícia Alves dos Santos, Maria Vitória Sousa, Juliana Caldas Viana e George Oliveira Almeida, foi publicado nos anais do evento em 2026.

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
- Acesso local de demonstração sem senha ou servidor.

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

- Perguntas locais para demonstração da interface.
- As perguntas adicionadas não são compartilhadas nem salvas após fechar o app.

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

- Node.js LTS e npm instalados no notebook
- Para usar no celular: aplicativo Expo Go e celular na mesma rede Wi-Fi do notebook
- Para Android no notebook: Android Studio com emulador configurado
- Para iOS no notebook: macOS com Xcode

### Instalação

```bash
npm ci
```

### Execução em ambiente de desenvolvimento

```bash
npm start
```

Depois de iniciar o projeto, o Expo exibirá opções para abrir a aplicação em:

- Android
- iOS
- Web
- Expo Go

Para testar no navegador, execute `npm run web` e abra o endereço mostrado no terminal. Para testar no celular, execute `npm start` e leia o QR code com o Expo Go. Se a rede Wi-Fi impedir a conexão, experimente `npx expo start --tunnel`. Para usar o emulador Android, inicie o emulador antes e pressione `a` no terminal do Expo. O script `npm run android` gera e executa uma versão nativa e requer Android Studio e SDK configurados.

Se o Expo ficar parado ao iniciar ou você estiver sem acesso aos serviços online do Expo, execute `npm run web:offline` e abra `http://localhost:8081` no navegador (ou a porta indicada no terminal). Esse comando ainda precisa que as dependências tenham sido instaladas com `npm ci`. Se uma porta estiver ocupada, execute `npm run web:offline -- --port 19006` e abra `http://localhost:19006`.

Não abra `dist/index.html` diretamente pelo editor ou como arquivo `file://`: a pasta `dist` contém uma exportação estática e seus arquivos JavaScript precisam ser servidos por HTTP. Se o navegador continuar mostrando uma versão antiga ou o erro `import.meta may only appear in a module`, pare o Expo, execute `npm run web:offline -- --clear` e recarregue a página com `Ctrl+Shift+R`.

O app abre na tela inicial. Toque em **Entrar sem senha (demonstração)** para acessar o menu sem conta ou API. A opção **Entrar** também funciona em modo de demonstração com um e-mail válido e uma senha não vazia; não há autenticação real. A tela de cadastro explica que não há servidor e oferece acesso de demonstração, sem coletar dados pessoais. As telas educativas, o quiz, o checklist e o simulador funcionam sem backend. As perguntas do fórum ficam apenas na memória enquanto o app está aberto.

## Scripts disponíveis

```bash
npm run start
npm run android
npm run ios
npm run web
npm run web:offline
npm run lint
```

## Configuração de ambiente

O modo de demonstração funciona sem `.env` e sem backend. O cliente HTTP antigo permanece no código como base para uma possível integração futura e aceita esta variável:

```env
EXPO_PUBLIC_BASE_URL=http://SEU_IP_LOCAL:3000
```

Crie um arquivo `.env` na raiz com essa variável somente se você implementar uma API compatível. Atualmente nenhuma tela chama essa API. No celular, `localhost` aponta para o próprio telefone; use o IP local do notebook. No emulador Android, o host local costuma ser `10.0.2.2`. A API não está incluída neste repositório.

O arquivo `.env` é ignorado pelo Git. Antes de publicar, confira `git status` para verificar que `dist/`, `node_modules/` e `.env` não serão enviados. Como `.env` já foi versionado antes, retire-o do índice com `git rm --cached .env` caso ainda apareça no seu clone; o arquivo local será preservado. Se houver credenciais reais em commits antigos, remova-as do serviço de origem e gere outras.

## Resultados esperados e impacto

O BioStart foi concebido para ampliar o acesso a informações sobre energias renováveis e estimular práticas ambientalmente responsáveis. A proposta combina tecnologia e educação para tornar o tema do biogás mais compreensível, aplicável e próximo da realidade de estudantes, produtores e demais interessados.

De acordo com a base conceitual do projeto, a solução foi avaliada por cerca de 80 participantes e obteve alto índice de aprovação em critérios como facilidade de uso, clareza e utilidade. Esses resultados reforçam o potencial da plataforma como instrumento de sensibilização, aprendizagem e incentivo ao aproveitamento sustentável de resíduos orgânicos.

## Autores e contexto acadêmico

O BioStart nasceu como iniciativa acadêmica vinculada ao Instituto Federal de Roraima, Campus Boa Vista, e foi desenvolvido no contexto do trabalho de conclusão de curso (TCC). O projeto demonstra como a tecnologia pode ser aplicada para gerar impacto positivo, promovendo educação, conscientização ambiental e incentivo a soluções energéticas limpas.

Autores do projeto:

- Juliana Caldas
- Letícia Alves
- Maria Vitória Sousa

## Observação

O texto-base do projeto menciona etapas de prototipação envolvendo Figma, Expo Snack, GitHub Pages, Firebase e Render. Este repositório, no entanto, corresponde especificamente à implementação atual do aplicativo mobile em Expo/React Native, organizada em módulos e preparada para execução local.

## Direitos de uso

**Todos os direitos reservados às autoras do BioStart.** O código e os materiais originais deste repositório não têm licença de uso público. Qualquer reprodução, modificação, redistribuição ou uso comercial desses materiais exige autorização prévia das autoras. Para solicitar permissão, entre em contato com a equipe BioStart.

As bibliotecas e os materiais de terceiros usados pelo aplicativo seguem suas próprias licenças. A publicação deste repositório no GitHub não transfere a autoria do projeto nem concede licença para reutilizá-lo fora das funcionalidades permitidas pela plataforma.

O artigo acadêmico está publicado nos anais do IFRR e segue as condições de uso informadas pela própria publicação.
