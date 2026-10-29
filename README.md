# 🦷 Thaís Pinheiro Odontologia

> Site institucional moderno e responsivo para consultório odontológico especializado em **Endodontia**.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Styled Components](https://img.shields.io/badge/styled--components-6-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📖 Sobre o Projeto

Landing page desenvolvida para apresentar o consultório da Dra. Thaís Pinheiro, especialista em endodontia (tratamento de canal), com foco em:

- Apresentação profissional da dentista e suas especialidades
- Divulgação dos serviços oferecidos
- Informações sobre a clínica e estrutura
- Integração direta com WhatsApp e Instagram para contato
- Experiência acolhedora e humanizada para os pacientes

## ✨ Funcionalidades

- ✅ Landing page 100% responsiva (desktop, tablet e mobile)
- ✅ Seção "sobre" a profissional
- ✅ Catálogo de serviços
- ✅ Informações da clínica
- ✅ Menu de navegação com estado gerenciado via Zustand
- ✅ Animações de entrada suaves ao rolar a página (`FadeInSection`)
- ✅ SEO otimizado (meta tags, Open Graph, `robots.txt` e `sitemap.xml`)
- ✅ Botões de contato direto via WhatsApp e Instagram

## 🚀 Tecnologias

| Tecnologia | Descrição |
|-----------|-----------|
| [React 19](https://react.dev) | Biblioteca para construção de interfaces |
| [JavaScript (JSX)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | Linguagem do projeto |
| [Vite 8](https://vite.dev) | Ferramenta de desenvolvimento e build |
| [styled-components 6](https://styled-components.com) | CSS-in-JS para estilização dos componentes |
| [Zustand](https://zustand.docs.pmnd.rs) | Gerenciamento de estado leve e simples |
| [Lucide React](https://lucide.dev) | Ícones modernos em SVG |
| [React Icons](https://react-icons.github.io/react-icons) | Coleção adicional de ícones |

## 🎨 Design

- **Cor principal**: Verde-água (`#4D9388`) com variações (`#285F57`)
- **Tipografia**: Poppins
- **Estilo**: Moderno, limpo, profissional e acolhedor
- **Responsividade**: Otimizado para todos os tamanhos de tela

| Breakpoint | Largura |
|------------|---------|
| Mobile | até 767px |
| Tablet | 768px – 1023px |
| Desktop | 1024px+ |

## 📁 Estrutura do Projeto

```
src/
├── components/            # Componentes reutilizáveis
│   ├── Header/            # Cabeçalho do site
│   ├── HeroSection/       # Banner principal
│   ├── AboutProfessional/ # Seção sobre a dentista
│   ├── Servicos/          # Serviços oferecidos
│   ├── AboutClinic/       # Informações da clínica
│   ├── Contato/           # Seção de contato
│   ├── Footer/            # Rodapé
│   ├── FadeInSection/     # Animação de entrada dos elementos
│   ├── PrimaryButton/     # Botão primário
│   ├── SecondaryButton/   # Botão secundário
│   └── QualityNote/       # Nota de qualidade
├── containers/
│   └── Home/              # Página principal
├── hooks/
│   └── useInView.js       # Hook para detectar elementos visíveis
├── store/
│   └── menuStore.js       # Estado global do menu (Zustand)
├── index.css              # Estilos globais
├── App.jsx                # Componente raiz
└── main.jsx               # Ponto de entrada
```

> 💡 Cada componente segue o padrão `index.jsx` (lógica/markup) + `styles.js` (estilização com styled-components).

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org) `24.x` (LTS; versão definida também em `.nvmrc`)
- npm (incluído com o Node.js)

## 🔧 Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/thaisPinheiroOdonto.git

# 2. Acesse a pasta do projeto
cd thaisPinheiroOdonto

# 3. Instale as dependências
nvm use
npm ci

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`.

### 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção na pasta `dist/` |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar a qualidade do código |

## ☁️ Deploy

O projeto já está configurado para deploy na **Vercel** (arquivo `vercel.json`), incluindo:

- Headers de segurança (HSTS, X-Frame-Options, XSS Protection)
- Cache imutável para assets e fontes
- Redirecionamento permanente do alias `thais-pinheiro-odonto.vercel.app` para `https://www.thaispinheiro.odo.br/`, sem abranger os hosts de preview

Use Node.js `24.x` também na Vercel. Antes de publicar, execute `npm run lint` e `npm run build`. Após o deploy, confira o redirecionamento do alias antigo, `/robots.txt`, `/sitemap.xml` e a URL canônica no domínio próprio.

A build gera arquivos estáticos, portanto também pode ser hospedado em:
- Netlify
- GitHub Pages
- AWS S3 / CloudFront
- Qualquer servidor de arquivos estáticos

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE) e foi desenvolvido para uso comercial do consultório odontológico.

---

<p align="center">Feito com 💚 para cuidar de sorrisos</p>
