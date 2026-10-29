# Auditoria técnica — Thaís Pinheiro Odontologia

Data: 29/10/2026. Escopo: dependências, publicação e SEO, sem alterações na aplicação, no visual ou nas configurações da Vercel.

## Atualização de dependências concluída — 29/10/2026

Após a troca para a rede móvel, o registro npm ficou acessível. As restrições e pendências das primeiras etapas, descritas abaixo, são históricas: a instalação e o build locais agora concluíram.

| Dependência | Antes | Instalada |
| --- | --- | --- |
| react / react-dom | 19.2.8 | 19.3.1 |
| styled-components | 6.4.4 | 6.6.0 |
| zustand | 5.0.14 | 5.0.16 |
| vite | 7.3.6 | 8.3.5 |
| @vitejs/plugin-react | 4.7.0 | 6.1.2 |
| eslint | 10.8.0 | 10.13.0 |
| eslint-plugin-react-refresh | 0.5.3 | 0.5.7 |
| globals | 17.8.0 | 17.13.0 |
| @types/react | 19.2.17 | 19.3.0 |
| @types/react-dom | 19.2.3 | 19.3.0 |

As dependências indiretas também receberam correções compatíveis: @humanfs/node 0.16.8, brace-expansion 5.0.12, nanoid 3.3.20, source-map-js 1.2.2 e zod 4.6.7. O lockfile foi gerado pelo npm e a instalação final foi reproduzida com npm ci.

O Lucide 1.64.0 foi avaliado e descartado para esta manutenção: Smile e Zap mudaram de desenho. Lucide permanece em 0.542.0 para respeitar o visual existente. Foram comparadas as definições SVG usadas na página com uma cópia anterior à instalação; os arquivos finais são idênticos aos originais. react-icons, @eslint/js e eslint-plugin-react-hooks permaneceram nas versões atuais disponibilizadas pelo registro.

A migração para Vite 8 usa plugin-react 6. A configuração de build fixa Chrome 107, Edge 107, Firefox 104 e Safari 16 para preservar os alvos anteriores de compilação, pois o padrão do Vite 8 passou a exigir versões mais novas. [Guia oficial de migração](https://vite.dev/guide/migration).

### Verificação final

- npm ci: concluído; instalação local reconstruída, sem os diretórios extras observados anteriormente.
- npm run lint: aprovado.
- npm run build: aprovado, com 1.706 módulos transformados em aproximadamente 0,4 segundo na execução final.
- npm audit: zero vulnerabilidades conhecidas na árvore final, contra seis alertas antes da atualização (cinco altos e um moderado).
- npm ls --depth=0: árvore direta válida, sem dependências extras ou incompatíveis apontadas.
- package.json e metadados raiz do lockfile: consistentes.
- Verificação adicional de renderização com React e geração de CSS por styled-components: aprovada. Esse ensaio em Node exigiu incluir styled-components no processamento SSR do Vite, apenas no comando temporário de verificação; a aplicação publicada continua exclusivamente cliente. O ensaio exibiu avisos sobre isVisible/delay encaminhados ao DOM, já presentes no código; esses atributos não foram alterados nesta manutenção.
- Nenhum arquivo de estilos alterado; rótulo “Ligar” e destino WhatsApp mantidos.

Não houve comparação visual em navegador, commit, push ou deploy. Continuam pendentes a publicação e a verificação do redirecionamento, das URLs de SEO e dos avisos do painel da Vercel após o deploy. O resultado do npm audit expressa os avisos conhecidos na data da consulta, não uma garantia de ausência de falhas.

## Pendências atuais e próxima implementação

### Validação desta publicação

- Deploy observado nas capturas enviadas pelo usuário: produção em estado Ready, commit 751e7f0, domínio www.thaispinheiro.odo.br. O overview exibiu firewall ativo sem eventos recentes e taxa de erro de 0% na janela mostrada. Isso não substitui os testes funcionais nem confirma a versão de Node usada no build.
- Consulta pública após o deploy: página principal HTTP 200; título, canonical, og:url, URL do JSON-LD, robots.txt e sitemap.xml corrigidos. O domínio sem www retorna 308 para www.
- Pendência confirmada: o alias thais-pinheiro-odonto.vercel.app ainda responde 200, servindo os mesmos assets da versão atual e canonical correto, mas sem efetuar o redirecionamento esperado. A regra em vercel.json não teve o efeito esperado em produção; revisar sua aplicação/configuração na Vercel. Não é evidência de falha no domínio principal.

- [ ] Conferir o preview da Vercel em desktop e celular: layout, menu, navegação, mapa e links de contato.
- [ ] Conferir o build/deploy com Node 24 e os avisos específicos do painel da Vercel.
- [ ] Após publicar, verificar o redirecionamento do alias antigo para o domínio com www, sem afetar previews.
- [x] Após publicar, verificar canonical, robots.txt, sitemap.xml, og:url e URL do JSON-LD no domínio de produção.
- [ ] Conferir a prévia real de compartilhamento no domínio de produção.

Esses itens são verificações da entrega atual; não dependem de uma nova funcionalidade.

### Melhorias para a próxima implementação

- [ ] Conferir Search Console: propriedade do domínio, envio do sitemap e inspeção/indexação da URL principal.
- [ ] Medir desempenho mobile e Core Web Vitals com Lighthouse/PageSpeed e, quando houver dados, métricas reais.
- [ ] Validar os dados estruturados no Rich Results Test e avaliar campos adicionais com informações confirmadas da cliente.
- [ ] Conferir a prévia social; avaliar descrição alternativa e dimensões da imagem de compartilhamento.
- [ ] Avaliar pré-renderização para disponibilizar o conteúdo principal no HTML inicial.
- [ ] Corrigir o repasse de isVisible/delay ao DOM, sem modificar as animações.
- [ ] Decidir com o usuário sobre o rótulo “Ligar” e a atualização do Lucide que muda os desenhos de Smile/Zap.

Pré-renderização e a atualização do Lucide são melhorias opcionais; não são bloqueios técnicos identificados para esta publicação. O acompanhamento no Search Console pode começar assim que a versão corrigida estiver publicada.

## Primeira implementação local — 29/10/2026

A análise abaixo registra o estado encontrado antes das correções. Na primeira implementação autorizada foram aplicados:

- URLs de canonical, Open Graph, JSON-LD, robots.txt e sitemap para `https://www.thaispinheiro.odo.br/`.
- Título e descrições de SEO/compartilhamento com foco em tratamento de canal em Águas Claras; descrição unificada com 146 caracteres.
- Remoção dos preconnects para Google Fonts, pois as fontes são locais.
- Node `24.x` em package.json e nos metadados raiz do lockfile, além de `.nvmrc` e instruções no README.
- `loading="lazy"` no mapa, mantendo dimensões e endereço.
- Regra de redirecionamento permanente em vercel.json, condicionada exclusivamente ao host `thais-pinheiro-odonto.vercel.app`, para preservar os endereços de preview. A regra precisa de deploy para validar o comportamento real na Vercel.

O rótulo “Ligar” e seu destino no WhatsApp foram mantidos por solicitação do usuário. Nenhum arquivo de estilos foi modificado. Não houve deploy.

Verificações: `npm run lint` passou; validações locais de HTML/metadados, JSON-LD, XML, alinhamento de Node e preservação das versões no lockfile passaram. O build voltou a parar na etapa de transformação e foi interrompido manualmente. Foram encontrados 3.426 arquivos `dataless` somente no diretório ESM de lucide-react: arquivos cujo conteúdo não está completamente disponível no disco local. Isso é uma limitação ambiental a investigar/restaurar antes de tratar o build como validado.

O cache npm foi inspecionado e não contém metadados/tarballs das dependências diretas deste projeto. Não foi possível atualizar pacotes offline; suas versões foram preservadas. Apenas a configuração de Node foi sincronizada no lockfile.

## Prioridades identificadas na auditoria inicial (histórico)

1. Corrigir todas as referências de SEO para `https://www.thaispinheiro.odo.br/`, endereço final utilizado atualmente pela hospedagem.
2. Atualizar Vite de 7.3.6 para pelo menos 7.3.7 e revisar a árvore transitiva com `npm audit` quando o registro npm estiver acessível.
3. Definir uma versão LTS específica de Node, alinhada entre ambiente local e Vercel; recomendação: 24.x.
4. Concluir instalação reproduzível, lint, build e revisão no navegador antes de considerar a publicação validada.
5. Conferir os alertas concretos do painel da Vercel e a indexação no Search Console, ainda não acessados nesta revisão.

## Publicação verificada por HTTP

| Endereço | Resultado |
| --- | --- |
| `http://thaispinheiro.odo.br` | 308 para HTTPS sem www |
| `https://thaispinheiro.odo.br` | 308 para HTTPS com www |
| `https://www.thaispinheiro.odo.br/` | 200, HTML servido pela Vercel |
| `https://thais-pinheiro-odonto.vercel.app/` | 200, sem redirecionamento para o domínio próprio |

O HTML publicado mantém canonical e demais URLs de SEO no domínio antigo. `robots.txt` e `sitemap.xml` publicados também foram consultados e apresentam o mesmo problema.

Os headers HSTS, X-Content-Type-Options e X-Frame-Options estão presentes na resposta da página principal. Isso não constitui uma auditoria completa de segurança.

As imagens `perfilThais.webp` e `consultorio.webp`, no Google Cloud Storage, retornam 200 e têm aproximadamente 29,7 kB e 28,4 kB, respectivamente. São recursos externos à Vercel e dependem da continuidade desse bucket. Não foi validada a entrega de cada recurso da página nem o funcionamento da conta de WhatsApp.

## Dependências

As versões da coluna atual foram lidas do package-lock.json e conferidas com a listagem local de dependências diretas. As versões disponíveis vieram das páginas públicas dos mantenedores no npm, consultadas via busca web: são referências para a atualização, a confirmar no registro antes de instalar. `npm outdated` e `npm audit` falharam por timeout, inclusive fora da rede restrita; portanto não há um resultado completo da auditoria de vulnerabilidades transitivas.

| Pacote | Atual | Referência disponível / encaminhamento |
| --- | --- | --- |
| vite | 7.3.6 | Correção mínima 7.3.7; versão principal mais recente consultada: 8.3.5 |
| @vitejs/plugin-react | 4.7.0 | 6.1.2; migração principal a planejar junto com Vite |
| react | 19.2.8 | 19.3.1; atualizar em conjunto com react-dom |
| react-dom | 19.2.8 | 19.3.1 |
| styled-components | 6.4.4 | 6.6.0; validar estilos em preview |
| zustand | 5.0.14 | 5.0.16 |
| lucide-react | 0.542.0 | 1.61.0; salto principal, exige revisão dos ícones |
| react-icons | 5.7.0 | 5.7.0 na página consultada; sem atualização identificada |
| eslint | 10.8.0 | 10.13.0; conferir regras após atualizar |
| eslint-plugin-react-refresh | 0.5.3 | 0.5.7 |
| eslint-plugin-react-hooks | 7.1.1 | 7.1.1 na página consultada; sem atualização estável identificada |
| @types/react | 19.2.17 | 19.3.0; alinhar com a versão de React escolhida |
| @types/react-dom | 19.2.3 | Última versão não confirmada |
| @eslint/js | 10.0.1 | Última versão não confirmada |
| globals | 17.8.0 | Última versão não confirmada |

### Segurança e compatibilidade

- O aviso [GHSA-rq7h-c2jc-7f22](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22) inclui Vite 7.3.6 e é corrigido em 7.3.7. As condições incluem servidor de desenvolvimento explicitamente exposto à rede, caminhos específicos e sistema não Windows. O site observado é uma publicação de arquivos estáticos, não um servidor Vite de desenvolvimento.
- A linha [Vite 7.3 ainda recebe correções importantes e de segurança](https://vite.dev/releases). Não é necessário migrar imediatamente para Vite 8 para aplicar essa correção. O plugin-react 4.7.0 aceita Vite 7 em suas peerDependencies locais; não declara Vite 8.
- Há um aviso crítico de [React Server Components](https://github.com/react/react/security/advisories/GHSA-xqc2-xf4c-x3h3), mas os pacotes react-server-dom envolvidos não aparecem no lockfile e a aplicação usa createRoot no navegador. Esse aviso não demonstra uma vulnerabilidade desta landing page.
- O campo engines aceita Node 20 e qualquer versão a partir de 24, inclusive versões principais futuras. [Node 20 está em EOL](https://nodejs.org/en/about/eol). Fixar uma linha LTS evita mudanças involuntárias de runtime. A versão efetivamente configurada no projeto da Vercel não foi consultada; a [Vercel documenta a seleção por engines](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
- A instalação local contém diretórios marcados como extraneous por npm ls. Isso indica sobras locais, sem provar defeito no deploy. Recomenda-se validar uma instalação limpa com npm ci em ambiente isolado quando houver acesso ao registro.

Referências de versões: [Vite](https://www.npmjs.com/package/vite?activeTab=versions), [plugin-react](https://www.npmjs.com/package/%40vitejs/plugin-react), [React](https://www.npmjs.com/package/react?activeTab=versions), [React DOM](https://www.npmjs.com/package/react-dom?activeTab=versions), [styled-components](https://www.npmjs.com/package/styled-components?activeTab=versions), [Zustand](https://www.npmjs.com/package/zustand), [Lucide](https://www.npmjs.com/package/lucide-react?activeTab=versions), [React Icons](https://www.npmjs.com/package/react-icons), [ESLint](https://www.npmjs.com/package/eslint), [React Refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh?activeTab=versions), [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks?activeTab=versions), [tipos React](https://www.npmjs.com/package/%40types/react?activeTab=versions).

## SEO

### Alta prioridade: domínio canônico inconsistente

Em `index.html`, og:url, canonical e url do JSON-LD apontam para a Vercel. `public/robots.txt` anuncia o sitemap antigo e `public/sitemap.xml` lista o endereço antigo. Todos devem usar o mesmo domínio final, hoje com www. O canonical atual sinaliza preferência pelo endereço antigo e pode fazer o Google consolidar os sinais na URL errada; a URL efetivamente escolhida pelo Google só pode ser confirmada no Search Console.

Também convém configurar redirecionamento permanente do alias de produção da Vercel para o domínio próprio, sem afetar os previews. Não há essa configuração em vercel.json e a consulta HTTP confirmou que o alias responde 200.

### Boa base já existente

- Idioma pt-BR, viewport, título e meta description presentes no HTML inicial.
- Open Graph e Twitter Card presentes.
- JSON-LD do tipo Dentist com telefone, endereço, horário e Instagram.
- robots.txt permite rastreamento e há sitemap de uma URL, adequado a uma landing page.
- Um h1 no código, seções com títulos, main, navegação e descrições alternativas nas imagens.
- Endereço, telefone e horário no código visível são coerentes com o JSON-LD. A atualidade dessas informações depende de confirmação com a cliente.

### Melhorias sem mudar o layout

- Ajustar title e description para reforçar a busca local, por exemplo: “Tratamento de canal em Águas Claras | Dra. Thaís Pinheiro”. A descrição atual tem aproximadamente 196 caracteres e pode ser truncada; não há um limite universal fixo. Revisar a promessa “sem dor” com a cliente ao editar o texto.
- O conteúdo principal só é montado por JavaScript: o body inicial contém apenas o root vazio. O Google pode renderizar JavaScript, mas há uma etapa adicional e outros rastreadores podem ter limitações. Pré-renderização é uma melhoria possível, sem exigir redesign ou migração obrigatória de framework. [Orientação do Google](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
- O iframe do mapa não usa loading="lazy"; carregá-lo sob demanda pode reduzir trabalho inicial sem alterar sua aparência. O efeito precisa ser medido.
- Remover preconnects de Google Fonts, pois as fontes já são locais, e avaliar preconnect para o bucket das imagens se a medição justificar.
- Validar o recorte da imagem usada no compartilhamento e acrescentar og:image:alt e dimensões. As tags já existem; a aparência real do compartilhamento não foi testada.
- Validar o JSON-LD no Rich Results Test; campos adicionais como geo, hasMap e @id só devem ser preenchidos com informações confirmadas.
- Conferir propriedade, sitemap e inspeção de URL no Search Console, além do link do site no Perfil da Empresa no Google. Não foi verificado se essas configurações já existem.
- O link rotulado por acessibilidade como “Ligar” abre WhatsApp. Corrigir o rótulo é possível sem alteração visual.

## Limites e verificação restante

Não foram acessados os avisos privados do painel da Vercel, Search Console ou métricas de usuários reais. Não há nota Lighthouse nem validação de Core Web Vitals nesta análise. Não foi possível abrir um navegador automatizado disponível na sessão.

As execuções isoladas de lint e build atingiram o limite de 45 segundos e foram interrompidas pelo processo de verificação. O build chegou à etapa “transforming”; o lint não produziu saída. Isso não permite classificá-las como aprovadas nem como falhas de código. Outras tentativas iniciadas pelos scripts do projeto também não tinham apresentado resultado conclusivo. Nenhuma dependência foi instalada/atualizada e nenhum deploy foi realizado.

Sequência sugerida para a manutenção: corrigir URLs de SEO; aplicar patches compatíveis; fixar Node LTS; executar npm ci, npm audit, lint e build; verificar preview no desktop e celular, navegação, mapa, contatos e compartilhamento; comparar o visual; publicar e inspecionar a URL no Search Console. Migrações principais de ícones e ferramentas podem ficar para uma etapa separada.
