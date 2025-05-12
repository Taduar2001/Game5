pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        const wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        const splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);

        const gif = document.createElement('img');
        gif.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2hmdmYwM2J6bmNkeTJheWlvZ2gxbnppbXVtOGFic3N4eGVkN214eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j5P0DQIOf4PonLi55G/giphy.gif'; // ← Заменить на свой gif
        gif.classList.add('loading-gif');

        splash.appendChild(gif);

        // Обновим высоту splash на размер окна
        function resizeSplash() {
            splash.style.height = `${window.innerHeight}px`;
            splash.style.width = `${window.innerWidth}px`;
        }

        window.addEventListener('resize', resizeSplash);
        resizeSplash(); // вызвать сразу
    };

    var hideSplash = function () {
        const splash = document.getElementById('application-splash-wrapper');
        if (splash && splash.parentElement) {
            splash.parentElement.removeChild(splash);
        }
    };

    var createCss = function () {
        const css = `
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }

        #application-splash-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #154472;
            z-index: 9999;
        }

        #application-splash {
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
        }

        .loading-gif {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        `;
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    };

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });

    app.on('start', hideSplash);
});
