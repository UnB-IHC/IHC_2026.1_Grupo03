# Desenvolvimento e testes

Esta etapa verifica se a acessibilidade foi considerada desde o planejamento técnico, e não apenas como correção final. Em IHC, isso reduz barreiras de uso, evita retrabalho e amplia a participação de pessoas com diferentes capacidades, contextos e tecnologias de acesso.

<div class="checklist-progress" data-checklist-progress>
  <div>
    <strong>Progresso desta página</strong>
    <span data-checklist-count>0/0 itens concluídos</span>
  </div>
  <progress max="100" value="0" data-checklist-bar aria-label="Progresso do checklist desta página"></progress>
  <button type="button" data-checklist-reset>Limpar progresso desta página</button>
</div>

!!! info "Como usar"
    Leia cada critério, avalie a interface com evidências observáveis e marque apenas quando a condição estiver atendida. O progresso fica salvo apenas neste navegador.

## Escopo da avaliação

> Antes de avaliar uma interface, a equipe precisa saber exatamente quais telas, fluxos, tecnologias e usuários estão dentro do escopo. Isso favorece consistência metodológica e rastreabilidade da análise.

- [ ] **Escopo de páginas e fluxos**: definir quais páginas, telas, rotas ou URLs fazem parte da avaliação de acessibilidade.
- [ ] **Áreas restritas e relacionadas**: informar se áreas logadas, subdomínios, páginas de suporte ou fluxos externos estão incluídos na avaliação.
- [ ] **Versão da WCAG**: registrar a versão usada como referência, por exemplo WCAG 2.2.
- [ ] **Nível de conformidade**: registrar o nível buscado ou atingido: A, AA ou AAA.
- [ ] **Tecnologias usadas**: listar HTML, CSS, JavaScript, ARIA, frameworks, bibliotecas e componentes relevantes.
- [ ] **Ambiente de teste**: registrar navegadores, dispositivos, sistemas operacionais e tecnologias assistivas usados nos testes.

## Desenvolvimento inclusivo

> A interface deve ser construída para diferentes formas de percepção, compreensão e operação. Em IHC, isso significa projetar para diversidade humana desde a implementação.

- [ ] **Letramento digital**: considerar pessoas com diferentes níveis de familiaridade com tecnologia, evitando fluxos que dependam de conhecimento técnico prévio.
- [ ] **Ordem de apresentação**: validar se a sequência visual, textual e de foco acompanha uma lógica compreensível para a tarefa.
- [ ] **Semântica HTML**: usar tags corretas para seu propósito estrutural e interativo; por exemplo, `<button>` para ações e `<a>` para navegação.
- [ ] **Tabelas e formulários**: associar células aos seus cabeçalhos e agrupar opções de formulários relacionadas.
- [ ] **Ícones e regiões**: garantir que o propósito de ícones, landmarks e regiões seja identificável no código.
- [ ] **Conteúdo via CSS**: não usar CSS para inserir informação essencial, pois tecnologias assistivas podem não anunciar esse conteúdo.
- [ ] **Elementos ocultos**: tomar cuidado com `display: none` e `visibility: hidden`, pois esses recursos também escondem elementos de leitores de tela.
- [ ] **Ampliação de conteúdo**: permitir redimensionamento de até 200% sem perda de funcionalidade ou sobreposição de elementos.

## Testes com pessoas e dispositivos

> Testes automáticos ajudam, mas não substituem observação de uso. A avaliação deve incluir interação real, especialmente em cenários móveis e com tecnologias assistivas.

- [ ] **Testes manuais obrigatórios**: testar com pessoas com deficiência visual, auditiva, motora ou outras restrições relevantes ao contexto.
- [ ] **Responsividade móvel**: verificar se a interface permanece utilizável em diferentes tamanhos de tela.
- [ ] **Gestos**: garantir que interações por gesto tenham alternativa simples e não dependam de movimentos complexos.
- [ ] **Acionamento por ponteiro**: avaliar se botões, links e controles são fáceis de acionar com mouse, toque, caneta ou tecnologia assistiva.
- [ ] **Telas sensíveis ao toque**: conferir se os alvos de toque têm tamanho, espaçamento e feedback adequados.
- [ ] **Largura mínima de leitura**: garantir que o conteúdo seja utilizável em largura equivalente a 320 CSS pixels sem exigir rolagem horizontal para leitura (WCAG nível AA).
