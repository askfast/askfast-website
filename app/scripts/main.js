'use strict';

//  Google Analytics: change UA-XXXXX-X to be your site's ID.
(function (i, s, o, g, r, a, m)
{
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function ()
        {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-66075857-1', 'ask-fast.com');
ga('send', 'pageview');


/*COOKIE MESSAGE HIDE*/

var isShown = localStorage.getItem('cookieMessageShown');

if (!isShown)
{
    $('#cookieMessage').show();
}

$("#closeCookie").click(function ()
{
    $('#cookieMessage').hide();
    localStorage.setItem('cookieMessageShown', true);
});


/* global angular */

angular.module('AskFast', ['ngRoute'])
    .constant('locals', localizationFiles)
    .config(['$locationProvider', function ($locationProvider)
    {
        $locationProvider.html5Mode(true);
    }])
    .config(['$routeProvider', function ($routeProvider)
    {
        $routeProvider
            .when('/', {
                redirectTo: '/index.html'
            })
            .when('/index.html', {
                controller: 'IndexController',
                templateUrl: '/templates/index.html'
            })
            .when('/pricing.html', {
                controller: 'PricingController',
                templateUrl: '/templates/pricing.html'
            })
            .when('/developers.html', {
                controller: 'DevelopersController',
                templateUrl: '/templates/developers.html'
            })
            .when('/usecases/', {
                controller: 'UseCasesController',
                templateUrl: '/templates/usecases/index.html'
            })
            .when('/usecases/:subsection', {
                templateUrl: function (params)
                {
                    return '/templates/usecases/' + params.subsection;
                }
            })
            .otherwise('/index.html');
    }])
    .run(['$rootScope', '$location', '$http', 'locals', '$anchorScroll', '$window', function ($rootScope, $location, $http, locals, $anchorScroll, $window)
    {

        $rootScope.anchorScroll = function ()
        {
            $anchorScroll();
        };

        if (!localStorage.getItem('selectedLanguage'))
        {
            localStorage.setItem('selectedLanguage', 'nl');
        }

        $rootScope.showLangMenu = false;

        $rootScope.languages = ['en', 'nl'];

        var toggled = true;

        $rootScope.changeLang = function (lang)
        {

            $(".languageToggle li a").html(lang);

            if ($rootScope.lang == lang)
            {
                $('#languageMenu')
                    .removeClass('rotateInDownLeft')
                    .addClass('animated rotateOutUpLeft');
            }

            $rootScope.ui = locals[lang];

            $rootScope.lang = lang;

            localStorage.setItem('selectedLanguage', lang);

            toggled = !toggled;

            toggleOut();
        };

        $rootScope.changeLang(localStorage.getItem('selectedLanguage'));

        $rootScope.isLinkActive = function isLinkActive(route)
        {
            if ($location.path().match(route))
            {
                return true;
            }
            return false;
        }

        $rootScope.sendMail = function (contactForm)
        {
            var errorColor = "#e10b7d";
            var errorFontColor = "white";
            var rightColor = "white";
            var rightFontColor = "black";
            var sendMailURL = "../mail/sendMail.php";

            if (! contactForm)
            {
                alert($rootScope.ui.contactForm.fillInForm);
                $("#contactForm input, #contactForm textarea")
                    .css("background-color" ,errorColor)
                    .css("color" ,errorFontColor);
            }
            else
            {
                $("#contactForm input, #contactForm textarea")
                    .css("background-color" ,rightColor)
                    .css("color" ,rightFontColor);

                if (! contactForm.name)
                {
                    alert($rootScope.ui.contactForm.fillInName);
                    $("#contactName")
                        .css("background-color" ,errorColor)
                        .css("color" ,errorFontColor);
                }
                else
                {
                    $("#contactName")
                        .css("background-color" ,rightColor)
                        .css("color" ,rightFontColor);
                }

                if (! contactForm.emailAddress)
                {
                    alert($rootScope.ui.contactForm.fillInEmail);
                    $("#contactEmail")
                        .css("background-color" ,errorColor)
                        .css("color" ,errorFontColor);
                }
                else
                {
                    $("#contactEmail")
                        .css("background-color" ,rightColor)
                        .css("color" ,rightFontColor);
                }

                if (! contactForm.message)
                {
                    alert($rootScope.ui.contactForm.fillInMessage);
                    $("#message")
                        .css("background-color" ,errorColor)
                        .css("color" ,errorFontColor);
                }
                else
                {
                    $("#message")
                        .css("background-color" ,rightColor)
                        .css("color" ,rightFontColor);
                }
            }

            if(contactForm.name &&
                contactForm.emailAddress &&
                contactForm.message
            )
            {
                $http.post(sendMailURL, contactForm)
                    .then(function(response) {
                        alert($rootScope.ui.contactForm.messageSent);
                    }, function(response) {
                        alert($rootScope.ui.contactForm.messageNotSent);
                    });
            }
        };


        $(".languageToggle li a").click(function ()
        {
            if (toggled)
            {
                toggleOut();
            }
            else
            {
                $('#languageMenu')
                    .removeClass('hide rotateOutUpLeft')
                    .addClass('animated rotateInDownLeft');
            }

            toggled = !toggled;
        });

        function toggleOut()
        {
            $('#languageMenu')
                .removeClass('rotateInDownLeft')
                .addClass('animated rotateOutUpLeft');
        }

        angular.element('#menu .desktopView ul').css({'display': 'block'});
        // angular.element('#secondOne').css({'display': 'block'});

    }])

    .controller('IndexController', [function ()
    {
        //Animate communication channels
        $(".comIcon").hover(function ()
            {
                $(this).addClass('animated pulse');
            },
            function ()
            {
                var self = this;
                setTimeout(function ()
                {
                    $(self).removeClass('pulse');
                }, 600);
            });

        $(".comChannel").mouseenter(function ()
        {
            $('.comLabel', this).removeClass('hide fadeOutDown').addClass('animated fadeInUp');
        });

        $(".comChannel").mouseleave(function ()
        {
            $('.comLabel', this).removeClass('fadeInUp').addClass('animated fadeOutDown');
        });

    }])
    .controller('UseCasesController', [function ()
    {
        //Use Cases Index descriptions
        $(".useCase").mouseenter(function ()
        {
            $(".description", this).removeClass('hide fadeOutDown').addClass('animated fadeInUp');
        });

        $(".useCase").mouseleave(function ()
        {
            $(".description", this).removeClass('fadeInUp').addClass('animated fadeOutDown').delay(400).queue(function ()
            {
                $(this).addClass('hide').dequeue();
            });
        });


    }])
    .controller('PricingController', ['$http', '$rootScope', function ($http, $rootScope)
    {

        $http.get('http://sandbox.ask-fast.com/ddr/prices')
            .success(function (data, status, headers, config)
            {
                $rootScope.pricingData = processPricingData(data);
                $rootScope.pricing = $rootScope.pricingData['Netherlands'];
            });

        function processPricingData(pricingData)
        {
            var countryData = {};

            var adapterPurchase = null;
            var startUpCost = null;

            var CATEGORIES = {
                OUTBOUND: 'OUTGOING_COMMUNICATION_COST',
                INBOUND: 'INCOMING_COMMUNICATION_COST',
                SERVICE: 'SERVICE_COST',
                ADAPTER: 'ADAPTER_PURCHASE',
                SUBSCRIPTION: 'SUBSCRIPTION_COST',
                STARTUP: 'START_UP_COST',
                TTS: 'TTS_COST',
                TTS_SERVICE: 'TTS_SERVICE_COST'
            }

            angular.forEach(pricingData, function (value)
            {
                if (value.country)
                {

                    countryData[value.country] = countryData[value.country] || {
                            call: {
                                fixed: {
                                    outbound: {},
                                    inbound: {}
                                },
                                mobile: {
                                    outbound: {},
                                    inbound: {}
                                },
                            },
                            sms: {
                                outbound: {},
                                inbound: {},
                            }
                        };

                    if (value.adapterType === 'CALL')
                    {

                        if (value.category === CATEGORIES.OUTBOUND)
                        {

                            if (value.phoneNumberType === 'FIXED_LINE')
                            {

                                countryData[value.country].call.fixed.outbound.price = value.price;
                                countryData[value.country].call.fixed.outbound.unit = value.unitType.toLowerCase();

                            }
                            else
                            {

                                countryData[value.country].call.mobile.outbound.price = value.price;
                                countryData[value.country].call.mobile.outbound.unit = value.unitType.toLowerCase();
                            }

                        }
                        else if (value.category === CATEGORIES.INBOUND)
                        {

                            if (value.phoneNumberType === 'FIXED_LINE')
                            {

                                countryData[value.country].call.fixed.inbound.price = value.price;
                                countryData[value.country].call.fixed.inbound.unit = value.unitType.toLowerCase();

                            }
                            else if (value.phoneNumberType === 'MOBILE')
                            {

                                countryData[value.country].call.mobile.inbound.price = value.price;
                                countryData[value.country].call.mobile.inbound.unit = value.unitType.toLowerCase();

                            }
                            else if (value.phoneNumberType === 'ALL')
                            {

                                countryData[value.country].call.fixed.inbound.price = value.price;
                                countryData[value.country].call.mobile.inbound.price = value.price;
                                countryData[value.country].call.fixed.inbound.unit = value.unitType.toLowerCase();
                                countryData[value.country].call.mobile.inbound.unit = value.unitType.toLowerCase();

                            }

                        }

                    }
                    else if (value.adapterType === 'SMS')
                    {

                        if (value.category === CATEGORIES.OUTBOUND)
                        {

                            countryData[value.country].sms.outbound.price = value.price;
                            countryData[value.country].sms.outbound.unit = value.unitType.toLowerCase();

                        }
                        else if (value.category === CATEGORIES.INBOUND)
                        {

                            countryData[value.country].sms.inbound.price = value.price;
                            countryData[value.country].sms.inbound.unit = value.unitType.toLowerCase();

                        }

                    }
                    // end if value.country
                }
                else
                {
                    if (value.category === CATEGORIES.ADAPTER)
                    {

                        if (adapterPurchase)
                        {
                            console.warn('adapterPurchase already has a value: ' + adapterPurchase + ', proposed value: ' + value.price);
                        }
                        else
                        {
                            adapterPurchase = value.price;
                        }

                    }
                    else if (value.category === CATEGORIES.STARTUP && value.adapterType === 'CALL')
                    {

                        if (startUpCost)
                        {
                            console.warn('startUpCost already has a value: ' + startUpCost + ', proposed value: ' + value.price);
                        }
                        else
                        {
                            startUpCost = value.price;
                        }

                    }
                }
            });

            angular.forEach(countryData, function (value)
            {
                value.call.startup = startUpCost;
                value.call.number = adapterPurchase;
                value.sms.number = adapterPurchase;
            });

            return countryData;

        } // end processPricingData

    }])
    .controller('DevelopersController', [function ()
    {
        //side menuList Developer
        $('body').scrollspy({
            target: '.bs-docs-sidebar',
            offset: 100
        });

        $("#sidebar").affix({
            offset: {
                top: 330
            }
        });

        //highlight code
        $('pre code').each(function (i, block)
        {
            hljs.highlightBlock(block);
        });

    }]);


//menu toggle mobile
$("#dropdownToggle").click(function ()
{
    if ($('#dropdownMenu').hasClass('show'))
    {
        $('#dropdownMenu').removeClass('show').addClass('hide');
    }
    else
    {
        $('#dropdownMenu').removeClass('hide').addClass('show');
    }
});

$("#dropdownMenu li").click(function ()
{
    $('#dropdownMenu').removeClass('show').addClass('hide');
});
