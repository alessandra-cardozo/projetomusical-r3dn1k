# 🎵 Sinta a Música

Um projeto de player musical moderno e responsivo, criado com HTML, CSS e JavaScript. A interface apresenta uma playlist visual, capa dinâmica da música e um player embutido do YouTube, com experiência imersiva e design atual.

## 🎹 Sobre R3DN1K

R3DN1K é o projeto musical de Tevfikhan Akçay, produtor de música eletrônica que explora sonoridades como progressive house, deep house, melodic house e melodic techno.

Com atenção especial à construção de camadas e atmosferas, suas produções combinam ritmos marcantes e melodias emotivas para criar experiências imersivas. Cada faixa convida o ouvinte a percorrer uma paisagem sonora própria, onde energia e expressão artística se encontram.

Neste projeto, a playlist aproxima o público do universo de R3DN1K e permite explorar faixas como **Motion**, **You**, **Poison**, **Same** e **Nadek** em um player visual e interativo.

## ✨ Funcionalidades

- Playlist interativa com vários sons
- Troca automática do vídeo do YouTube ao selecionar uma música
- Atualização da capa da música com a imagem do vídeo
- Layout responsivo para desktop, tablet e celular
- Efeito visual com fundo em movimento e brilho
- Interface elegante com foco em experiência visual

## 🎧 Como funciona

O projeto usa um array de músicas em JavaScript. Cada item contém:

- o título da música
- o ID do vídeo no YouTube

Quando o usuário clica em um botão da playlist, a função `playMusic(index)`:

1. identifica a música selecionada
2. atualiza o iframe do YouTube
3. troca a imagem de capa com a miniatura do vídeo

## 🧱 Estrutura do projeto

```text
projeto_musical_impressionante/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Como executar

### Opção 1: abrir diretamente no navegador

1. Baixe ou clone o projeto
2. Abra o arquivo `index.html` em um navegador

### Opção 2: usar Live Server (recomendado)

1. Abra a pasta no VS Code
2. Instale a extensão `Live Server`
3. Clique com o botão direito em `index.html`
4. Selecione `Open with Live Server`

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- YouTube Embed

## 🎶 Como adicionar novas músicas

No arquivo `script.js`, edite o array `songs`:

```js
const songs = [
  { title: "Nome da Música", id: "ID_DO_VIDEO" },
  { title: "Outra Música", id: "OUTRO_ID" }
];
```

Você também pode incluir um botão novo no `index.html` com:

```html
<button onclick="playMusic(0)">Nome da Música</button>
```

> O `id` deve ser o identificador do vídeo no YouTube, geralmente presente na URL do vídeo.

## 📱 Personalização

Você pode ajustar:

- cores e gradientes em `style.css`
- texto do título e botões em `index.html`
- lista de músicas e IDs em `script.js`
- animações visuais do fundo e da capa

## 📝 Observações

Este projeto não exige backend ou banco de dados. Ele funciona totalmente no frontend e depende do carregamento de vídeos e imagens do YouTube em tempo real.

## 👤 Autor

Projeto desenvolvido como uma experiência visual de música e player interativo.
