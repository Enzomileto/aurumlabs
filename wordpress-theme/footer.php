    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-logo">
                <?php bloginfo('name'); ?>
            </div>
            
            <p class="footer-description">
                <?php bloginfo('description'); ?>
            </p>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
                <p>LGPD Compliant • Dados Seguros • Suporte 24/7</p>
            </div>
        </div>
    </footer>

    <script>
        // FAQ Accordion
        document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector('span');
                    
                    if (answer.style.display === 'block') {
                        answer.style.display = 'none';
                        icon.textContent = '+';
                    } else {
                        // Fechar outras respostas
                        faqQuestions.forEach(otherQuestion => {
                            const otherAnswer = otherQuestion.nextElementSibling;
                            const otherIcon = otherQuestion.querySelector('span');
                            otherAnswer.style.display = 'none';
                            otherIcon.textContent = '+';
                        });
                        
                        answer.style.display = 'block';
                        icon.textContent = '−';
                    }
                });
            });
            
            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    </script>

    <?php wp_footer(); ?>
</body>
</html>