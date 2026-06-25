# Compreensão e entrada

Esta página reúne critérios sobre clareza, previsibilidade e apoio ao preenchimento de informações. Em IHC, a pessoa deve entender o que a interface pede, prever o que vai acontecer e conseguir corrigir erros sem constrangimento, perda de dados ou tentativa e erro excessiva.

<div class="checklist-progress" data-checklist-progress>
  <div>
    <strong>Progresso desta página</strong>
    <span data-checklist-count>0/0 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Marque cada item quando a interface comunicar significado, contexto, consequência e correção de forma clara para pessoas e tecnologias assistivas.

## Legível

> O conteúdo deve ser interpretável tanto por pessoas quanto por tecnologias assistivas. Idioma, abreviações e termos técnicos precisam ser explicitados.

- [ ] **Idioma da página**: garantir que o idioma padrão de cada página possa ser determinado programaticamente.
- [ ] **Idioma de partes**: identificar programaticamente trechos que mudam de idioma em relação ao padrão da página.
- [ ] **Palavras incomuns**: fornecer definição para jargões, termos incomuns e expressões idiomáticas.
- [ ] **Abreviações**: disponibilizar a forma expandida ou o significado de abreviações.
- [ ] **Nível de leitura**: oferecer conteúdo suplementar ou versão simplificada quando o texto exigir leitura avançada.
- [ ] **Pronúncia**: indicar a pronúncia correta quando o significado da palavra depender disso.

## Previsível

> A pessoa deve conseguir antecipar o comportamento da interface. Mudanças inesperadas de contexto quebram o fluxo mental e aumentam o risco de erro.

- [ ] **Foco sem mudança automática**: garantir que nenhum componente inicie mudança de contexto apenas por receber foco.
- [ ] **Entrada de dados controlada**: impedir que alterações em componentes causem mudança automática de contexto sem aviso prévio.
- [ ] **Navegação consistente**: manter mecanismos de navegação repetidos na mesma ordem relativa em todas as páginas.
- [ ] **Identificação consistente**: usar o mesmo nome, ícone e comportamento para componentes com a mesma função.
- [ ] **Mudança sob solicitação**: realizar mudanças de contexto apenas por solicitação do usuário ou oferecer mecanismo para desativá-las.
- [ ] **Ajuda consistente**: posicionar contatos, autoatendimento e ajuda na mesma ordem relativa quando repetidos em várias páginas.

## Prevenção e recuperação de erros

> A interface deve ajudar a pessoa a acertar de primeira e, quando houver erro, mostrar exatamente onde está o problema e como corrigi-lo.

- [ ] **Identificação de erro**: quando um erro de entrada for detectado automaticamente, identificá-lo e descrevê-lo em texto.
- [ ] **Rótulos e instruções**: fornecer etiquetas ou instruções claras sempre que o conteúdo exigir entrada de dados.
- [ ] **Sugestão de correção**: apresentar sugestões conhecidas para corrigir o erro, exceto quando isso comprometer a segurança.
- [ ] **Transações críticas**: em ações jurídicas, financeiras ou com dados importantes, permitir reversão, conferência ou confirmação antes da finalização.
- [ ] **Ajuda contextual**: disponibilizar ajuda sensível ao contexto da tarefa.
- [ ] **Revisão em todos os envios**: estender mecanismos de revisão e confirmação para páginas que exigem envio de informações.
- [ ] **Evitar entrada redundante**: preencher automaticamente ou oferecer seleção de informações já fornecidas no mesmo processo.

## Autenticação acessível

> Autenticar não deve exigir apenas memória, cálculo ou resolução de desafio cognitivo. A segurança precisa funcionar com estratégias de apoio, como gerenciadores de senha.

- [ ] **Autenticação mínima**: não exigir testes de função cognitiva como único método de autenticação, salvo quando houver alternativa ou assistência, como copiar/colar ou gerenciador de senhas.
- [ ] **Autenticação avançada**: aplicar regra mais rigorosa, eliminando exceções como reconhecimento de objetos ou conteúdo pessoal fornecido pela pessoa usuária.
