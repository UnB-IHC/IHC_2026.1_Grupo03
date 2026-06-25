# Privacidade e segurança

Esta categoria observa como a interface protege dados, autenticação e continuidade da tarefa sem criar barreiras cognitivas ou operacionais. Em IHC, segurança também precisa ser compreensível, previsível e recuperável.

<div class="checklist-progress" data-checklist-progress>
  <div>
    <strong>Progresso desta página</strong>
    <span data-checklist-count>0/0 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Marque o item quando a interface permitir que a pessoa entenda o risco, mantenha controle da sessão e consiga concluir a tarefa com segurança.

## Tempo, sessão e interrupções

> O usuário deve conseguir prever e controlar eventos de tempo. Expiração inesperada de sessão pode causar perda de dados, frustração e abandono da tarefa.

- [ ] **Limites de tempo visíveis**: informar limites de tempo e expiração de sessão de forma clara antes que afetem a tarefa.
- [ ] **Controle de prazo**: permitir estender, pausar ou compreender prazos de tempo sempre que possível (WCAG nível A).
- [ ] **Opções antes da expiração**: permitir desativar o limite antes de começar, ajustar o tempo em até 10 vezes o padrão ou estender o prazo com aviso de pelo menos 20 segundos.
- [ ] **Exceções justificadas**: aplicar limite de tempo apenas em eventos em tempo real, quando o tempo for essencial ou quando o limite for maior que 20 horas.
- [ ] **Prevenção de perda de dados**: avisar antecipadamente caso um timeout cause perda de dados, salvo quando os dados forem preservados intactos por mais de 20 horas (WCAG nível AAA).
- [ ] **Interrupções controláveis**: permitir adiar ou suprimir interrupções não emergenciais, como alertas ou atualizações automáticas (WCAG nível AAA).
- [ ] **Ausência de limite desnecessário**: evitar qualquer limite de tempo, exceto em mídias sincronizadas ou eventos em tempo real (WCAG nível AAA).

## Autenticação e mensagens de segurança

> Segurança acessível não deve depender apenas de memória, visão, audição ou resolução de desafios complexos. A pessoa precisa entender o problema e saber como corrigi-lo.

- [ ] **Autenticação acessível**: não depender apenas de memorização, cálculos complexos ou desafios cognitivos difíceis.
- [ ] **Alternativas para conteúdo não textual**: oferecer alternativa acessível para recursos de segurança baseados em imagens, ícones ou conteúdo não textual.
- [ ] **Alertas compreensíveis**: apresentar alertas de segurança em texto claro, não apenas por cor, som ou ícone.
- [ ] **Proteção de dados sensíveis**: não revelar informações sensíveis em mensagens de erro.
- [ ] **Recuperação sem perda**: permitir corrigir erros de segurança ou autenticação sem perder dados já preenchidos.
