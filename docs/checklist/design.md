# Design

O design deve tornar a interface perceptível, confortável e previsível. Em IHC, escolhas visuais não são apenas estética: elas influenciam compreensão, esforço cognitivo, prevenção de erros e inclusão de pessoas com diferentes condições visuais, motoras e cognitivas.

<div class="checklist-progress" data-checklist-progress>
  <div>
    <strong>Progresso desta página</strong>
    <span data-checklist-count>0/0 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Avalie se a informação continua compreensível quando cor, tamanho, movimento, som ou orientação de tela mudam. Marque apenas quando o critério estiver atendido.

## Cor, contraste e percepção visual

> A informação visual precisa continuar disponível para pessoas com baixa visão, daltonismo, sensibilidade à luz ou uso de telas em condições variadas.

- [ ] **Cor como apoio, não dependência**: não usar cor como único meio de transmitir informação.
- [ ] **Cores para daltonismo**: escolher combinações que continuem distinguíveis para pessoas daltônicas.
- [ ] **Contraste de texto**: garantir contraste mínimo de 4,5:1 para conteúdo textual.
- [ ] **Contraste AAA**: para conformidade AAA, usar contraste mínimo de 7:1 em textos comuns ou 4,5:1 em textos grandes.
- [ ] **Textos grandes**: garantir contraste mínimo de 3:1 para textos de 18pt ou 14pt em negrito.
- [ ] **Exceções de contraste**: reconhecer que logotipos e elementos puramente decorativos não possuem requisito mínimo de contraste.
- [ ] **Componentes de interface**: manter contraste mínimo de 3:1 entre componentes interativos e o fundo.
- [ ] **Alto contraste**: oferecer opção de alto contraste ou modo escuro quando possível.
- [ ] **Personalização de cores**: permitir esquemas personalizados de texto e fundo sempre que possível (WCAG nível AAA).
- [ ] **Texto e ícone juntos**: combinar texto e ícone em botões para apoiar pessoas surdas, neurodiversas ou com dificuldade de interpretação visual.
- [ ] **Características sensoriais**: não depender apenas de forma, tamanho, localização, orientação ou som para explicar uma ação.
- [ ] **Orientação de tela**: não restringir a visualização e operação a uma única orientação, como apenas horizontal ou vertical.
- [ ] **Movimento automático**: permitir pausar, parar ou ocultar informações que se movem, rolam ou piscam automaticamente por mais de 5 segundos.
- [ ] **Atualização automática**: permitir pausar, parar ou controlar frequência de conteúdos atualizados automaticamente, como feeds e placares.
- [ ] **Múltiplos caminhos**: permitir chegar à página por mais de um caminho, como busca, mapa do site ou tabela de conteúdos (WCAG nível AA).

## Texto e legibilidade

> Texto legível reduz sobrecarga cognitiva e favorece leitura por pessoas com baixa visão, dislexia, TDAH ou pouca familiaridade com o domínio.

- [ ] **Linguagem simples**: usar linguagem direta para evitar sobrecarga cognitiva.
- [ ] **Ambiguidade e redundância**: remover ambiguidades, repetições e instruções desnecessárias.
- [ ] **Comprimento de linha**: manter linhas de texto próximas de 80 caracteres para facilitar acompanhamento visual.
- [ ] **Alinhamento previsível**: alinhar texto à esquerda em português, preservando ritmo natural de leitura.
- [ ] **Tipografia legível**: evitar fontes rebuscadas, manuscritas ou com baixa diferenciação entre caracteres.
- [ ] **Tamanho mínimo**: usar aproximadamente 18pt para texto normal e 14pt para texto em negrito, conforme o contexto visual.
- [ ] **Espaçamento de linha**: manter espaçamento mínimo de 1,5 vez o tamanho da fonte.
- [ ] **Ajuste de espaçamento**: preservar informação e funcionalidade quando a pessoa aumentar linhas, letras, palavras e parágrafos (WCAG nível AA).
- [ ] **Linha com 1,5x**: manter conteúdo funcional quando o espaçamento entre linhas for configurado para 1,5 vez.
- [ ] **Parágrafo com 2x**: manter conteúdo funcional quando o espaçamento entre parágrafos for configurado para 2 vezes.
- [ ] **Letras com 0,12em**: manter conteúdo funcional quando o espaçamento entre letras for configurado para 0,12em.
- [ ] **Palavras com 0,16em**: manter conteúdo funcional quando o espaçamento entre palavras for configurado para 0,16em (WCAG nível AA).
- [ ] **Hashtags legíveis**: iniciar cada palavra de hashtags com letra maiúscula, por exemplo `#AcessibilidadeDigital`.

## Vídeos e animações

> Movimento e mídia enriquecem a experiência, mas podem causar barreiras quando não há controle, alternativa textual ou cuidado com segurança visual.

- [ ] **Legendas e audiodescrição**: oferecer legendas e audiodescrição para vídeos pré-gravados.
- [ ] **Transcrição completa**: fornecer alternativa textual que transcreva conteúdo visual e sonoro de vídeo pré-gravado.
- [ ] **Controle de animações**: permitir que animações sejam pausadas, interrompidas ou desativadas pela pessoa usuária.
- [ ] **Evitar movimento excessivo**: evitar animações de tela inteira e efeitos parallax que possam causar desconforto.
- [ ] **Limite de flashes nível A**: evitar elementos que pisquem mais de 3 vezes em 1 segundo, ou manter abaixo dos limites de segurança para flashes vermelhos.
- [ ] **Limite de flashes nível AAA**: evitar elementos que pisquem mais de 3 vezes em 3 segundos (WCAG nível AAA).
- [ ] **Movimento por interação**: permitir desativar animações acionadas por interação, salvo quando o movimento for essencial para a funcionalidade (WCAG nível AAA).
- [ ] **Mídia ao vivo**: oferecer legendas em tempo real para áudio e vídeo transmitidos ao vivo.

## Áudio

> Conteúdo sonoro precisa ter alternativa e controle. A pessoa deve poder compreender a informação sem ser surpreendida por som automático ou volume inadequado.

- [ ] **Transcrição de áudio**: fornecer alternativa textual para todo áudio pré-gravado.
- [ ] **Áudio automático**: evitar áudio que toque automaticamente por mais de 3 segundos.
- [ ] **Controle de volume**: oferecer mecanismo para pausar, parar, silenciar ou ajustar volume sem alterar o volume geral do sistema.
- [ ] **Sons intensos**: evitar sons altos ou inesperados.
- [ ] **Som de fundo**: permitir desativar sons de fundo em conteúdos focados em fala, ou mantê-los pelo menos 20 dB abaixo da voz principal (WCAG nível AAA).
- [ ] **Língua de sinais**: oferecer interpretação em língua de sinais para conteúdos de áudio em mídias pré-gravadas.
- [ ] **Áudio ao vivo**: fornecer alternativa textual em tempo real para mídias que tenham apenas áudio transmitido ao vivo.
