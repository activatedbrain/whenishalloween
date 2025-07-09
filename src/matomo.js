export function initMatomo() {
    if (import.meta.env.VITE_ENABLE_MATOMO === 'true') {
        const _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function () {
            const u = import.meta.env.VITE_MATOMO_URL;
            _paq.push(['setTrackerUrl', u + 'matomo.php']);
            _paq.push(['setSiteId', import.meta.env.VITE_MATOMO_SITE_ID]);
            const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
        })();
    }
}