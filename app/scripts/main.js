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
      contactUs: 'Contact us',
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

    useCases:{
      title: 'Use cases',
      intro: {
        title: 'Opportunities of ASK-Fast',
        text: 'Explore the possibilities ASK-Fast offers your business',
      },
      whatTitle:'What does it do?',
      benefitsTitle:'Benefits',
      howUseTitle:'How can they use it?',
      howWorkTitle :'How does it work?',
      stepTitle1: 'Step 1',
      stepTitle2: 'Step 2',
      stepTitle3: 'Step 3',
      stepTitle4: 'Step 4',
      case01: {
        title: 'Two-factor Authentication',
        overviewDescription: 'Protect your accounts by adding extra security to the login of your application.',
        whatDescription: 'People often underestimate how easy it is to steal passwords. By adding another layer of security, your accounts are better protected from unauthorized users. During the login process an SMS or automated call will be sent to your personal phone number with an extra verification pincode. This way unwanted users will not be able to access your accounts, even if they have your password.',
        benefit01: 'Account protection',
        benefit02: 'No new hardware required ',
        benefit03: 'Can be used for password reset too',
        howUseDescription: 'A lot of IT organizations offer its customer cloud storage space. Due to the nature of its business, security is one of the most important components. With the help of ASK-Fast, organisations can set up a two-factor authentication code that can be sent to their customers easily and quickly. When a customer wants access his cloud storage, he may be asked for an extra security code if he is logging in from an unknown computer. This code is sent to his personal mobile phone, and once the computer is verified using the code, he will have access to his account.',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'User wants to log into his/her account.',
        howWorkStep2: 'ASK-Fast generates a pin code.',
        howWorkStep3: 'ASK-Fast delivers a message containing the pin code to the user.',
        howWorkStep4: 'The user enters the pin code and can continue his/her login process.'
      },
      case02: {
        title: 'ETA-Alerts',
        overviewDescription: 'Inform your customers with the most accurate arrival time.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      },
      case03: {
        title: 'Team Telephone',
        overviewDescription: 'Turn your own mobile phone into a team telephone with one click.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      },
      case04: {
        title: 'Click-to-Call',
        overviewDescription: 'Connect to your website visitors efficiently and rapidly.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      },
      case05: {
        title: 'Push-to-Talk',
        overviewDescription: 'Communicate instantly at the touch of a button.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      },
      case06: {
        title: 'Caller Authentication',
        overviewDescription: 'Make sure your information does not end up in the wrong hands.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      },
      case07: {
        title: 'Broadcast',
        overviewDescription: 'One message, multiple communication channels.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      },
      case08: {
        title: 'Decentrale',
        overviewDescription: 'No more need for regular phones or telephone exchanges.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      },
      case09: {
        title: 'Your Solution',
        overviewDescription: 'The ASK-Fast API allows you to easily build your own application.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: '',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      }
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
