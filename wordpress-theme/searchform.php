<form role="search" method="get" class="search-form" action="<?php echo home_url('/'); ?>">
    <div style="display: flex; gap: 0.5rem; max-width: 400px; margin: 0 auto;">
        <input 
            type="search" 
            class="search-field" 
            placeholder="Pesquisar..." 
            value="<?php echo get_search_query(); ?>" 
            name="s" 
            style="
                flex: 1;
                padding: 0.75rem 1rem;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 0.5rem;
                background: rgba(255, 255, 255, 0.05);
                color: var(--ivory-glow);
                font-size: 1rem;
            "
        />
        <button 
            type="submit" 
            class="search-submit btn btn-primary"
            style="padding: 0.75rem 1.5rem;"
        >
            Buscar
        </button>
    </div>
</form>