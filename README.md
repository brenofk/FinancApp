# FinacApp

FinacApp é um aplicativo de controle financeiro construído com **TypeScript** e **React / React Native** (ou React Web, dependendo da implementação).  

Ele permite que o usuário registre receitas e despesas, categorize transações, visualize resumos e acompanhe seu fluxo financeiro ao longo do tempo.

---

## Funcionalidades principais

- Adicionar novas transações (receita / despesa)  
- Categorias para organizar os lançamentos  
- Listagem de transações com filtros por data / categoria  
- Visão de resumo mensal (total de receitas, despesas e saldo)  
- Persistência de dados (local ou remota)  
- Estrutura modular com componentes reutilizáveis e telas separadas  

---
## Estrutura do projeto
```
├── App.tsx # Componente raiz do aplicativo
├── index.ts # Ponto de entrada / bootstrap
├── src/ # Código fonte
│ ├── screens/ # Telas do app
│ ├── components/ # Componentes reutilizáveis
│ ├── context/ # Provedores de estado
│ ├── services/ # Utilitários / lógica de negócio
│ └── assets/ # Imagens, ícones, estilos
├── tsconfig.json # Configuração do TypeScript
├── package.json # Dependências do projeto
└── README.md # Este arquivo
```
