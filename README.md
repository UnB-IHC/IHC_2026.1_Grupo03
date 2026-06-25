# AcessWeb

<div align="center">
  <img
    src="docs/assets/images/acessweb-logo.svg"
    alt="Logo do AcessWeb: letra A estilizada com um símbolo de verificação"
    width="140"
  >
</div>

## Sobre o projeto

O **AcessWeb** é um site de checklist interativo de acessibilidade digital, desenvolvido pelo Grupo 03 da disciplina de **Interação Humano-Computador** do curso de Engenharia de Software da Universidade de Brasília (UnB).

O checklist foi organizado por categorias para apoiar avaliações de interfaces web com base em boas práticas de IHC, critérios WCAG, referências ABNT e heurísticas de Nielsen. Cada página permite marcar os itens avaliados e acompanhar o progresso localmente no navegador.

## Informações acadêmicas

| Informação | Descrição |
| --- | --- |
| Disciplina | Interação Humano-Computador |
| Curso | Engenharia de Software |
| Instituição | Universidade de Brasília (UnB) |
| Professora | Rejane Figueiredo |
| Semestre | 1.2026 |
| Equipe | Grupo 03 |

## Tecnologias

- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://github.com/features/actions)

## Executando localmente

É necessário ter o Python instalado. Na raiz do repositório, execute:

```bash
python -m pip install mkdocs-material
python -m mkdocs serve
```

A documentação ficará disponível em:

```text
http://127.0.0.1:8000/IHC_2026.1_Grupo03/
```

Para validar a documentação antes de publicar:

```bash
python -m mkdocs build --strict
```

## Publicação

O site é publicado automaticamente no GitHub Pages após alterações serem enviadas para a branch `main`.

- [Repositório no GitHub](https://github.com/UnB-IHC/IHC_2026.1_Grupo03)
- [Site AcessWeb](https://unb-ihc.github.io/IHC_2026.1_Grupo03/)

## Integrantes

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ojplc">
        <img src="https://github.com/ojplc.png" width="100" alt="Foto de perfil de João Pedro"><br>
        <sub><strong>João Pedro</strong></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jsalless">
        <img src="https://github.com/jsalless.png" width="100" alt="Foto de perfil de Johnnatan Salles"><br>
        <sub><strong>Johnnatan Salles</strong></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/cunha-luiss">
        <img src="https://github.com/cunha-luiss.png" width="100" alt="Foto de perfil de Luís Felipe Parreira"><br>
        <sub><strong>Luís Felipe Parreira</strong></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/andrehsb">
        <img src="https://github.com/andrehsb.png" width="100" alt="Foto de perfil de André Henrique"><br>
        <sub><strong>André Henrique</strong></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/giovannafg">
        <img src="https://github.com/giovannafg.png" width="100" alt="Foto de perfil de Giovanna Felipe"><br>
        <sub><strong>Giovanna Felipe</strong></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/renatoyx">
        <img src="https://github.com/renatoyx.png" width="100" alt="Foto de perfil de Renato Gameiro"><br>
        <sub><strong>Renato Gameiro</strong></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jj-viana">
        <img src="https://github.com/jj-viana.png" width="100" alt="Foto de perfil de Joaquim José"><br>
        <sub><strong>Joaquim José</strong></sub>
      </a>
    </td>
  </tr>
</table>

## Licença

Este projeto está disponível sob os termos da [Licença MIT](LICENSE.md).
