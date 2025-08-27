<?php get_header(); ?>

<main class="main-content">
    <div class="post-content">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="post-header">
                    <h1 class="post-title"><?php the_title(); ?></h1>
                    <div class="post-meta">
                        <span>Por <?php the_author(); ?></span>
                        <span>em <?php the_date(); ?></span>
                        <?php if (has_category()) : ?>
                            <span>Categoria: <?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="post-content-body">
                    <?php the_content(); ?>
                </div>

                <?php if (has_tag()) : ?>
                    <div class="post-tags">
                        <strong>Tags:</strong> <?php the_tags('', ', ', ''); ?>
                    </div>
                <?php endif; ?>
            </article>

            <nav class="post-navigation">
                <div class="nav-previous">
                    <?php previous_post_link('%link', '← %title'); ?>
                </div>
                <div class="nav-next">
                    <?php next_post_link('%link', '%title →'); ?>
                </div>
            </nav>

            <?php
            // Comentários
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
            ?>

        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>