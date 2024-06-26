export default () => {
    const animateTypography = function(node, settings) {
        let stringIndex = 0;
        node.classList.add('accent-typography');
        node.childNodes.forEach(child => {
            if (child.nodeType === 3) {
                const string = document.createElement('span');
                const symbols = child.nodeValue.split('');
                symbols.forEach((symbol, index) => {
                    const span = document.createElement('span');
                    span.innerHTML = symbol;
                    if (settings) {
                        Object.keys(settings).forEach(setting => {
                            span.style[setting] = settings[setting][stringIndex][index];
                        });
                    }
                    string.append(span);
                });
                child.replaceWith(string);
                stringIndex++;
            }
        });
    }

    const accentTypographyCollection = {
        top: [
            {
                selector: '.intro__title',
                settings: {
                    animationDelay: [
                        ['0.3s', '0.1s', '0', '0.1s', '0.2s', '0.1s', '0', '0.4s', '0.2s', '0', '0.2s', '0'], 
                        ['0.8s', '0.9s', '0.7s', '0.5s', '0.8s', '0.6s']
                    ]
                }
            },
            {
                selector: '.intro__date',
                settings: {
                    animationDelay: [
                        ['0.3s', '0.2s', '0', '0', '0', '0.4s', '0.1s', '0.1s', '0.2s', '0.5s', '0', '0.2s', '0', '0', '0.4s', '0.3s', '0.1s']
                    ]
                }
            }
        ],
        story: [
            {
                selector: '.slider__item-title',
                settings: {
                    animationDelay: [
                        ['0.2s', '0.1s', '0', '0.1s', '0.2s', '0.1s', '0']
                    ]
                }
            }
        ],
        prizes: [
            {
                selector: '.prizes__title',
                settings: {
                    animationDelay: [
                        ['0.2s', '0.1s', '0', '0.1s', '0.2s']
                    ]
                }
            }
        ],
        rules: [
            {
                selector: '.rules__title',
                settings: {
                    animationDelay: [
                        ['0.4s', '0.2s', '0.1s', '0', '0.3s', '0.2s', '0']
                    ]
                }
            }
        ],
        game: [
            {
                selector: '.game__title',
                settings: {
                    animationDelay: [
                        ['0.2s', '0.1s', '0', '0.1s']
                    ]
                }
            }
        ]
    };

    document.body.addEventListener('screenChanged', function (event) {
        console.log(event);
        const screenId = event.detail.screenName;
        if (accentTypographyCollection[screenId]) {
            accentTypographyCollection[screenId].forEach(item => {
                let nodes = event.detail.screenElement.querySelectorAll(item.selector);
                nodes.forEach(node => {
                    animateTypography(node, item.settings);
                });
            });
        }
    });
}