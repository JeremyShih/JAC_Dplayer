const defaultApiBackend = require('./api.js');

module.exports = (option) => {
    const isMobile = /mobile/i.test(window.navigator.userAgent);
    // compatibility: some mobile browsers don't suppose autoplay
    if (isMobile) {
        option.autoplay = false;
    }
    option.lang.toLowerCase();

    // default options
    const defaultOption = {
        element: document.getElementsByClassName('dplayer')[0],
        autoplay: false,
        theme: '#b7daff',
        loop: false,
        lang: (navigator.language || navigator.browserLanguage).toLowerCase().indexOf('zh') !== -1 ? 'zh-cn' : 'en-us',
        screenshot: false,
        hotkey: true,
        preload: 'auto',
        apiBackend: defaultApiBackend,
        contextmenu: [
            {
                text: '關於 DPlayer 播放器',
                link: 'https://github.com/DIYgod/DPlayer'
            }
        ]
    };
    for (const defaultKey in defaultOption) {
        if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
            option[defaultKey] = defaultOption[defaultKey];
        }
    }
    if (Object.prototype.toString.call(option.video.url) !== '[object Array]') {
        option.video.url = [option.video.url];
    }
    if (option.video && !option.video.hasOwnProperty('type')) {
        option.video.type = 'auto';
    }
    if (option.danmaku && !option.danmaku.hasOwnProperty('user')) {
        option.danmaku.user = 'DIYgod';
    }

    if (option.video.quality) {
        option.video.url = [option.video.quality[option.video.defaultQuality].url];
    }

    return option;
};