# Tema Aurum WordPress

Um tema premium para clínicas de estética com design elegante e funcionalidades avançadas.

## Características

- ✨ Design premium com paleta dourada elegante
- 📱 Totalmente responsivo
- ⚡ Otimizado para performance
- 🛡️ Seguro e LGPD compliant
- 🎨 Customizável via WordPress Customizer
- 📧 Formulário de contato integrado
- 🔍 Otimizado para SEO

## Instalação

1. Faça o download dos arquivos do tema
2. Compacte todos os arquivos em um arquivo .zip
3. No WordPress, vá em Aparência > Temas > Adicionar Novo
4. Clique em "Fazer upload do tema" e selecione o arquivo .zip
5. Ative o tema

## Configuração

### Menus
- Vá em Aparência > Menus
- Crie um menu e adicione as páginas desejadas
- Atribua ao local "Menu Principal"

### Customização
- Vá em Aparência > Personalizar
- Configure as cores e informações de contato
- Adicione seu logo

### Páginas Recomendadas
Crie as seguintes páginas para melhor funcionamento:
- Início (defina como página inicial)
- Sobre
- Serviços
- Blog
- Contato

## Shortcodes Disponíveis

### Formulário de Contato
```
[contact_form]
```

Parâmetros opcionais:
- `email`: Email de destino (padrão: admin_email)
- `subject`: Assunto do email

Exemplo:
```
[contact_form email="contato@suaclinica.com" subject="Contato Site"]
```

## Estrutura de Arquivos

```
aurum-theme/
├── style.css          # Estilos principais
├── index.php          # Template principal
├── header.php         # Cabeçalho
├── footer.php         # Rodapé
├── functions.php      # Funções do tema
├── single.php         # Posts individuais
├── page.php           # Páginas
├── archive.php        # Arquivo de posts
├── 404.php            # Página de erro
├── searchform.php     # Formulário de busca
└── README.md          # Este arquivo
```

## Customização Avançada

### Cores
Edite as variáveis CSS no início do arquivo `style.css`:

```css
:root {
  --night-graphite: hsl(210, 15%, 8%);
  --ivory-glow: hsl(45, 40%, 95%);
  --gold-core: hsl(45, 90%, 65%);
  --gold-light: hsl(45, 85%, 75%);
}
```

### Fontes
O tema usa Google Fonts (DM Serif Display e Poppins). Para alterar:

1. Modifique o link no `header.php`
2. Atualize as variáveis `--font-heading` e `--font-body` no `style.css`

## Suporte

Para suporte técnico ou customizações, entre em contato através do formulário de contato do site.

## Changelog

### v1.0
- Lançamento inicial
- Design responsivo
- Formulário de contato
- Customizador WordPress
- Otimizações SEO básicas

## Licença

Este tema foi desenvolvido especificamente para clínicas de estética premium. Todos os direitos reservados.