import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    // Simple Analytics script logic
    (function() {
        var saScript = document.createElement('script');
        saScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
        saScript.async = true;
        saScript.defer = true;
        document.head.appendChild(saScript);
    })();

    // Fallback for NoScript
    var image = document.createElement('img');
    image.src = 'https://queue.simpleanalyticscdn.com/noscript.gif';
    image.alt = '';
    image.referrerPolicy = 'no-referrer-when-downgrade';
    document.body.appendChild(image);
}
