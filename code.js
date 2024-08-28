(function() {
    const CONFIG = {
        targetSelector: '.cover__header-content-title',
        widgetId: 'google_translate_element',
        pageLanguage: 'en',
        targetLanguage: 'es',
        autoTranslate: false,
        cookieName: 'googtrans',
        scriptUrl: 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    };

    class TranslationWidget {
        constructor(config) {
            this.config = config;
            this.init();
        }

        init() {
            this.createObserver();
            this.checkForTargetElement();
            window.googleTranslateElementInit = this.initializeWidget.bind(this);
        }

        createObserver() {
            this.observer = new MutationObserver(this.checkForTargetElement.bind(this));
            this.observer.observe(document.body, { childList: true, subtree: true });
        }

        checkForTargetElement() {
            const targetElement = document.querySelector(this.config.targetSelector);
            const widgetExists = document.getElementById(this.config.widgetId);

            if (targetElement && !widgetExists) {
                this.createWidget();
            }
        }

        createWidget() {
            const translateDiv = document.createElement('div');
            translateDiv.id = this.config.widgetId;
            
            const targetDiv = document.querySelector(this.config.targetSelector);
            if (!targetDiv) {
                console.warn('Target element for translation widget not found');
                return;
            }
            
            targetDiv.parentNode.insertBefore(translateDiv, targetDiv.nextSibling);
            this.loadScript();
        }

        loadScript() {
            if (document.querySelector(`script[src*="translate.google.com/translate_a/element.js"]`)) {
                this.initializeWidget();
                return;
            }

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.config.scriptUrl;
            script.onerror = () => console.error('Failed to load Google Translate script');
            document.body.appendChild(script);
        }

        initializeWidget() {
            if (typeof google === 'undefined' || typeof google.translate === 'undefined') {
                console.error('Google Translate not available');
                return;
            }

            new google.translate.TranslateElement({
                pageLanguage: this.config.pageLanguage,
                includedLanguages: this.config.targetLanguage,
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                autoDisplay: false
            }, this.config.widgetId);

            this.applyCustomStyles();
            this.handleAutoTranslation();
        }

        applyCustomStyles() {
            const style = document.createElement('style');
            style.textContent = `
                iframe[id=":1.container"] { display: none !important; }
                body { top: 0 !important; }
                .goog-logo-link { display: none !important; }
                .goog-te-gadget { color: transparent !important; }
                .VIpgJd-ZVi9od-l4eHX-hSRGPd { display: none; }
                .goog-te-combo {
                    background-color: #fff;
                    color: #000000;
                    border: 1px solid transparent;
                    box-shadow: 0 4px 4px rgba(0,0,0,.1);
                    border-radius: 3px;
                    padding: 6px 8px;
                    transition: transform .3s;
                }
                .skiptranslate.goog-te-gadget { padding-left: 60px; padding-bottom: 20px; }
                #goog-gt-tt #goog-gt-vt { display: none !important; }
                .VIpgJd-ZVi9od-aZ2wEe-wOHMyf.VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc { display: none !important; }
            `;
            document.head.appendChild(style);
        }

        handleAutoTranslation() {
            if (this.config.autoTranslate) {
                const cookieValue = this.getCookie(this.config.cookieName);
                if (!cookieValue || !cookieValue.endsWith(this.config.targetLanguage)) {
                    this.translatePage();
                }
            }
        }

        translatePage() {
            if (window.google && window.google.translate) {
                const selectElement = document.querySelector('.goog-te-combo');
                if (selectElement) {
                    selectElement.value = this.config.targetLanguage;
                    selectElement.dispatchEvent(new Event('change'));
                }
            }
        }

        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
    }

    new TranslationWidget(CONFIG);
})();