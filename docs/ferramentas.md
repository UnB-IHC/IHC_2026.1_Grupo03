# Ferramentas de verificação de acessibilidade

Esta página reúne as ferramentas recomendadas para apoiar a auditoria de acessibilidade de interfaces web durante as atividades da disciplina. Cada ferramenta está classificada pelo **sistema operacional** em que é executada e pelo **tipo de análise** que realiza.

!!! tip "Como combinar"
    Use as ferramentas **automatizadas** para identificar rapidamente problemas conhecidos (cores, contraste, estrutura, ARIA) e os **leitores de tela** para validar a experiência real de navegação por teclado e voz.

<div class="acessweb-tools" role="list" aria-label="Ferramentas de verificação de acessibilidade por sistema operacional">

  <section class="acessweb-tools__group" role="listitem" aria-labelledby="tools-multi">
    <header class="acessweb-tools__header">
      <h3 id="tools-multi">Multiplataforma</h3>
      <p>Windows, macOS e Linux via navegador (Chrome, Firefox e Edge)</p>
    </header>
    <ul class="acessweb-tools__list" role="list">
      <li class="acessweb-tools__item" role="listitem">
        <div class="acessweb-tools__item-head">
          <strong>WAVE</strong>
          <span class="acessweb-tools__badge acessweb-tools__badge--auto">Automatizada</span>
        </div>
        <p>
          Avalia páginas em tempo real e destaca erros de contraste, imagens sem texto
          alternativo, estrutura de cabeçalhos e atributos ARIA. Ideal para uma primeira
          triagem visual de problemas comuns, pois injeta ícones diretamente na página.
        </p>
        <p class="acessweb-tools__meta">
          Disponível como extensão para Chrome, Firefox e Edge ·
          <a href="https://wave.webaim.org/" rel="noopener" target="_blank">wave.webaim.org</a>
        </p>
      </li>
      <li class="acessweb-tools__item" role="listitem">
        <div class="acessweb-tools__item-head">
          <strong>Axe DevTools</strong>
          <span class="acessweb-tools__badge acessweb-tools__badge--auto">Automatizada</span>
        </div>
        <p>
          Motor de testes da Deque integrado ao DevTools do navegador, com classificação
          de impactos (crítico, sério, moderado) e orientações de correção alinhadas à
          WCAG 2.1 e 2.2. Recomendado para auditorias mais aprofundadas, especialmente
          em Single Page Applications.
        </p>
        <p class="acessweb-tools__meta">
          Disponível como extensão para Chrome, Firefox e Edge ·
          <a href="https://www.deque.com/axe/devtools/" rel="noopener" target="_blank">deque.com/axe/devtools</a>
        </p>
      </li>
    </ul>
  </section>

  <section class="acessweb-tools__group" role="listitem" aria-labelledby="tools-android">
    <header class="acessweb-tools__header">
      <h3 id="tools-android">Android</h3>
      <p>Aplicativo nativo da Google</p>
    </header>
    <ul class="acessweb-tools__list" role="list">
      <li class="acessweb-tools__item" role="listitem">
        <div class="acessweb-tools__item-head">
          <strong>Accessibility Scanner</strong>
          <span class="acessweb-tools__badge acessweb-tools__badge--auto">Automatizada</span>
        </div>
        <p>
          Analisa aplicativos e páginas abertas no navegador do Android, sugerindo
          melhorias de tamanho de toque, contraste de cores, rótulos de conteúdo e
          descrições de elementos interativos.
        </p>
        <p class="acessweb-tools__meta">
          Disponível na Google Play ·
          <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor" rel="noopener" target="_blank">ver na Play Store</a>
        </p>
      </li>
    </ul>
  </section>

  <section class="acessweb-tools__group" role="listitem" aria-labelledby="tools-ios">
    <header class="acessweb-tools__header">
      <h3 id="tools-ios">macOS / iOS</h3>
      <p>Leitor de tela nativo da Apple</p>
    </header>
    <ul class="acessweb-tools__list" role="list">
      <li class="acessweb-tools__item" role="listitem">
        <div class="acessweb-tools__item-head">
          <strong>VoiceOver</strong>
          <span class="acessweb-tools__badge acessweb-tools__badge--screen-reader">Leitor de tela</span>
        </div>
        <p>
          Leitor de tela integrado ao macOS e iOS que permite testar a navegação por
          gestos, teclado e braille, avaliando a ordem de foco, a semântica dos
          elementos e a leitura de textos alternativos.
        </p>
        <p class="acessweb-tools__meta">
          Atalho: <kbd>⌘</kbd> + <kbd>F5</kbd> (macOS) ·
          <a href="https://www.apple.com/br/accessibility/vision/" rel="noopener" target="_blank">apple.com/accessibility</a>
        </p>
      </li>
    </ul>
  </section>

</div>