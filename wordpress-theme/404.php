<?php get_header(); ?>

<main class="main-content">
    <div class="post-content" style="text-align: center; padding: 4rem 2rem;">
        <h1 class="post-title" style="font-size: 4rem; color: var(--gold-core); margin-bottom: 1rem;">404</h1>
        <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem; color: var(--ivory-glow);">
            Página Não Encontrada
        </h2>
        <p style="color: rgba(248, 249, 250, 0.8); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
            Desculpe, mas a página que você está procurando não foi encontrada. 
            Ela pode ter sido movida, removida ou você digitou o endereço incorretamente.
        </p>
        
        <div style="margin-bottom: 3rem;">
            <a href="<?php echo home_url(); ?>" class="btn btn-primary">
                Voltar ao Início
            </a>
        </div>
        
        <div style="max-width: 400px; margin: 0 auto;">
            <h3 style="color: var(--gold-core); margin-bottom: 1rem;">Ou tente pesquisar:</h3>
            <?php get_search_form(); ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>