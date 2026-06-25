# Conformidade e robustez

Esta página reúne os critérios formais de conformidade e a compatibilidade técnica com tecnologias assistivas. Em IHC, uma interface só pode ser considerada adequada quando o fluxo completo funciona para pessoas reais, em diferentes navegadores, dispositivos e formas de interação.

<div class="checklist-progress" data-checklist-progress>
  <div>
    <strong>Progresso desta página</strong>
    <span data-checklist-count>0/0 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Marque quando houver evidência de que o critério foi atendido no conjunto completo de páginas, fluxos, componentes e tecnologias definidos no escopo.

## Critérios de declaração

> Uma declaração de conformidade só é confiável quando cobre a experiência completa, incluindo páginas relacionadas, estados de erro e tecnologias necessárias para operar a interface.

- [ ] **Nível integral**: atender integralmente o nível escolhido, seja A, AA ou AAA, sem exceções internas.
- [ ] **Página completa**: aprovar a página inteira; não declarar conformidade apenas para partes isoladas.
- [ ] **Fluxos de múltiplas etapas**: garantir que todas as telas de processos como checkout, cadastro ou autenticação sejam acessíveis.
- [ ] **Tecnologias compatíveis**: usar apenas tecnologias web com suporte comprovado em navegadores e tecnologias assistivas.
- [ ] **Conteúdo não acessível sem bloqueio**: impedir que itens não acessíveis prendam o teclado, bloqueiem o restante da página ou gerem áudio e flashes incontroláveis.

## Compatibilidade com tecnologias assistivas

> Componentes robustos comunicam nome, função, valor e estado. Isso permite que pessoas usando leitor de tela, navegação por teclado ou automação compreendam a interface.

- [ ] **Nome e função**: garantir que o nome acessível e a função de todos os componentes sejam identificados por tecnologias assistivas.
- [ ] **Mudanças de estado**: notificar alterações como botão expandido/recolhido, item selecionado ou painel aberto em tempo real ao leitor de tela.
- [ ] **Mensagens de status**: fazer com que mensagens como “carregando”, “salvo” ou “erro ao enviar” sejam lidas por tecnologias assistivas sem deslocar o foco do usuário.
