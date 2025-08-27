<?php
// Tema Aurum - Functions.php

// Suporte a recursos do tema
function aurum_theme_setup() {
    // Suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a logos customizados
    add_theme_support('custom-logo');
    
    // Suporte a menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'aurum'),
    ));
    
    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'aurum_theme_setup');

// Enfileirar estilos e scripts
function aurum_scripts() {
    wp_enqueue_style('aurum-style', get_stylesheet_uri(), array(), '1.0');
    
    // Adicionar jQuery se necessário
    wp_enqueue_script('jquery');
    
    // Font Awesome (opcional)
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'aurum_scripts');

// Customizer
function aurum_customize_register($wp_customize) {
    // Seção de cores
    $wp_customize->add_section('aurum_colors', array(
        'title' => __('Cores do Tema', 'aurum'),
        'priority' => 30,
    ));
    
    // Cor primária
    $wp_customize->add_setting('primary_color', array(
        'default' => '#FFC107',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label' => __('Cor Primária (Dourado)', 'aurum'),
        'section' => 'aurum_colors',
    )));
    
    // Seção de contato
    $wp_customize->add_section('aurum_contact', array(
        'title' => __('Informações de Contato', 'aurum'),
        'priority' => 35,
    ));
    
    // WhatsApp
    $wp_customize->add_setting('whatsapp_number', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('whatsapp_number', array(
        'label' => __('Número do WhatsApp', 'aurum'),
        'section' => 'aurum_contact',
        'type' => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('contact_email', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => __('Email de Contato', 'aurum'),
        'section' => 'aurum_contact',
        'type' => 'email',
    ));
}
add_action('customize_register', 'aurum_customize_register');

// Widget areas
function aurum_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar Principal', 'aurum'),
        'id' => 'sidebar-1',
        'description' => __('Adicione widgets aqui.', 'aurum'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
}
add_action('widgets_init', 'aurum_widgets_init');

// Customizar o excerpt
function aurum_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'aurum_excerpt_length', 999);

function aurum_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'aurum_excerpt_more');

// Adicionar classes CSS personalizadas ao body
function aurum_body_classes($classes) {
    if (!is_active_sidebar('sidebar-1')) {
        $classes[] = 'no-sidebar';
    }
    return $classes;
}
add_filter('body_class', 'aurum_body_classes');

// Otimizações de SEO básicas
function aurum_add_meta_tags() {
    if (is_home() || is_front_page()) {
        echo '<meta name="keywords" content="clínica estética, IA, agentes inteligentes, conversões, atendimento automatizado">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:url" content="' . home_url() . '">' . "\n";
        echo '<meta property="og:title" content="' . get_bloginfo('name') . ' - ' . get_bloginfo('description') . '">' . "\n";
        echo '<meta property="og:description" content="' . get_bloginfo('description') . '">' . "\n";
    }
}
add_action('wp_head', 'aurum_add_meta_tags');

// Remover versão do WordPress
function aurum_remove_version() {
    return '';
}
add_filter('the_generator', 'aurum_remove_version');

// Configurações de segurança básicas
function aurum_security_headers() {
    header('X-Frame-Options: SAMEORIGIN');
    header('X-Content-Type-Options: nosniff');
    header('X-XSS-Protection: 1; mode=block');
}
add_action('send_headers', 'aurum_security_headers');

// Formulário de contato shortcode
function aurum_contact_form_shortcode($atts) {
    $atts = shortcode_atts(array(
        'email' => get_option('admin_email'),
        'subject' => 'Contato do Site'
    ), $atts);
    
    ob_start();
    ?>
    <form class="aurum-contact-form" method="post" action="<?php echo admin_url('admin-post.php'); ?>">
        <input type="hidden" name="action" value="aurum_contact_form">
        <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="phone">Telefone:</label>
            <input type="tel" name="phone">
        </div>
        <div class="form-group">
            <label for="message">Mensagem:</label>
            <textarea name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
    </form>
    <?php
    return ob_get_clean();
}
add_shortcode('contact_form', 'aurum_contact_form_shortcode');

// Processar formulário de contato
function aurum_handle_contact_form() {
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $phone = sanitize_text_field($_POST['phone']);
        $message = sanitize_textarea_field($_POST['message']);
        
        $to = get_option('admin_email');
        $subject = 'Novo contato do site: ' . get_bloginfo('name');
        $body = "Nome: $name\nEmail: $email\nTelefone: $phone\n\nMensagem:\n$message";
        $headers = array('From: ' . $name . ' <' . $email . '>');
        
        wp_mail($to, $subject, $body, $headers);
        
        wp_redirect(home_url('?contact=success'));
        exit;
    }
}
add_action('admin_post_aurum_contact_form', 'aurum_handle_contact_form');
add_action('admin_post_nopriv_aurum_contact_form', 'aurum_handle_contact_form');
?>