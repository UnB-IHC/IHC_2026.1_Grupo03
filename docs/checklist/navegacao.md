# Navegação

A navegação avalia se a pessoa consegue se localizar, mover-se e acionar controles sem depender de um único dispositivo ou sentido. Em IHC, uma boa navegação reduz esforço de memória, evita erros e torna o fluxo mais previsível.

<div class="checklist-progress" data-checklist-progress>
  <div>
    <strong>Progresso desta página</strong>
    <span data-checklist-count>0/0 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Percorra a página usando mouse, teclado e, quando possível, leitor de tela. Marque apenas quando o caminho estiver claro, operável e previsível.

## Links, botões e acionamento

> Controles precisam comunicar finalidade antes da ação. A pessoa deve saber o que acontecerá ao clicar, tocar, pressionar Enter ou usar uma tecnologia assistiva.

- [ ] **Indicador de foco**: destacar botões, links e elementos interativos com `:focus-visible` ou recurso equivalente.
- [ ] **Nome funcional do botão**: descrever a ação do botão, e não apenas repetir o texto visual ou o nome do ícone.
- [ ] **Botões apenas com ícone**: criar nome acessível para leitores de tela e atualizar esse nome quando a ação mudar.
- [ ] **Área de acionamento**: garantir alvo mínimo de 24px para WCAG AA e 44px para AAA, mesmo quando o elemento visual for menor.
- [ ] **Texto de link significativo**: evitar links genéricos como “Clique aqui”, “Saiba mais” ou “Baixe agora”; o texto deve indicar o destino ou ação.
- [ ] **Reconhecimento visual de links**: manter links identificáveis, preferencialmente com cor e sublinhado.
- [ ] **Abertura de novas janelas**: evitar abrir novas janelas; quando for necessário, informar isso ao usuário.
- [ ] **Declaração de conformidade**: se um link, botão ou selo indicar conformidade WCAG, informar claramente o nível atendido: A, AA ou AAA.
- [ ] **Selo de conformidade completo**: acompanhar logotipos ou selos de conformidade com as informações obrigatórias da declaração.
- [ ] **Autenticação operável**: garantir que login, validação e segurança sejam acessíveis por teclado e tecnologias assistivas.
- [ ] **Controles deslizantes**: oferecer alternativas de controle, como teclado ou toque único (WCAG nível A).
- [ ] **Cancelamento de input**: permitir cancelar ou reverter acionamentos, por exemplo executando a ação apenas ao soltar o dedo dentro do limite do componente (WCAG nível A).
- [ ] **Movimento do dispositivo**: não depender apenas de ações como sacudir, girar ou mudar a orientação do aparelho (WCAG nível A).
- [ ] **Múltiplas formas de entrada**: permitir uso combinado de teclado, touchscreen, mouse, voz e tecnologias assistivas (WCAG nível AAA).

## Foco

> O foco é a “posição atual” da pessoa na interface. Ele deve ser visível, seguir uma ordem lógica e ajudar na recuperação de erros.

- [ ] **Foco visível**: garantir que todos os elementos focáveis estejam claramente visíveis quando recebem foco.
- [ ] **Área do foco**: fazer o indicador de foco englobar a caixa mínima do elemento interativo (WCAG nível AAA).
- [ ] **Estados de interação**: usar pseudoclasses como `.hover` e `.focus` para sinalizar interação visualmente.
- [ ] **Conteúdo acionado por foco ou hover**: permitir fechar tooltips, menus e popups sem mover o foco ou cursor (WCAG nível AA).
- [ ] **Persistência do conteúdo auxiliar**: manter conteúdos de hover visíveis enquanto a pessoa interage com eles (WCAG nível AA).
- [ ] **Controle de desaparecimento**: não ocultar conteúdos de hover ou foco até que a pessoa remova foco/cursor ou feche explicitamente (WCAG nível AA).
- [ ] **Foco em autenticação**: manter ordem lógica do foco em janelas de login, autenticação ou reautenticação.
- [ ] **Foco após erro**: direcionar o foco para ajudar a encontrar o campo com problema após erro em formulário ou autenticação.
- [ ] **Sequência lógica**: verificar se a ordem do foco acompanha a sequência visual e funcional da tarefa.

## Estrutura e cabeçalhos

> Cabeçalhos e regiões semânticas permitem que a pessoa compreenda a arquitetura da página e pule diretamente para partes relevantes.

- [ ] **Regiões principais**: usar `header`, `main` e `footer` de forma coerente, sem duplicar landmarks que confundam a navegação.

## Navegação por teclado

> A interface deve funcionar sem mouse. Isso beneficia pessoas com deficiência motora, usuários avançados, leitores de tela e situações de uso com dispositivos variados.

- [ ] **Operação por teclado**: garantir que todos os botões e links sejam alcançáveis e operáveis por teclado.
- [ ] **Independência do mouse**: evitar funções que dependam exclusivamente de mouseover ou movimento do mouse.
- [ ] **Atalhos seguros**: evitar atalhos de teclado de tecla única; usar modificadores como Ctrl ou Alt (WCAG nível A).
- [ ] **Controle de atalhos simples**: quando houver atalho de letra, número ou símbolo, permitir desativar, remapear ou acionar apenas com o componente em foco.
- [ ] **Sem limite de tempo no teclado**: permitir acesso a todo conteúdo por teclado sem limite de tempo para acionamento (WCAG nível AAA).
- [ ] **Autenticação por teclado**: permitir concluir login, autenticação e reautenticação usando apenas teclado.
- [ ] **CAPTCHA acessível**: oferecer alternativa acessível para desafios de segurança ou confirmação de identidade.
- [ ] **Pular blocos repetidos**: permitir saltar áreas repetidas, como navbar, e ir direto para o conteúdo principal (WCAG nível A).

## Modais e janelas sobrepostas

> Modais interrompem o fluxo principal, por isso precisam ser previsíveis, fáceis de fechar e bem controlados pelo foco.

- [ ] **Fechamento claro**: permitir fechar modais com botão visível e com a tecla Esc.
- [ ] **Abertura controlada**: evitar que modais abram automaticamente sem solicitação da pessoa usuária.
- [ ] **Sem modal dentro de modal**: não abrir uma janela sobreposta dentro de outra.
- [ ] **Gestão de foco**: configurar modais para evitar armadilhas de foco e mudanças de contexto inesperadas.
