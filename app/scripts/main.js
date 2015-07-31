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
    contactForm: {
      title: 'Contact us'
    },


    home: {
      intro: {
        slogan: 'Cloud API for automated communication',
        title: 'ASK-Fast',
        introText: 'ASK-Fast is a cloud platform that fulfills your communicative needs. The platform is dialog-driven, meaning it allows automated two way communication. Every question may trigger a different response, which creates another designed flow of communication. You can choose to integrate ASK-Fast into your own existing application or use ASK-Fast to develop a new solution.',
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
        description03: 'Monitor reactions as soon as a campaign starts, allowing you to measure the success of your communication.',
        title04: 'Innovation',
        description04: 'Continuous search for innovative solutions and always open to new ideas.',
        title05: 'Security',
        description05: 'Sustained investment in the latest security technologies.',
        title06: 'Customization',
        description06: 'Solutions can be customized according to your business demands.'
      },
      clients: {
        mainTitle: 'Some of our users'
      }
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
      stepTitle5: 'Step 5',
      case01: {
        title: 'Two-factor Authentication',
        overviewDescription: 'Protect your accounts by adding extra security to the login of your application.',
        whatDescription: 'People often underestimate how easy it is to steal passwords. By adding another layer of security, your accounts are better protected from unauthorized users. During the login process an SMS or automated call will be sent to your personal phone number with an extra verification pincode. This way unwanted users will not be able to access your accounts, even if they have your password.',
        benefit01: 'Account protection',
        benefit02: 'No new hardware required ',
        benefit03: 'Password reset',
        howUseDescription: 'A lot of IT organizations offer its customer cloud storage space. Due to the nature of its business, security is one of the most important components. With the help of ASK-Fast, organisations can set up a two-factor authentication code that can be sent to their customers easily and quickly. When a customer wants access his cloud storage, he may be asked for an extra security code if he is logging in from an unknown computer. This code is sent to his personal mobile phone, and once the computer is verified using the code, he will have access to his account.',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'User wants to log into his/her account.',
        howWorkStep2: 'ASK-Fast generates a pin code.',
        howWorkStep3: 'ASK-Fast delivers a message containing the pin code to the user.',
        howWorkStep4: 'The user enters the pin code and can continue his/her login process.'
      },
      case02: {
        title: 'ETA-Alerts',
        overviewDescription: 'Inform your customers with the most accurate arrival time, directly integrated with GPS and order tracking system.',
        whatDescription: 'Please your customers greatly by sending them real-time arrival estimates. Nobody likes waiting for something or someone for an unknown amount of time, whether they\'re waiting for a package to be delivered or a taxi to arrive. Using ETA-Alerts by ASK-Fast, an SMS or Voice messages can be sent to your customers with precise ETA windows and real-time arrival alerts. ',
        benefit01: 'Improved customer service',
        benefit02: 'No special phone requirements',
        benefit03: 'Immediate confirmation',
        howUseDescription: '',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'Collect data from GPS or order tracking systems.',
        howWorkStep2: 'Calculate the ETA and prepare content for personalized message.',
        howWorkStep3: 'The ASK-Fast API delivers the SMS or Voice alert.',
        howWorkStep4: 'A confirmation is sent when whether the message is received.'
      },
      case03: {
        title: 'Team Telephone',
        overviewDescription: 'Turn your own mobile phone into a team telephone with one click, and never miss a phone call from a client.',
        whatDescription: 'When you\'re providing service in small teams, it\'s important that clients can reach your team. With Team Telephone, every team member can link a special team-phone number to their own mobile device. Callers will be connected to the most suitable team-member, based on several factors such as availability and location.',
        benefit01: 'Improved availability',
        benefit02: 'No extra mobile device needed',
        benefit03: 'Flexible for your team members',
        howUseDescription: '',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'An outside caller phones the team phone number.',
        howWorkStep2: 'ASK-Fast dialog searches for the available team member(s).',
        howWorkStep3: 'The ASK-Fast API connects the outside caller to a team member.',
        howWorkStep4: 'If a team member can\'t pick up, the call will be forwarded to the next available team member.'
      },
      case04: {
        title: 'Click-to-Call',
        overviewDescription: 'Connect to your website visitors efficiently and rapidly.',
        whatDescription: 'In order to generate leads, websites often have a section where visitors can leave their contact details. When one of your website visitor signs up, they are often unreachable by the time you call them back. Click-to-call is a user-friendly solution that connects you to these website visitors immediately. After they have submitted their phone number, a call will be set up between you and your potential customer.',
        benefit01: 'More lead conversion',
        benefit02: 'Customer engagement',
        benefit03: 'More accurate phone calls',
        howUseDescription: '',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'A website visitor enters his/her phone details on a webform.',
        howWorkStep2: 'The dialog searches for the most suitable department.',
        howWorkStep3: 'The ASK-Fast API calls an employee.',
        howWorkStep4: 'The employee is connected to the website visitor.'
      },
      case05: {
        title: 'Push-to-Talk',
        overviewDescription: 'Communicate instantly at the touch of a button.',
        whatDescription: 'The success of your business depends greatly on the ability to relay information and keep your teams productive. By using Push-to-talk, your communication is instantaneous because you don\'t have to dial a number. You simply push a button and start talking; this could be to one person, or to an entire group.',
        benefit01: 'Reduce communication costs',
        benefit02: 'Reduce response times',
        benefit03: 'Improve team coordination and efficiency',
        howUseDescription: '',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'A team member presses the button and starts a conference.',
        howWorkStep2: 'The dialog searches for all the members of the team. ',
        howWorkStep3: 'The ASK-Fast API phones every team member.',
        howWorkStep4: 'The caller is connected to the entire team.'
      },
      case06: {
        title: 'Caller Authentication',
        overviewDescription: 'Make sure your information does not end up in the wrong hands.',
        whatDescription: 'When it comes to providing a trusted customer environment, you want to make sure this environment is only accessible by your customer. With ASK-Fast you can disclose information through a phone call, however you don\'t want to disclose this information with anyone. In order to authenticate the caller, he/she is asked for his personal pin code.',
        benefit01: 'Prevent phone fraud',
        benefit02: 'Remove unnecessary processes',
        benefit03: 'Enhance customer experience',
        howUseDescription: '',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'Caller rings a phone number.',
        howWorkStep2: 'The caller is asked for a pin code.',
        howWorkStep3: 'The ASK-Fast API verifies the pin code.',
        howWorkStep4: 'The caller gets authentication and is connected to the right department.'
      },
      case07: {
        title: 'Broadcast',
        overviewDescription: 'One message, multiple communication channels.',
        whatDescription: 'Nowadays there are so many different communication channels that is has become hard to identify which one is most effective. So why not use all of them? Broadcast is a unified messaging service that supports communication channels ranging from phone calls to Twitter and e-mails to beeps on a pager. This way you can focus more on what you communicate is and don\'t have to worry about how you communicate.',
        benefit01: 'Increase coverage rate',
        benefit02: 'Increase effectiveness',
        benefit03: 'Full reports available for analysis',
        howUseDescription: '',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'User creates a message flow.',
        howWorkStep2: 'User chooses the communication channels.',
        howWorkStep3: 'A list of receivers is chosen.',
        howWorkStep4: 'The ASK-Fast API sends the message to all receivers via every channel.',
        howWorkStep5: 'Receivers can react to the message.'
      },
      case08: {
        title: 'Decentrale',
        overviewDescription: 'No more need for regular phones or telephone exchanges.',
        whatDescription: 'A telephone exchange usually requires heavy investment, regular maintenance and often causes technical problems too. The Decentrale is a virtual telephone exchange with all the functionalities of an advanced telephone exchange, but without all its technical difficulties.',
        benefit01: 'Reduce costs',
        benefit02: 'Increase mobility',
        benefit03: 'Improve flexibility',
        howUseDescription: 'Care organisations often receive loads of phone calls, ranging from patients to doctors. Larger organisations usually implement their own telephone exchange to facilitate these calls. They invest a lot of resources in purchasing and maintenance of their system. Smaller organisations might not use a telephone exchange at all if they don’t have the means to invest in such an advanced system. After integrating Decentrale by ASK-Fast both organisations are enjoying the benefits of a user-friendly, cost-effective and mobile system. Decentrale also provides information about waiting times and missed calls, in order to improve the reachability of the organisations.',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: 'An outside caller phones the Decentrale phone number.',
        howWorkStep2: 'ASK-Fast dialog searches for the employee who is most capable of assisting the caller.',
        howWorkStep3: 'The ASK-Fast API connects the outside caller to the employee.',
        howWorkStep4: 'If the employee doesn\'t pick up, the call will be forwarded to the next worker.'
      },
      case09: {
        title: 'Your Solution',
        overviewDescription: 'The ASK-Fast API allows you to easily build your own application.',
        whatDescription: '',
        benefit01: '',
        benefit02: '',
        benefit03: '',
        howUseDescription: '',
        customerQuote: ' \'A person who never made a mistake never tried anything new.\'',
        howWorkStep1: '',
        howWorkStep2: '',
        howWorkStep3: '',
        howWorkStep4: ''
      }
    },

    pricing: {
      title: 'Pricing',
      country: {
        title: 'Enter your country'
      },
      phone: 'Phone',
      sms: 'SMS',
      number: 'Number',
      inbound: 'Inbound',
      outbound: 'Outbound',
      startup: 'Startup',
      landline: 'Landline',
      mobile: 'Mobile',
      example: '€0,09 / minute'
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
