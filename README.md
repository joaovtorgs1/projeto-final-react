# Projeto Final - Interfaces Dinâmicas e Reativas (Entrega Parcial)

Pokédex feita com React, React Router, Tailwind CSS e a PokeAPI.

## Escopo do projeto

- [x] Estrutura de pastas definida
- [x] Layout com Header, Footer e Outlet
- [x] 3 páginas conectadas no menu (Home, Pokémons, Sobre)
- [x] Serviço de API (services/api.js)
- [x] Componentes base Button e Card com Tailwind
- [x] Tema claro/escuro com Context API e localStorage
- [ ] Busca de Pokémon
- [ ] Página de detalhes
- [ ] Deploy

## Estrutura de pastas

    src/
    ├── components/   componentes reutilizáveis (Button, Card, Header, Footer, Layout)
    ├── pages/        páginas ligadas às rotas (Home, Pokemons, Sobre)
    ├── services/     comunicação com a API (api.js)
    ├── contexts/     Context API (ThemeContext)
    └── hooks/        hooks personalizados (useTheme)

## Como rodar

    npm install
    npm run dev

## Reflexão

**Qual a importância de separar as páginas (pages) dos componentes reutilizáveis (components) e da lógica de API (services) em um projeto React que está crescendo?**

Separar cada responsabilidade em sua pasta deixa o código mais organizado e fácil de manter. As páginas (pages) representam telas inteiras ligadas a rotas e juntam vários componentes. Os componentes (components) são peças pequenas e reutilizáveis, como Button e Card, que não sabem nada sobre a tela onde estão, então podem ser usados em vários lugares sem repetir código. Já a lógica de API (services) concentra em um único arquivo a URL base, o fetch e o tratamento de erros HTTP.

Com isso, se a URL da API mudar ou se eu trocar o fetch por outra biblioteca, altero um arquivo só, sem mexer nas páginas. Os componentes também ficam mais fáceis de testar e entender, porque cada arquivo tem uma função clara. Em um projeto grande, misturar tudo no mesmo arquivo gera componentes enormes, código duplicado e dificuldade para achar e corrigir erros.