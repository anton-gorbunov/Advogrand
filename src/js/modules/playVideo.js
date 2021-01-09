const playVideo = (triggers,overlay) => {
    const btns = document.querySelectorAll(triggers);
          overlay = document.querySelector(overlay);
          close = overlay.querySelector('.modal__close');
    let path;
    let player;

    function bindTriggers() {
        btns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                let videoUrl = btn.querySelector('.comments-block__link');
                event.preventDefault();
                if (document.querySelector('iframe#frame')) {
                    overlay.style.display = 'block';
                    if (path !== videoUrl.getAttribute('data-url')){
                        path = videoUrl.getAttribute('data-url');
                        player.loadVideoById({videoId: path});
                    }
                } else {
                    path = videoUrl.getAttribute('data-url');
                    createPlayer(path);
                }
            });
        });
    }

    function bindCloseBtn() {
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            player.stopVideo();
        });
    }

    function createPlayer(url) {
        player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });
        overlay.style.display = 'block';
    }

    function init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        bindTriggers();
        bindCloseBtn();
    }

    init();

};

export default playVideo;