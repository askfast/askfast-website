'use strict';

//  Google Analytics: change UA-XXXXX-X to be your site's ID.
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-49063927-1', 'ask-cs.com');
ga('send', 'pageview');


var isShown = localStorage.getItem('cookieMessageShown');

if (!isShown) {
  $('#cookieMessage').show();
}

$("#closeCookie").click(function () {
  $('#cookieMessage').hide();
  localStorage.setItem('cookieMessageShown', true);
});


var localization = {


  /*jshint indent:2 */

  /*----------DUTCH--------*/

  nl: {
    general: {
      tryForFree: 'Try for free',
      readMore: 'Read more',
      cookieMessage: 'Wij gebruiken cookies om uw gebruikerservaring te verbeteren. Door deze website te gebruiken, accepteert u ons',
      cookieMessageLink: 'privacybeleid'
    },
    menu: {
      useCases: 'Use Cases',
      pricing: 'Pricing',
      developers: 'Developers',
      login: 'Login',
      tryForFree: 'Try for free'
    },
    contact: {
      address: 'Heemraadssingel 89 | ',
      zipcode: ' 3022 CA ',
      city: ' Rotterdam | ',
      phone: '  +31 (0)10 225 0130 | ',
      email: ' info@ask-fast.com '
    },


    home: {
      intro: {
        slogan: 'Cloud API for automated communication',
        title: 'ASK-Fast',
        introText: 'ASK-Fast allows you to send automated messages through a wide range of channels to almost any device. You can choose to integrate ASK-Fast into your own existing application or use ASK-Fast to develop a new solution which can be used by others too.',
        comLabel1: 'Phone',
        comLabel2: 'Smartphone',
        comLabel3: 'Tablet',
        comLabel4: 'PC',
        comLabel5: 'Twitter',
        comLabel6: 'Facebook',
        comLabel7: 'Chat',
        comLabel8: 'Email',
        comLabel9: 'Pager'
      },
      useCases: {
        mainTitle: 'Use Cases',
        title01: 'ETA Alerts',
        description01: 'Update your client with the most accurate arrival time, directly integrated with GPS and order tracking system.',
        title02: 'Team Telephone',
        description02: 'Turn your own mobile phone into a team telephone with one click, and never miss a phone call from a client.',
        title03: 'Click-to-call',
        description03: 'Site visitors can leave their phone number and a call will be setup between your sales department and the visitor.',
        },
      benefits: {
        mainTitle: 'Why ASK-Fast?',
        title01: 'Extensive Reach',
        description01: 'A wide array of communication channels can be used to effectively reach your clients on a global scale.',
        title02: 'Performance Quality',
        description02: 'Constant performance and low latency for any sent message or voice call.',
        title03: 'Business Analytics',
        description03: 'Monitor reactions as soons as a campaign starts, allowing you to measure the success of your communication.',
        title04: 'Innovation',
        description04: 'Continuous search for innovative solutions and always open to new ideas.',
        title05: 'Security',
        description05: 'Sustained investment in the latest security technologies.',
        title06: 'Customization',
        description06: 'Solutions can be customized according to your business demands.'
      },
      clients: {
        mainTitle: 'Some of our users'
      },
    },


    notFound: {
      title: '404',
      description01: 'Pagina niet gevonden'
    }
  },


  /*----------ENGLISH--------*/

  en: {
    general: {
      columnSize: '8',
      columnSizeOffset: '4',
      readMore: 'Read More',
      cookieMessage: 'We use cookies to improve your experience. By using our website, you agree to accept our',
      cookieMessageLink: 'privacy policies'
    },
    menu: {
      products: 'Products',
      platform: 'Platform',
      company: 'Company',
      cases: 'References'
    },
    contact: {
      address: 'Heemraadssingel 89 | ',
      zipcode: ' 3022 CA ',
      city: ' Rotterdam | ',
      phone: '  +31 (0)10 225 0130 | ',
      email: ' info@ask-cs.com '
    },

    notFound: {
      title: '404',
      description01: 'Page not found'
    }
  }


};


angular.module('AskFast', []).
  constant('locals', localization).
  run(['$rootScope', 'locals', function ($rootScope, locals) {


    if (!localStorage.getItem('selectedLanguage')) {
      localStorage.setItem('selectedLanguage', 'nl');
    }

    $rootScope.showLangMenu = false;

    $rootScope.languages = ['en', 'nl'];

    var toggled = true;

    $rootScope.changeLang = function (lang) {

      $(".languageToggle li a").html(lang);

      if ($rootScope.lang == lang) {
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

    $(".languageToggle li a").click(function () {
      if (toggled) {
        toggleOut();
      } else {
        $('#languageMenu')
          .removeClass('hide rotateOutUpLeft')
          .addClass('animated rotateInDownLeft');
      }

      toggled = !toggled;
    });

    function toggleOut() {
      $('#languageMenu')
        .removeClass('rotateInDownLeft')
        .addClass('animated rotateOutUpLeft');
    }

    angular.element('#menu .desktopView ul').css({'display': 'block'});
    // angular.element('#secondOne').css({'display': 'block'});

  }]);


//menu toggle mobile
$("#dropdownToggle").click(function () {
  if ($('#dropdownMenu').hasClass('show')) {
    $('#dropdownMenu').removeClass('show').addClass('hide');
  } else {
    $('#dropdownMenu').removeClass('hide').addClass('show');
  }
});
