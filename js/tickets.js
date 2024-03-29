//  Tickets:---------------->>>>>>>>>>>>

(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
    } else {
        loadScript();
    }
    } else {
    loadScript();
    }

    function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
        domain: 'indigemshow.myshopify.com',
        storefrontAccessToken: 'b358b5d355151db7e2dfbfc18333618a',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
        id: [3693610795087],
        node: document.getElementById('product-component-ac6ec7645e8'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
            "product": {
                "buttonDestination": "checkout",
                "variantId": "all",
                "width": "240px",
                "contents": {
                "img": false,
                "imgWithCarousel": false,
                "title": false,
                "variantTitle": false,
                "price": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false
                },
                "text": {
                "button": "BUY NOW"
                },
                "styles": {
                "product": {
                    "text-align": "left",
                    "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px"
                    }
                },
                "title": {
                    "font-size": "26px"
                },
                "price": {
                    "font-size": "18px"
                },
                "compareAt": {
                    "font-size": "15px"
                }
                }
            },
            "cart": {
                "contents": {
                "button": true
                },
                "styles": {
                "footer": {
                    "background-color": "#ffffff"
                }
                }
            },
            "modalProduct": {
                "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": true,
                "button": false,
                "quantity": false
                },
                "styles": {
                "product": {
                    "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                    }
                }
                }
            },
            "productSet": {
                "styles": {
                "products": {
                    "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                    }
                }
                }
            }
            }
        });
    });
    }
})();