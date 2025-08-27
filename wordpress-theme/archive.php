<?php get_header(); ?>

<main class="main-content">
    <div class="content-section">
        <header class="archive-header">
            <h1 class="section-title">
                <?php
                if (is_category()) {
                    echo 'Categoria: ' . single_cat_title('', false);
                } elseif (is_tag()) {
                    echo 'Tag: ' . single_tag_title('', false);
                } elseif (is_author()) {
                    echo 'Autor: ' . get_the_author();
                } elseif (is_date()) {
                    echo 'Arquivo por Data';
                } else {
                    echo 'Arquivo';
                }
                ?>
            </h1>
            
            <?php if (is_category() && category_description()) : ?>
                <p class="section-subtitle"><?php echo category_description(); ?></p>
            <?php endif; ?>
        </header>

        <?php if (have_posts()) : ?>
            <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-top: 3rem;">
                <?php while (have_posts()) : the_post(); ?>
                    <article <?php post_class('card'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail" style="margin-bottom: 1rem;">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem;')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="post-meta" style="font-size: 0.9rem; color: rgba(248, 249, 250, 0.6); margin-bottom: 0.5rem;">
                            <?php the_date(); ?> • Por <?php the_author(); ?>
                        </div>
                        
                        <h2 class="card-title" style="font-size: 1.25rem; margin-bottom: 1rem;">
                            <a href="<?php the_permalink(); ?>" style="color: var(--ivory-glow); text-decoration: none;">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="card-description">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="margin-top: 1rem; display: inline-block;">
                            Ler Mais →
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>

            <!-- Paginação -->
            <div style="text-align: center; margin-top: 3rem;">
                <?php
                the_posts_pagination(array(
                    'prev_text' => '← Anterior',
                    'next_text' => 'Próxima →',
                ));
                ?>
            </div>

        <?php else : ?>
            <div class="no-posts" style="text-align: center; padding: 3rem;">
                <h2 style="color: var(--gold-core); margin-bottom: 1rem;">Nenhum post encontrado</h2>
                <p style="color: rgba(248, 249, 250, 0.8);">
                    Não há posts para exibir nesta categoria no momento.
                </p>
                <a href="<?php echo home_url(); ?>" class="btn btn-primary" style="margin-top: 1rem;">
                    Voltar ao Início
                </a>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>