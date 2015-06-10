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
      columnSize: '8',
      columnSizeOffset: '4',
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
      clients: {
        mainTitle: 'Some of our users'
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
      }
    },


    company: {
      pressure: {
        title: 'Minimale regeldruk',
        description01: 'ASK is expert in het ontwikkelen van applicaties die dit mogelijk maken! Uw personen kunnen met ASK onderling de planning afstemmen. Daarbij hebben ze tegelijkertijd de relevante informatie bij de hand om het werk efficienter uit te voeren.',
        description02: 'Met de applicaties van ASK is het communiceren van de beschikbaarheid erg eenvoudig. Het kan zelfs automatisch. Vervolgens neemt de applicatie zelf contact op met beschikbare personen bij uitval. Dit houdt de belasting van uw personen laag en de motivatie hoog.',
        description03: 'ASK applicaties faciliteren het onderlinge netwerk van uw personeel, zodat ze continu met elkaar in verbinding staan. Dit garandeert u de flexibiliteit om snel te kunnen reageren op last-minute situaties.',
        description04: 'ASK werkt al meer dan 10 jaar aan intelligente software. De applicaties die hieruit voortkomen bevorderen de communicatie tussen personen. Hiervoor gebruikt ASK het netwerk dat mensen met elkaar vormen. De applicaties zijn altijd multi-device: werken vanaf uw eigen computer, smartphone of tablet.'
      },
      howWork: {
        title: 'Hoe werkt ASK?',
        description01: 'Traditionele planning werkt op basis van veel, maar vaak verouderde informatie. Het gebruikt een momentopname… Software van ASK daarentegen is realtime: de informatie die gebruikt wordt is veranderlijk en altijd de meest recente. Hierdoor is altijd de optimale planning op ieder moment voorhanden.',
        description02: 'Omdat ASK naast het gebruik van realtime, alleen de meest relevante informatie selecteert, kunt u direct inspelen op onvoorziene situaties. ASK levert wat u nodig heeft, direct.'
      },
      personalNetwork: {
        title: 'Eigen netwerk',
        description: 'ASK is onderdeel van een groep high-tech bedrijven: de Almende Groep. Door de nauwe onderlinge samenwerking loopt ASK technologisch altijd voorop.'
      }
    },


    jobs: {
      title: 'Vacatures',
      keyResTitle: 'Key responsibilities',
      knowledgeTitle: 'Required knowledge and experience:',
      profileTitle: 'Your Profile:',
      offerTitle: 'We offer you:',
      contactTitle: 'Interesse?',
      contactDescription01: 'Neem contact op met Judith Engelsman:',

      iosdev: {
        title: 'iOS Developer (2x) at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced iOS Developers for several projects. The focus is on developing innovative iPhone and iPad applications. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of iOS (iPhone and iPad) applications of one of our products.',
          point02: 'Develop, enhance and maintain the iOS applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking',
          point02: 'Minimum 2 years of demonstrable experience in iOS app development',
          point03: 'Experience with Apple appstore & Distribution Process.',
          point04: 'Extensive knowledge of iOS SDK and Xcode',
          point05: 'Sufficient knowledge of Objective-C , HTML5, JSON',
          point06: 'Good knowledge of Object Oriented concepts and a strong passion for software development.',
          point07: 'Fully comfortable working in English, both in writing and spoken'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues'
        }
      },

      androiddev: {
        title: 'Android Developer at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced Android Developers for several projects. The focus is on developing innovative mobile applications for Android devices. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of Android applications of one of our products.',
          point02: 'Develop, enhance and maintain the Android applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking.',
          point02: 'Minimum 2 years of demonstrable experience in Android app development.',
          point03: 'Experience with Android Market place & Distribution Process.',
          point04: 'Excellent knowledge of Java.',
          point05: 'Good knowledge of Object Oriented concepts and a strong passion for software development.',
          point06: 'Sufficient knowledge of HTML5, JSON.',
          point07: 'Fully comfortable working in English, both in writing and spoken.'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues.'
        }
      },

      webdev: {
        title: 'Web Developer at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced Web Developers for several products. The focus is on developing innovative web applications. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of web applications of one of our products.',
          point02: 'Develop, enhance and maintain the web applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking.',
          point02: 'Minimum 2 years of demonstrable experience in web app development.',
          point03: 'Excellent knowledge of HTML, javascript, CSS, JSON.',
          point04: 'Fully comfortable working in English, both in writing and spoken.'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues.'
        }
      },

      businessConsultant: {
        title: 'Business Consultant',
        intro: 'For the extension of our sales team, we are looking for a Business Consultant. This function gives the responsibility of attracting new business and relationship management with customers. You are a figurehead of ASK Community Systems B.V. and you are not afraid of any commercial challenges.',
        knowledge: {
          point01: 'Completed HBO / university education in technical field of study (like Computer Technology, Information Technology or Business Administration)',
          point02: 'Minimum 3 years of experience in similar function',
          point03: 'Demonstrable successful commercial experience'
        },
        profile: {
          point01: 'You are enterprising and take initiative',
          point02: 'You are independent, show ownership and enjoy working in a team',
          point03: 'A good networker',
          point04: 'Communicative skills in word and writing',
          point05: 'Excellent English oral and writing skills ',
          point06: 'Able to make ASK services your own in short-term',
          point07: 'Preferably living in region of Rotterdam'
        },
        offer: {
          point01: 'Competitive benefits',
          point02: 'A company with potential',
          point03: 'An inspiring international working environment',
          point04: 'Plenty of possibilities for personal development within, as well as beyond your field of study'
        }
      },


      internshipTitle: 'Stages',
      internshipTitle02: 'Stage:',
      challengeTitle: 'De uitdaging',
      weSeekTitle: 'Wie we zoeken',

      internshipClouds: {
        title: 'Onderzoek naar clouds',
        challengeDescription01: 'ASK maakt veelvuldig gebruik van multi-agenttechnologie in haar oplossingen. Twee van onze belangrijkste systemen maken gebruik van deze technologie: de ASK Back-End voor realtime coördinatie en informatie-uitwisseling, en ASK-Fast, een platform voor realtime communicatie tussen verschillende partijen. ',
        challengeDescription02: 'Beide platforms draaien in de cloud (voornamelijk Google App Engine), waardoor ze onbeperkt schaalbaar zijn. Om ook in de toekomst goede beslissingen te kunnen nemen over onze applicaties in de cloud, willen we graag meer weten over andere cloud oplossingen. ',
        weSeekDescription01: 'We zoeken daarom een stagiair die een uitgebreid vergelijkend onderzoek wil doen naar de verschillende cloudplatforms die op dit moment op de markt zijn. Het gaat daarbij om zowel een literatuurstudie als praktische experimenten waarbij de voors en tegens van de verschillende cloud platforms tegen elkaar kunnen worden afgewogen. '
      },

      internshipPersonalAlarm: {
        title: 'Personal alarm system',
        challengeDescription01: 'ASK werkt op dit moment aan de Alarm app: een innovatief systeem dat de juiste mensen alarmeert in geval van nood. Deze app kan gebruikt worden door bijvoorbeeld patiënten met epilepsie, diabetes of hartproblemen, mobiele beveiligers, medewerkers die in hun eentje op een gevaarlijke plek moeten werken, reizigers die worden geconfronteerd met geweld, enz. ',
        challengeDescription02: 'De applicatie bestaat uit een app (te gebruiken door slachtoffers én helpers) en een intelligente back-end. De back-end zorgt dat de meest geschikte persoon wordt gealarmeerd en dat de juiste informatie snel bij de juiste persoon terecht komt. De Alarm app is getest in twee experimentele situaties, namelijk binnen Zorg en binnen Veiligheid. ',
        weSeekDescription01: 'ASK-CS zoekt een stagiair die wil helpen deze pilotversie om te zetten naar een market ready systeem.'
      },

      internshipP2000Alarm: {
        title: 'P2000 alarm system',
        challengeDescription01: '',
        challengeDescription02: '',
        weSeekDescription01: ''
      },

      internshipLearningSoftwareAgent: {
        title: 'Een lerende software-agent voor multi-modale communicatie',
        challengeDescription01: 'Het ASK-Fast platform stelt gebruikers in staat om met verschillende partijen te communiceren via verschillende kanalen. Denk aan telefonie, SMS, Email, IM, in-app berichten, enz. Op deze manier kunnen één of meerdere dialogen worden opgezet.',
        challengeDescription02: 'Eén van de systemen die gebruik maken van ASK-Fast is JoinUs, een systeem dat recruiters helpt om veel flex-medewerkers tegelijk te polsen over hun beschikbaarheid voor een bepaalde taak. Elke flex-medewerker wordt afhankelijk van zijn/haar voorkeuren via één of meerdere kanalen aangesproken. ',
        challengeDescription03: 'Om tot een optimale mix van communicatiekanalen te komen, willen we een lerende software-agent ontwikkelen. Deze agent combineert de statische kennis over de verschillende communicatiekanalen, met de gebruikerspecifieke voorkeuren. ',
        weSeekDescription01: 'We zijn op zoek naar een afstudeerder die ons wil helpen bij het ontwikkelen van deze lerende software-agent. Onderdeel van de afstudeerstage is een onderzoek naar de effectiviteit van de verschillende communicatiekanalen. De resultaten van dit onderzoek worden gebruikt als input voor de agent. '
      },

      internshipTeamup: {
        title: 'TeamUp in de praktijk',
        challengeDescription01: 'Voor de zorgsector ontwikkelt ASK de oplossing TeamUp. Deze applicatie helpt teams van zorgverleners (zoals thuiszorgmedewerkers) om samen te werken met hun teamgenoten. Ze kunnen bijvoorbeeld elkaars status opvragen, ondersteuning vragen, of op locatie informatie over hun patiënten opzoeken.',
        challengeDescription02: 'ASK wil de TeamUp applicatie nu ook inzetten in andere domeinen, zoals sportteams, mantelzorgers, enz.',
        weSeekDescription01: 'We zoeken een stagiair die voor ons wil onderzoeken hoe TeamUp kan worden ingezet in dergelijke domeinen en welke toegevoegde waarde de applicatie kan hebben.'
      },

      workAt: {
        title: 'Werken bij ASK',
        description01: 'ASK Community Systems is een internationaal opererende softwareleverancier van Nederlandse bodem. ' +
        'ASK Community Systems richt zich op het vlak waar informatiemanagement en communicatie elkaar raken.' +
        'De intelligente systemen die wij maken ondersteunen menselijke processen door gebruik te maken van software-agenttechnologie.',
        description02: 'Ben je gemotiveerd en gepassioneerd met je werk bezig? En bereid om iets extra\'s te geven voor de klant? ' +
        'Werk je graag met andere professionals in een informele doch prestatiegerichte werksfeer? ' +
        'Dan nodigen we je graag uit onze vacatures te bekijken en te solliciteren.'
      }
    },


    cases: {
      problemTitle: 'Probleemschets:',
      goalsTitle: 'Doelstellingen:',
      solutionTitle: 'Oplossing:',
      quanResultsTitle: 'Kwantitatieve resultaten:',
      qualResultsTitle: 'Kwalitatieve resultaten:',

      postnl: {
        title: 'PostNL',
        factsTitle: 'ASK bij PostNL in cijfers:',
        fact01: 'Sorteercentra verspreid door Nederland',
        fact02: 'Flexwerkers in het systeem',
        fact03: 'Communicatiehandelingen per maand (telefoon/sms)',
        problem: {
          point01: 'Inefficiënte planning door scheve verhouding tussen vooraf gemaakt rooster en daadwerkelijke vraag;',
          point02: 'Overschot aan medewerkers en uitzendkrachten;',
          point03: 'Wens om vaste medewerkers te behouden en aantal uitzenduren te verminderen.'
        },
        goals: {
          point01: 'Roosters maken gebaseerd op de individuele voorkeuren van de medewerkers;',
          point02: 'Een betere verhouding tussen de fluctuerende werkdruk en daadwerkelijk personeelsinzet;',
          point03: 'Sneller reageren op ziekte en afwezigheid.'
        },
        solution: {
          description01: 'PostNL heeft, in overeenstemming met de ondernemingsraad, gekozen voor de oplossing van ASK, omdat deze goed aansluit bij hun MVO-doelstellingen (Maatschappelijk Verantwoord Ondernemen).',
          description02: 'De roosters van postsorteerders worden voortaan gegenereerd op basis van de beschikbaarheid van werknemers, die zij zelf online aangeven. De definitieve planning wordt aan de flexwerkers doorgegeven via e-mail of sms.'
        },
        qualResults: {
          point01: 'Aantal uitzenduren is teruggebracht;',
          point02: 'Geen ontslagen onder vaste medewerkers;',
          point03: 'Meer continuïteit doordat er meer met vaste medewerkers wordt gewerkt;',
          point04: 'Personeel is beter gemotiveerd omdat werk en privé beter op elkaar zijn af te stemmen.'
        },
        quanResults: {
          fact01: 'Kostenvermindering door besparing',
          fact02: 'Verzuim gereduceerd (van 11% naar 6%)',
          fact03: 'Totale besparing in 3 jaar'
        }
      },

      knrm: {
        title: 'KNRM',
        factsTitle: 'ASK bij KNRM in cijfers:',
        fact01: 'Reddingsstations gebruiken ASK',
        fact02: 'Hulpverleners ondersteund',
        problem: {
          point01: 'Veel onnodige oproepen;',
          point02: 'Niet altijd voldoende mensen beschikbaar;',
          point03: 'Weinig flexibiliteit voor de vrijwilligers.'
        },
        goals: {
          point01: 'Controlefunctie: inzichtelijk maken of er voldoende mensen zijn;',
          point02: 'Ondersteunen coördinatoren;',
          point03: 'Roostering faciliteren voor vrijwilligers.'
        },
        solution: {
          description01: 'Met de intrede van ASK vullen de meer dan 1300 hulpverleners bij de 46 stations nu online hun beschikbaarheid in via het planbord. De coördinator houdt het overzicht op het gezamenlijke rooster van zijn/haar locatie. ASK vult automatisch de gaten in het rooster op door telefonisch de beschikbaarheid te peilen.'
        },
        qualResults: {
          point01: 'Vrijwilligerswerk voor de KNRM is beter te combineren met werk/privé;',
          point02: 'ASK bewaakt de permanentiegraad (= altijd voldoende mensen beschikbaar);',
          point03: 'De schippers zijn ontlast, doordat ze nu alleen bij een tekort worden genotificeerd.'
        }
      },

      bz: {
        title: 'Buurtzorg',
        factsTitle: 'Buurtzorg in cijfers:',
        fact01: 'Personen maximaal per zelfsturend team',
        fact02: 'Locaties in Nederland',
        problem: {
          point01: 'Veel tijd kwijt aan het naar kantoor gaan om op de computer cliëntgegevens te kunnen raadplegen;',
          point02: 'Communicatie tussen collega’s onderling slecht gefaciliteerd.'
        },
        goals: {
          point01: 'Wijkverpleegkundigen de beschikking te geven over een gebruiksvriendelijke mobiele applicatie;',
          point02: 'Deze applicatie moet de wijkverpleegkundige ondersteuning bieden bij de verzorging van cliënten door hen ter plaatse de beschikking te geven over relevante informatie.'
        },
        solution: {
          description01: 'ASK Community Systems heeft in samenwerking met Ecare Services de Buurtzorg App ontwikkeld. Deze app geeft werknemers de mogelijkheid om onderweg naar de cliënt de laatste rapporten door te nemen. Het vormt de mobiele ondersteuning van de wijkverpleegkundige.',
          description02: 'Tevens zorgt de Buurtzorg App voor kortere lijntjes: Geen mensen meer achter de bureaus, maar gewoon uitvoerenden die ook de talenten in zich hebben om na te denken en gebruik te maken van moderne technologie.'
        },
        qualResults: {
          description01: 'Met de Buurtzorg App kunnen wijkverpleegkundigen:',
          point01: 'Basisgegevens van en over cliënten inzien;',
          point02: 'Rapportages van en over cliënten, inzien en creëren;',
          point03: 'Tijd besteed bij een cliënt vastleggen en doorsturen;',
          point04: 'Contact opnemen met cliënten of collega\'s.'
        }
      },

      olympia: {
        title: 'Olympia',
        factsTitle: 'ASK bij Olympia in cijfers:',
        fact01: 'Geregistreerde uitzendkrachten',
        fact02: 'Communicatiehandelingen per kwartaal (telefoon/sms)',
        problem: {
          point01: 'Beperkte productiviteit bij intercedenten in alle branches;',
          point02: 'Intercedenten besteden te veel tijd aan herhalende communicatiehandelingen;',
          point03: 'Intercedenten hebben behoefte aan meer tijd voor persoonlijk contact op de momenten dat het telt.'
        },
        goals: {
          point01: 'Kernprocessen optimaliseren door repetitieve en tijdrovende telefoongesprekken te automatiseren;',
          point02: 'Tijd vrijmaken voor persoonlijk contact tussen intercedent en klant;',
          point03: 'Een database inrichten met direct inzetbare uitzendkrachten.'
        },
        solution: {
          description01: 'Olympia Uitzendbureau gebruikte ASK om haar intercedenten te ondersteunen bij dagelijkse werkprocessen.',
          description02: 'Wanneer een vacature moet worden vervuld, selecteert de intercedent eerst handmatig een groep geschikte uitzendkrachten. De intercedent neemt óf een gesproken bericht op, óf schrijft een tekst met daarin de belangrijkste informatie over de opdracht. ASK bezorgt dit bericht bij de geselecteerde uitzendkrachten en verzamelt meteen reacties via de telefoon, sms, of e-mail.',
          description03: 'De opdracht kan online worden uitgezet en gevolgd. Dit betekent dat de intercedent niet in hetzelfde land hoeft te zijn als de kandidaten en dat de effectieve werktijd wordt uitgebreid (tot wel 24/7). Het systeem blijft kandidaten benaderen, ook wanneer de intercedent niet achter zijn of haar bureau zit.'
        },
        qualResults: {
          point01: 'De dagelijkse operatie is efficiënter en flexibeler;',
          point02: 'Een betere concurrentiepositie;',
          point03: 'De baan van intercedent is aantrekkelijker omdat ASK de saaie, repetitieve taken overneemt.'
        },
        quanResults: {
          fact01: 'Succesvolle uitzendingen',
          fact02: 'Inkomsten',
          fact03: 'Communicatiekosten (EUR 0,38 aan licentie + EUR 0,10 per gesprek/sms ipv EUR 4,30 per contact)'
        }
      }
    },

    platform: {
      intro: {
        title: 'ASK Platform',
        description01: 'Last minute uitdagingen oplossen met het platform van ASK.',
        description02: 'Nog voor er personeelstekorten ontstaan, garandeert het platform van ASK de beschikbaarheid van de juiste mensen. Dat betekent dat de juiste kennis en vaardigheden ook tot uw beschikking staan. Om dit mogelijk te maken, gebruikt ASK continu de informatie die uw medewerkers doorgeven aan het platform.',
        description03: 'ASK gebruikt het platform bovendien als basis voor de eigen producten StandBy en TeamUp.'
      },
      need: {
        title: 'Wat u nodig hebt wanneer u het nodig hebt',
        description01: 'Er zijn veel voorbeelden van situaties waarin er direct behoefte is aan iemand met specifieke kennis en vaardigheden om een acuut probleem op te lossen. Of juist een groep van mensen die hiertoe hun kennis en vaardigheden combineren.',
        exampleTitle01: 'Voorbeeld 1',
        example01: '‘Er heeft zich zojuist een incident voorgedaan en het doel van uw organisatie om zo snel mogelijk (binnen de richtlijnen) op de plek van het incident aanwezig te zijn. Het is daarbij belangrijk dat u het juiste aantal personen op die locatie heeft. Net zo belangrijk is dat in dat team de mensen zitten die adequaat de juiste hulpverlening kunnen bieden.’',
        exampleTitle02: 'Voorbeeld 2',
        example02: '‘U heeft een pakketje dat binnen een uur aan de andere kant van het land moet worden bezorgd. Alleen heeft uw koerier zich zojuist ziekgemeld. Uw heeft een vervanger nodig die uw pakketje binnen dat uur kan ophalen en bezorgen.’',
        exampleTitle03: 'Voorbeeld 3',
        example03: '‘Op het laatste moment wordt een afspraak met een belangrijke relatie ingepland. U heeft wel globale informatie, maar u heeft voor deze afspraak meer gedetailleerde informatie nodig over tariefstructuren. U moet dus snel de juiste persoon zien te vinden.’',
        description02: 'Uit voorgaande voorbeelden blijkt telkens eenzelfde issue: u weet vooraf niet of de juiste persoon of personen beschikbaar zijn op het moment dat u met een acuut probleem te maken krijgt, terwijl u direct een oplossing moet hebben.'
      },
      businessGoals: {
        title: 'Uw organisatiebehoeften bewaken',
        description01: 'Het platform van ASK voorkomt dat de oplossing te laat komt. Het platform zorgt er volledig zelfstandig voor dat de juiste personen voor u beschikbaar zijn op het moment dat het nodig is. Hierdoor beschikt u op het juiste moment over de benodigde kennis en kunde.',
        description02: 'ASK gaat hierin verder dan andere software: Het platform houdt continu uw behoefte in de gaten en bewaakt deze actief. Dit betekent dat wanneer u wilt dat er altijd voldoende mensen beschikbaar zijn, ASK voor u in de gaten of dat het geval is en of dat ook mensen zijn met de juiste kennis en vaardigheden. Hiervoor kijkt ASK naar de toekomst door de planning en locatie van uw mensen te monitoren.'
      },
      context: {
        title: 'Context',
        needContext: {
          title: 'U heeft context nodig',
          description01: 'Een simpel voorbeeld: Als u heelhuids van A naar B wilt komen, dan gebruikt u uw ogen en oren om obstakels te ontwijken. Deze obstakels zijn onderdeel van wat wij  ‘context’ noemen. Hetzelfde geldt voor onze technologie. Software-applicaties hebben informatie nodig over wat er gebeurt om voor u de context te kunnen bepalen.'
        },
        inputContext: {
          title: 'Informatie voor de context',
          description01: 'ASK maakt gebruik van sensors om informatie te verzamelen. Deze zitten in de devices die we bij ons dragen, zoals smartphone en tablet. De input uit de sensors vormt informatie die bijdraagt aan het bepalen van de context. Nadat de gebruiker toestemming heeft gegeven, gebruikt ASK verschillende communicatiekanalen om informatie te verzamelen over het gedrag van de gebruiker. Deze kanalen lopen uiteen van SMS, spraakberichten en e-mail tot sociale media zoals Twitter. Daarbij start ASK ook een dialoog met de gebruiker om de beschikbaarheid te regelen. Het continu combineren van alle beschikbare informatie over de gebruiker noemt ASK ‘context awareness’.'
        },
        meaningfulInfo: {
          title: 'Informatie vertalen naar waarde',
          description01: 'Het platform geeft toegang tot informatie over de status (beschrijving van situatie van de gebruiker), het sociale netwerk (wie kent wie en wie heeft wie ontmoet) en de tijdlijn (wat is er gebeurd en wat voorspellen we dat er moet gebeuren). Het ASK platform interpreteert alle informatie van gebruikers en creëert voor u context. Hiermee kan het platform beslissingen nemen om voor u met een passende oplossing te komen wanneer u dat nodig heeft.'
        }
      },
      thePlatform: {
        title: 'Het Platform',
        communicationIntensity: {
          title: 'Aangepast aan uw communicatiedruk',
          description01: 'Het platform van ASK is een cloud platform. Hierdoor kan het meeschalen met uw communicatiebehoefte. Wanneer de communicatiedruk groter wordt, groeit de ruimte in de cloud automatisch mee.',
          description02: 'ASK kiest voor transparantie door het hanteren van een usage-based tariefstructuur. Hierdoor betaalt u alleen voor de diensten die u ook daadwerkelijk gebruikt.',
          description03: 'Doordat het platform in de cloud hangt, verlaagt ASK de initiële en terugkerende uitgaven aan het opzetten en onderhouden van IT-infrastructuur, alsmede de personele belasting. Ook zijn dure servers bij u op locatie niet meer nodig. U heeft de beschikking over snelle infrastructuur en professionele oplossingen zonder grote investeringen vooraf en met lagere kosten op langere termijn.'
        },
        nextGeneration: {
          title: 'Een toekomstbestendig platform',
          description01: 'Het ASK platform is een Platform as a Service (PaaS-oplossing): Het is klaar om uitgerold te worden in uw cloud-omgeving. De implementatie is eenvoudig en past naadloos in uw bestaande IT infrastructuur. Dit is makkelijk voor uw IT-medewerkers. Nog meer gemak is terug te vinden in de eenvoudige API, die bovendien is gebaseerd op open-source standaarden.',
          description02: 'Vergelijk de softwareapplicaties en de API van ASK met lego: u kunt er namelijk uw eigen cloud-gebaseerde communicatieoplossing mee bouwen. Hiervoor kunt u gebruik maken van de bouwstenen die ASK al klaar heeft liggen, bijvoorbeeld op ',
          link01: 'ASK-Fast.com',
          description0202: 'Uiteraard kunt u met de ASK API ook uw eigen software-applicaties bouwen en zo uw eigen custom oplossing maken.',
          description03: '',
          description04: ''
        }
      },
      model: {
        description01: 'Met het ASK platform kunnen ontwikkelaars overal, altijd en vanaf vaste en mobiele apparaten apps maken. Het ASK platform is ingericht om voor iedere organisatie te bouwen. Het is bovendien dezelfde basis waarop ASK de commerciële apps StandBy en TeamUp heeft gebouwd.',
        description02: 'Met een gebruiksvriendelijke API en tools is het eenvoudig om applicaties te ontwikkelen op het ASK platform. Deze apps verbinden teamleden onderling beter met elkaar, waardoor betere individuele en teamprestaties worden gehaald.'
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


    home: {
      platform: {
        title: 'ASK Platform',
        introTitle: 'Meet the ASK Platform',
        intro: 'Building intelligent applications to support your team.',
        contextAwarenessTitle: 'ASK Platform is context-aware',
        contextAwareness: 'Providing access to team members\' state, network and timeline.',
        communicationTitle: 'ASK Platform is communicative',
        communication: 'Facilitating multichannel dialogs within your team.',
        proActiveTitle: 'ASK Platform is proactive',
        proActive: 'Acting proactively with its continuous monitoring and guarding of goals.',
        multiDeviceTitle: 'ASK Platform is multi-device',
        multiDevice: 'Working across multiple devices.'
      },
      products: {
        title: 'Products',
        standby: 'Insight in the readiness beforehand, and not only after the alarm has gone off. Online schedules and alarm-receivers only solve part of the problem. That\'s why ASK has developed Standby.',
        teamup: 'ASK believes that ICT should support healthcare. Your employees don\'t want to spend much time on administrative tasks. They want to focus on providing care.',
        joinus: 'Flexible staffing has many different aspects: recruitment, availability monitoring, planning and dispatching. JoinUs is the application to fast exchange information about flexible work.',
        blankTitle: 'Your Application',
        blankText: 'We provide you with a cloud API on the ASK Platform with which you can build your own intelligent applications.'
      },
      casesPreview: {
        title: 'References',
        postnl: 'ASK helps PostNL by flexibly scheduling mail-sorters\' shifts. When doing this, ASK takes into account the required capacity, individual preferences and labor laws.',
        knrm01: '"ASK makes sure that KNRM always has enough rescue workers available and nearby to act in case of emergency."',
        knrm02: 'Rescue workers can use their pc, smartphone or telephone to indicate when they can be standby, and when they want a day off.',
        bz01: 'The Buurtzorg case has partly lead to the development of TeamUp',
        bz02: 'With the smartphone-app, ASK facilitates the internal allignments and communication. This way, less has to be arranged and more can be done.',
        olympia: 'ASK has helped Olympia bring job vacancies to the attention of temporary workers and directly collect responses from candidates via smartphone, telephone or e-mail.'
      }
    },


    company: {
      pressure: {
        title: 'Less management and more productivity',
        description01: 'ASK is an expert in the development of applications for making this possible! Your people can use ASK to mutually adjust the planning. At the same time they will have relevant information available in order to perform more efficiently.',
        description02: 'ASK applications make communicating the availability very straightforward. It can even be done automatically. Subsequently, the application will contact available people in case of shortage. This makes sure burdening of people is low and motivation is high.',
        description03: 'ASK applications facilitate the internal network of your personnel, so they are constantly connected to each other. This guarantees flexibility to rapidly deal with last-minute situations.',
        description04: 'ASK has been working on intelligent software for over 10 years. The applications that arise from this promote communication between people. For this, ASK uses the networks that people have established with each other. The applications are always multi-device: working from your own computer, smartphone or tablet.'
      },
      howWork: {
        title: 'How does ASK work?',
        description01: 'Traditional planning works on the basis of much, but usually outdated information. It uses a snapshot... On the other hand, ASK software is realtime: the information that is used is changeable and always up to date. This way the most optimal planning is available at any time.',
        description02: 'Because ASK, apart from using realtime, only selects the most relevant information, you can directly anticipate in unforseen situations. ASK delivers what you need, directly.'
      },
      personalNetwork: {
        title: 'Own Network',
        description: 'ASK is part of a group of high-tech companies: the Almende Group. As a result of this close collaboration, ASK is always at the forefront of technology.'
      }
    },


    jobs: {
      title: 'Jobs',
      keyResTitle: 'Key responsibilities',
      knowledgeTitle: 'Required knowledge and experience:',
      profileTitle: 'Your Profile:',
      offerTitle: 'We offer you:',
      contactTitle: 'Apply?',
      contactDescription01: 'Please contact Judith Engelsman:',

      iosdev: {
        title: 'iOS Developer (2x) at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced iOS Developers for several projects. The focus is on developing innovative iPhone and iPad applications. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of iOS (iPhone and iPad) applications of one of our products.',
          point02: 'Develop, enhance and maintain the iOS applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking',
          point02: 'Minimum 2 years of demonstrable experience in iOS app development',
          point03: 'Experience with Apple appstore & Distribution Process.',
          point04: 'Extensive knowledge of iOS SDK and Xcode',
          point05: 'Sufficient knowledge of Objective-C , HTML5, JSON',
          point06: 'Good knowledge of Object Oriented concepts and a strong passion for software development.',
          point07: 'Fully comfortable working in English, both in writing and spoken'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues'
        }
      },

      androiddev: {
        title: 'Android Developer at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced Android Developers for several projects. The focus is on developing innovative mobile applications for Android devices. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of Android applications of one of our products.',
          point02: 'Develop, enhance and maintain the Android applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking.',
          point02: 'Minimum 2 years of demonstrable experience in Android app development.',
          point03: 'Experience with Android Market place & Distribution Process.',
          point04: 'Excellent knowledge of Java.',
          point05: 'Good knowledge of Object Oriented concepts and a strong passion for software development.',
          point06: 'Sufficient knowledge of HTML5, JSON.',
          point07: 'Fully comfortable working in English, both in writing and spoken.'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues.'
        }
      },

      webdev: {
        title: 'Web Developer at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced Web Developers for several products. The focus is on developing innovative web applications. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of web applications of one of our products.',
          point02: 'Develop, enhance and maintain the web applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking.',
          point02: 'Minimum 2 years of demonstrable experience in web app development.',
          point03: 'Excellent knowledge of HTML, javascript, CSS, JSON.',
          point04: 'Fully comfortable working in English, both in writing and spoken.'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues.'
        }
      },

      businessConsultant: {
        title: 'Business Consultant',
        intro: 'For the extension of our sales team, we are looking for a Business Consultant. This function gives the responsibility of attracting new business and relationship management with customers. You are a figurehead of ASK Community Systems B.V. and you are not afraid of any commercial challenges.',
        knowledge: {
          point01: 'Completed HBO / university education in technical field of study (like Computer Technology, Information Technology or Business Administration)',
          point02: 'Minimum 3 years of experience in similar function',
          point03: 'Demonstrable successful commercial experience'
        },
        profile: {
          point01: 'You are enterprising and take initiative',
          point02: 'You are independent, show ownership and enjoy working in a team',
          point03: 'A good networker',
          point04: 'Communicative skills in word and writing',
          point05: 'Excellent English oral and writing skills ',
          point06: 'Able to make ASK services your own in short-term',
          point07: 'Preferably living in region of Rotterdam'
        },
        offer: {
          point01: 'Competitive benefits',
          point02: 'A company with potential',
          point03: 'An inspiring international working environment',
          point04: 'Plenty of possibilities for personal development within, as well as beyond your field of study'
        }
      },

      internshipTitle: 'Internships',
      internshipTitle02: 'Internship:',
      challengeTitle: 'The challenge',
      weSeekTitle: 'We seek',

      internshipClouds: {
        title: 'Research cloud platforms',
        challengeDescription01: 'ASK frequently uses multi-agent technology in its solutions. Two of our most important systems use this technology: the ASK Back-End for realtime coordination and exchange of information, and ASK-Fast, a platform for realtime communication between different parties.',
        challengeDescription02: 'Both platforms are active in the cloud (mainly Google App Engine), causing unlimited scalability. In order to make solid decisions about our cloud-based applications in the future, we would like to gain knowledge about other cloud solutions.',
        weSeekDescription01: 'That is why we are looking for an intern who is willing to carry out extensive comparative research into the different cloud platforms that are currently on the market. It will be a combination of a literature review and practical experiments, making it possible to measure the pros and cons of the different cloud platforms.'
      },

      internshipPersonalAlarm: {
        title: 'Personal alarm system',
        challengeDescription01: 'As an innovation project, ASK started the development of the Alarm app, a system where people can alarm other people in case of an emergency. Multiple types of emergencies can be imagined, varying from someone with health-care related issues (heart failure, epileptic attack, diabetes, etc) or more into the safety and security area, where lone workers would require assistance or lonely travellers are confronted with a violent situation.',
        challengeDescription02: 'The system is composed of an app, both for victims and helpers and a back-end with intelligence to alarm the right people and pass information on the situation to the appropriate people. So far 2 experiments have been done, one with a healthcare scenario and one with a security scenario, resulting into a demonstrator back-end and 2 demonstrator apps.',
        weSeekDescription01: 'ASK is looking for talented students to take the demonstrators to a next level and start the production of a system based upon the lessons learned so far.'
      },

      internshipP2000Alarm: {
        title: 'P2000 alarm system',
        challengeDescription01: '',
        challengeDescription02: '',
        weSeekDescription01: ''
      },

      internshipLearningSoftwareAgent: {
        title: 'Learning agent on multi-modal communication',
        challengeDescription01: 'The ASK-Fast platform enables users to communicate via multi-modal communication channels, including voice telephony, SMS, Email, in-app messages etc. These channels can be used to set-up one or simultaneous dialogues.',
        challengeDescription02: 'One of the systems using the multi-modal communication of the ASK-Fast platform is the JoinUs system, a system aiming to support recruiters in the flex-market to poll many flex-workers in parallel for their availability on a certain job. Each of these flex-workers can be contacted via one or multiple media, depending on their preference or the most effective type of communication.',
        challengeDescription03: 'In order to use the optimal mixture of preference and effectiveness, a learning agent is foreseen. This agent would combine static knowledge on the different communication media with user efficiency for the specific users.',
        weSeekDescription01: 'ASK is offering a graduation project to develop the learning agent on multi-modal communication. This development should be preceded by research on effectiveness of different communication media.'
      },

      internshipTeamup: {
        title: 'TeamUp in practice in different context',
        challengeDescription01: 'ASK has developed an availability/reachability system that allows users to set their availability for certain tasks at different  time periods. One of the applications of such a system is redirecting the main phone number of an SME to people who are set available.',
        challengeDescription02: 'In case no one is set available in the system, an automatic phone call will be made by the system to recruit available personnel for answering inbound phone calls.',
        weSeekDescription01: 'Setting availability in the current system is done via a web GUI and an inbound telephony IVR. ASK would like to renovate this system with our new agent platform - Eve. In this platform, personal software agents can be built to connect desktop sensors, smartphone sensors, and digital calendars to automatically determine user availability, therefore making the availability system smart and context-aware.'
      },

      workAt: {
        title: 'Work at ASK',
        description01: 'ASK Community Systems is an international software firm based in the Netherlands. ASK Community Systems focuses on the areas where information management and communication meet. The intelligent systems we create support human processes by utilizing software agent technology.',
        description02: 'Are you a motivated and passionate person? And willing to offer help to others? Do you enjoy working with other professionals in a casual, yet performance-oriented, working atmosphere? We invite you to look at our vacancies and apply.'
      }
    },


    cases: {
      problemTitle: 'The challenge:',
      goalsTitle: 'Goals:',
      solutionTitle: 'Solution:',
      quanResultsTitle: 'Quantitative results:',
      qualResultsTitle: 'Qualitative results:',

      postnl: {
        title: 'PostNL',
        factsTitle: 'ASK at PostNL in numbers:',
        fact01: 'Sorting centres in the Netherlands',
        fact02: 'Flexworkers in the system',
        fact03: 'Communication actions per month (phone/sms)',
        problem: {
          point01: 'Inefficient planning due to inaccurate relation between earlier-made schedule and actual demand;',
          point02: 'Surplus of employees and temporary workers;',
          point03: 'A desire to retain regular staff and to reduce the amount of temporary hours.'
        },
        goals: {
          point01: 'Making schedules based on individual preferences of employees; ',
          point02: 'A better ratio between fluctuating workload and actual personnel deployment;',
          point03: 'More rapid response to illness and absence.'
        },
        solution: {
          description01: 'PostNL selected ASK\'s solution, because this is in line with their Corporate Social Responsibility policy.',
          description02: 'The schedules will be generated based on the availability of the employees, which they will indicate themselves. The final planning will be communicated to the flexworkers via e-mail or sms.'
        },
        qualResults: {
          point01: 'Amount of temporary hours is reduced;',
          point02: 'No cutbacks in regular staff;',
          point03: 'More continuity because regular staff is used more often;',
          point04: 'Personnel is motivated because work and private life are more in tune.'
        },
        quanResults: {
          fact01: 'Cost reduction due to savings',
          fact02: 'Omission reduction (from 11% to 6%)',
          fact03: 'Total savings in 3 years'
        }
      },

      knrm: {
        title: 'KNRM',
        factsTitle: 'ASK at KNRM in numbers:',
        fact01: 'Rescue-stations use ASK',
        fact02: 'Rescue workers are supported',
        problem: {
          point01: 'A lot of unnecessary calls;',
          point02: 'Not always enough people available;',
          point03: 'Not much flexibility for voluntary rescuers.'
        },
        goals: {
          point01: 'Control function: provide insights on availability;',
          point02: 'Supporting coordinators;',
          point03: 'Facilitate volunteers with scheduling.'
        },
        solution: {
          description01: 'By using ASK, more than 1300 rescue workers at the 46 stations are filling in their availability online through the planboard. The coordinator keeps an overview on the joint schedule of his/her location. ASK automatically fills gaps in the schedule by gauging the availability by telephone.'
        },
        qualResults: {
          point01: 'Volunteering for KNRM is easier to combine with work/private life;',
          point02: ' ASK looks after the availiability;',
          point03: 'The skippers are unburdened, because they will only be notified when there is a shortage.'
        }
      },

      bz: {
        title: 'Buurtzorg',
        factsTitle: 'Buurtzorg in numbers:',
        fact01: 'People maximum per self-managing team',
        fact02: 'Locations in the Netherlands',
        problem: {
          point01: 'A lot of time is lost by travelling to the office in order to look into client-details on the computer;',
          point02: 'Communication between colleagues is poorly facilitated.'
        },
        goals: {
          point01: 'Give nurses access to a user-friendly mobile application;',
          point02: 'This application should support nurses in taking care of clients by giving them access to relevant information on the spot.'
        },
        solution: {
          description01: 'ASK Community Systems has, together with Ecare Services, developed the Buurtzorg App.  This app allows employees see the latest reports while travelling to the client. It fills in the nurses\' mobile needs.',
          description02: 'At the same time, the Buurtzorg App makes sure there are shorter lines: no more people sitting behind desks, but performers who also have the talents to think and use modern technology.'
        },
        qualResults: {
          description01: 'With the Buurtzorg App nurses can:',
          point01: 'See Basic data concerning clients;',
          point02: 'See Reports related to clients; ',
          point03: 'Capture and forward the amount of time spent with a client; ',
          point04: 'Contact clients or colleagues.'
        }
      },

      olympia: {
        title: 'Olympia',
        factsTitle: 'Olympia in numbers:',
        fact01: 'Registered temporary workers',
        fact02: 'Communication actions per quarter (telephone/sms)',
        problem: {
          point01: 'Limited productivity of consultants accross all branches;',
          point02: 'Consultants spend too much time on repetitive communication actions;',
          point03: 'Consultants need more time for personal contact when necessary.'
        },
        goals: {
          point01: 'Optimize core processes by automating repetitive and time-consuming telephone conversations;',
          point02: 'Make time available for personal contact between consultant and client;',
          point03: 'Establish a database with temporary workers that can be deployed immediately.'
        },
        solution: {
          description01: 'Olympia used ASK to support its consultants.',
          description02: 'When a job vacancy has to be filled, the consultant manually selects a group of suitable temporary workers. The consultant either records an audio message, or writes a text containing vital information about the job. ASK delivers this message to the selected temporary workers and directly collects the respones via telephone, sms or e-mail.',
          description03: 'The job can be placed and tracked online. This means that the consultant is not required to be in the same country as the candidates and the effective working time is expanded (up to 24/7). The system keeps approaching candidates, even when the consultant is not at his/her desk.'
        },
        qualResults: {
          point01: 'Daily operations are more efficient and flexible;',
          point02: 'A better situation in terms of competition;',
          point03: 'A job as consultant is more attractive, because ASK takes over the boring and repetitive tasks.'
        },
        quanResults: {
          fact01: 'Succesfull assignments',
          fact02: 'Income',
          fact03: 'Communication costs'
        }
      }
    },

    platform: {
      intro: {
        title: 'ASK Platform',
        description01: 'ASK delivers the platform businesses need to solve last minute challenges. ',
        description02: 'At that very moment the ASK platform jumps in to guarantee the availability of the right people, and thus knowledge and skills. Effectively combining the users’ context and dialogue with the user the ASK platform ensures the right solution for the last minute challenge.',
        description03: 'The ASK platform is also the basis of ASKs own products, including StandBy and TeamUp.'
      },
      need: {
        title: 'Get what you need when you need it',
        description01: 'There are numerous situations when you instantly need somebody for his expertise or skills (or the combined knowledge or skills of multiple persons) to solve a problem that has just occurred.',
        exampleTitle01: 'Example 1',
        example01: 'An incident just happened. The goal of your organisation is being on site at the incident as fast as possible within the standards. You then need the right amount of people on site and on time with the requested rescue expertises.',
        exampleTitle02: 'Example 2',
        example02: 'A package needs to be delivered within an hour at the other side of the country, but the driver just called in sick. You then need a replacement driver that is within an hour of pickup and destination. ',
        exampleTitle03: 'Example 3',
        example03: 'A meeting with an important client is scheduled last minute. You got the basics covered, but you need more input on the pricing models.',
        description02: 'The problem is that you don’t know on forehand if the right person is available for you at that very moment. If he is, you’re lucky. But if he’s not, you can get in trouble because you can’t get the help you need…'
      },
      businessGoals: {
        title: 'Guarding your business goals',
        description01: 'The platform from ASK prevents the trouble: it operates autonomously in ensuring you have the right person (with the right expertise) available at the right moment to the right job.',
        description02: 'From here, ASK goes beyond other software to secure a solution: by providing continuous monitoring and guarding of goals. If you the goal is availability, then ASK checks if there are enough people available for the coming period, based on their planning and location. ASK then escalates when an insolvable shortage is about to occur. This results in a very robust, reliable solution regarding the realisation of your business goals.'
      },
      context: {
        title: 'Context',
        needContext: {
          title: 'You need context',
          description01: 'A practical example: If your goal is to move around safely, you need eyes and ears to determine the location of objects. These objects are part of what we call ‘context’. This context prevents you from bumping into things. The same goes for technology: your applications need to know what is going on around them in order to determine your context. This can help you achieve a goal you have.'
        },
        inputContext: {
          title: 'Input for context',
          description01: 'ASK is aware of the users’ context by collecting information from the sensors in the devices they carry with them. It gives additional real-time information about the situation of the user. For a complete picture, ASK uses dialogs to enhance the provided context information, and to organise availability. Therefore, after user permission, ASK uses communication channels to gather information about the user’ behavior. These channels range from SMS, voice messages and e-mail to social media like Twitter.'
        },
        meaningfulInfo: {
          title: 'Making information meaningful',
          description01: 'ASK abstracts the user’s context information. It provides access to state (a description of the user’s situation), network (who do you know and who did you meet) and timeline (when did things happen and what do we predict to happen).'
        }
      },
      thePlatform: {
        title: 'What do you get: The platform',
        communicationIntensity: {
          title: 'Adapting to your communication intensity',
          description01: 'The ASK platform is a cloud platform. This provides you with infinite scalability. The advantage? You access the resources you need in line with your changing requirements. ASK scales to the intensity of your communications.',
          description02: 'To increase transparency, usage-based pricing models ensure that you only pay for the services you use.',
          description03: 'Also, the ASK cloud platform minimizes the risks associated with capital expenditure and the cost and effort of in-house operation and maintenance. You gain access to high-performance resources and professional solutions without needing to make upfront investment. And by reducing the need for local resources (i.e. expensive local servers), the cloud shrinks expenditure in the long term.'
        },
        nextGeneration: {
          title: 'The next generation platform',
          description01: 'ASK is the next generation Cloud Platform. It\'s a complete turn-key (developer friendly) PaaS solution. And ready to deploy in your cloud. ASK has a simple and effective API, based on open standards.',
          description02: 'Like lego bricks, imagine ASK’s apps and API as little building blocks you can use to build a cloud based communication solution: You can start with the bricks ASK has already build, for example on ',
          link01: 'ASK-Fast.com',
          description03: 'In the case that you can\'t find what you\'re looking for, you can off course build your own apps with the ASK API to create your own customized solution.',
          description04: 'On top of this we have made it really easy to implement ASK: it can be seamlessly integrated into your existing IT infrastructure.'
        }
      },
      model: {
        description01: 'The ASK platform allows developers to build great apps from anywhere, anytime and multi-device. With the ASK platform, developers can build apps for every organization, build on the same platform as the commercial ASK applications StandBy and TeamUp.',
        description02: 'The ASK platform with its user friendly API and tools make building apps easy. With the apps team are better connected, which results in higher performance.'
      }
    },

    notFound: {
      title: '404',
      description01: 'Page not found'
    }
  },


  /*----------GERMAN--------*/

  de: {
    general: {
      columnSize: '9',
      columnSizeOffset: '3',
      readMore: 'Mehr erfahren',
      cookieMessage: 'Wir verwenden Cookies um unsere Anwender besser kennenzulernen. Wenn Sie unsere Webseite verwenden, akzeptieren Sie unsere',
      cookieMessageLink: 'Datenschutzbestimmungen'
    },
    menu: {
      products: 'Produkte',
      platform: 'Platform',
      company: 'Unternehmen',
      cases: 'Referenzen'
    },
    contact: {
      address: 'Pfahlweg 11 | ',
      zipcode: ' D 65307 ',
      city: ' Bad Schwalbach (DE) | ',
      phone: '  +49 (0) 6124 720248 | ',
      email: ' info@ask-cs.de '
    },
    contactExtra: {
      address: 'Heemraadssingel 89 | ',
      zipcode: ' 3022 CA ',
      city: ' Rotterdam (NL) | ',
      phone: '  +31 (0)10 225 0130 | ',
      email: ' info@ask-cs.com '
    },


    home: {
      platform: {
        title: 'Die ASK Platform',
        introTitle: 'Lernen Sie die ASK Plattform kennen',
        intro: 'Entwickeln Sie intelligente Anwendungen zur Unterstützung der Kommunikation in Ihrem Team.',
        contextAwarenessTitle: 'Die ASK Plattform berücksichtigt viele Fazetten',
        contextAwareness: 'Übersicht über den Status von Teammitgliedern, das Netzwerk und den Zeitplan.',
        communicationTitle: 'Die ASK-Plattform ist kommunikativ',
        communication: 'Unterstützt mehrere Kommunikationsformen in ihrem Team.',
        proActiveTitle: 'Die ASK Plattform ist pro-aktiv',
        proActive: 'Ihre proaktiven Eigenschaften bestehen in der fortdauernden Überprüfung der Zielsetzungen und des aktuelles Fortschreitens.',
        multiDeviceTitle: 'Die ASK Plattform ist systemunabhängig',
        multiDevice: 'Arbeiten mit unterschiedlichsten Systemen.'
      },
      products: {
        title: 'Produkte',
        standby: 'Im Voraus einsehen können, wer verfügbar ist, anstatt erst, nachdem der Alarm ausgelöst wurde. Online-Pläne und Alarmempfänger liefern hierfür nur eine Notlösung. Deswegen hat ASK Standby entwickelt.',
        teamup: 'ASK ist wegweisend für IT unterstützte Dienste. Ihre Mitarbeiter sollten so wenig, wie möglich mit Verwaltungsaufgaben belastet werden, um sich der Qualität der Dienstleistung widmen zu können.',
        joinus: 'Flexibler Personaleinsatz bedeuted: Aquirieren, Verfügbarkeit kontrollieren, Planen und Einsetzen. Joinus ist eine App, mit der sämtliche Informationen rund um die flexible Arbeit schnell ausgetauscht werden.',
        blankTitle: 'Ihre App',
        blankText: 'Wir stellen Ihnen eine Cloud API zur Verfügung, mit der Sie intelligente Kommunikationsanwendungen entwickeln können.'
      },
      casesPreview: {
        title: 'Referenzen',
        postnl: 'ASK unterstützt die Niederländische Post in der flexiblen Personalplanung. ASK orientiert sich dabei an der benötigten Kapazität und individuellen Wünschen unter Berücksichtigung von Gesetzgebung und arbeitsrechtlichen Aspekten.',
        knrm01: 'ASK sorgt bei der KNRM dafür, dass immer ausreichend Rettungskräfte in der Umgebung erreichbar sind, um im Notfall eingesetzt werden zu können.',
        knrm02: 'Rettungskräfte können über PC, Smartphone oder Telefon selbst angeben, wann Sie in Bereitschaft stehen können und wann Sie einen freien Tag wünschen.',
        bz01: 'Die Nachbarschaftshilfe hat mit zur Entwicklung von TeamUp beigetragen.',
        bz02: 'Über die Smartphone App erleichtert ASK interne Abstimmung und Kommunikation. Auf diese Weise muss weniger geregelt und kann mehr getan werden.',
        olympia: 'ASK hat Olympia dabei unterstützt, freie Stellen Zeitarbeitern anzubieten und hat direkt Feedback der Kandidaten per Smartphone, Telefon und Email eingeholt.'
      }
    },


    company: {
      pressure: {
        title: 'Minimaler Verwaltungsaufwand',
        description01: 'ASK ist spezialisiert auf die Entwicklung von Anwendungen, welche dies ermöglichen. Ihre Mitarbeiter können mit ASK die Planung intern abstimmen. Dabei haben sie jederzeit die relevanten Informationen zur Hand, um die Arbeit effizienter zu gestalten.',
        description02: 'Die ASK Apps machen die Kommunikation über die Verfügbarkeit einfach. Sie kann auch automatisch erfolgen, indem die App bei Bedarf selbstständig verfügbare Personen kontaktiert. Das entlastet Ihre Mitarbeiter und erhöht deren Motivation.',
        description03: 'ASK Apps erleichtern den Informationsaustausch im internen Netzwerk Ihrer Mitarbeiter, sodass sie kontinuierlich miteinander in Verbindung stehen. Das garantiert Flexibilität und schnelles Reagieren auf last-minute Situationen.',
        description04: 'ASK Community Systems arbeitet seit mehr als 10 Jahren an intelligenter Software. Die entwickelten Apps erleichtern die Kommunikation zwischen Menschen. Hierfür nutzt ASK das zwischen den Menschen bestehende Netzwerk. Die Apps sind stets multi-device: sie funktionieren über den eigenen PC, Smartphone oder Tablet.'
      },
      howWork: {
        title: 'Wie funktioniert ASK?',
        description01: 'Die herkömmliche Planung basiert auf umfangreichen, teils veralterten Informationen. Sie verwendet eine Momentaufnahme... ASK-Software dagegen funktioniert in Echtzeit: Die Informationen, die verwendet werden, sind veränderlich und stets aktuell. Dadurch wird zu jedem Zeitpunkt ein optimale Planung möglich.',
        description02: 'Neben Echtzeitinformationen verwendet ASK nur die wirklich relevanten Informationen, sodass man sich schnell auf kurzfristig eintretende Änderungen einstellen kann. ASK liefert das, was benötigt wird direkt.',
        termsConditions: 'Impressum'
      },
      personalNetwork: {
        title: 'Persönliches Netzwerk',
        description: 'ASK ist Teil einer Gruppe von High-Tech-Unternehmen: die Almende Gruppe. Durch enge Kooperationen ist ASK immer an vorderster Stelle in der Technologie.'
      }
    },

    terms: {
      title: 'Impressum',
      germanOffice: {
        title: 'ASK Community Systems GmbH',
        intro: 'Unternehmen für die Entwicklung und den Vertrieb intelligenter Systeme zur Verbesserung der Kommunikation und Organisation.',
        address: {
          title: 'Anschrift',
          name: 'ASK Community Systems GmbH',
          street: 'Pfahlweg 11',
          zipcode: 'D 65307 Bad Schwalbach',
          phone: 'Telefon +49 (0) 6124 720248',
          fax: 'Telefax +49 (0) 6124 720249',
          email: 'E-Mail: info@ask-cs.com'
        },
        director: {
          title: 'Vertretungsberechtiger Geschäfsführer',
          name: 'Henri de Jong',
          register: 'Registergericht: Amtsgericht Wiesbaden',
          number: 'Registernummer: HRB 22483',
          description01: 'Verantwortlich für den Inhalt gemäß § 10 Absatz 3 MDStV: Henri de Jong (Anschrift wie oben).',
          description02: 'Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'
        }
      },
      privacyStatement: {
        title: 'Datenschutzhinweise',
        description01: 'ASK ist sehr an Ihrer Privatsphäre gelegen. Das Sammeln von personenbezogenen Daten über die ASK-Website unterliegt Ihrer Zustimmung. Sie entscheiden, ob Sie uns diese Daten bei einer Registrierung oder Bewerbung bekannt geben. ASK benutzt Ihre Angaben ausschließlich für eigene Zwecke und übermittelt diese Daten nicht an Dritte, es sei denn, eine Weitergabe wird durch nationale oder europäische Rechtsvorschriften erforderlich.',
        description02: 'ASK verwendet Cookies, um die Benutzung der Website zu optimieren. Falls Sie dies nicht möchten, bieten die meisten Internet Browser die Möglichkeit, die Cookie-Funktion abzuschalten.',
        description03: 'Für weitere Informationen, bei Fragen oder Bemerkungen schicken Sie uns eine Mail an info@ask-cs.com. ASK legt größten Wert auf die Schaffung einer vertraulichen und sicheren Umgebung für die Besucher seiner Website.'
      },
      disclaimer: {
        title: 'Haftungsausschluss',
        description01: 'Die auf den Internetseiten von ASK zur Verfügung gestellten Inhalte sind zuverlässig und sorgfältig erarbeitet. ASK übernimmt jedoch keinerlei Gewähr für die Vollständigkeit, Richtigkeit und Genauigkeit der Inhalte auf der Website. Änderungen der Website können jederzeit ohne vorherige Benachrichtigung vorgenommen werden. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Jegliche Vervielfältigung oder Modifizierung der zur Verfügung gestellten Materialien (textlicher, bildlicher, audiovisueller und sonstiger Art) oder von Teilen davon bedarf der ausdrücklichen schriftlichen Erlaubnis von ASK. ASK übernimmt keinerlei Haftung für Schäden oder Verpflichtungen, die im Zusammenhang mit der Nutzung dieser Website entstehen.'
      }
    },


    jobs: {
      title: 'Vacatures',
      keyResTitle: 'Key responsibilities',
      knowledgeTitle: 'Required knowledge and experience:',
      profileTitle: 'Your Profile:',
      offerTitle: 'We offer you:',
      contactTitle: 'Interesse?',
      contactDescription01: 'Neem contact op met Judith Engelsman:',

      iosdev: {
        title: 'iOS Developer (2x) at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced iOS Developers for several projects. The focus is on developing innovative iPhone and iPad applications. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of iOS (iPhone and iPad) applications of one of our products.',
          point02: 'Develop, enhance and maintain the iOS applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking',
          point02: 'Minimum 2 years of demonstrable experience in iOS app development',
          point03: 'Experience with Apple appstore & Distribution Process.',
          point04: 'Extensive knowledge of iOS SDK and Xcode',
          point05: 'Sufficient knowledge of Objective-C , HTML5, JSON',
          point06: 'Good knowledge of Object Oriented concepts and a strong passion for software development.',
          point07: 'Fully comfortable working in English, both in writing and spoken'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues'
        }
      },

      androiddev: {
        title: 'Android Developer at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced Android Developers for several projects. The focus is on developing innovative mobile applications for Android devices. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of Android applications of one of our products.',
          point02: 'Develop, enhance and maintain the Android applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking.',
          point02: 'Minimum 2 years of demonstrable experience in Android app development.',
          point03: 'Experience with Android Market place & Distribution Process.',
          point04: 'Excellent knowledge of Java.',
          point05: 'Good knowledge of Object Oriented concepts and a strong passion for software development.',
          point06: 'Sufficient knowledge of HTML5, JSON.',
          point07: 'Fully comfortable working in English, both in writing and spoken.'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues.'
        }
      },

      webdev: {
        title: 'Web Developer at Bandung, Indonesia',
        intro: 'ASK Community Systems B.V. is looking for experienced Web Developers for several products. The focus is on developing innovative web applications. Together with the team, you will strive for the best results.',
        keyRes: {
          point01: 'Ownership of web applications of one of our products.',
          point02: 'Develop, enhance and maintain the web applications.',
          point03: 'Provide estimates on development cycles.',
          point04: 'Implement conversion experiments (A/B tests).',
          point05: 'Partner with designers to help define and implement User Interface.',
          point06: 'Work with team members on server-side integration.'
        },
        knowledge: {
          point01: 'HBO-level of working and thinking.',
          point02: 'Minimum 2 years of demonstrable experience in web app development.',
          point03: 'Excellent knowledge of HTML, javascript, CSS, JSON.',
          point04: 'Fully comfortable working in English, both in writing and spoken.'
        },
        profile: {
          point01: 'Self-starter, highly motivated, team-player.',
          point02: 'Analytical skills.',
          point03: 'Collegial and flexible.',
          point04: 'Sense of responsibility and immune to stress.',
          point05: 'Strong interaction and design sense.',
          point06: 'Excellent attention to detail.',
          point07: 'Support our goals by visibly enjoying your work.',
          point08: 'Prepared to share your knowledge with your colleagues.'
        }
      },

      businessConsultant: {
        title: 'Business Consultant',
        intro: 'For the extension of our sales team, we are looking for a Business Consultant. This function gives the responsibility of attracting new business and relationship management with customers. You are a figurehead of ASK Community Systems B.V. and you are not afraid of any commercial challenges.',
        knowledge: {
          point01: 'Completed HBO / university education in technical field of study (like Computer Technology, Information Technology or Business Administration)',
          point02: 'Minimum 3 years of experience in similar function',
          point03: 'Demonstrable successful commercial experience'
        },
        profile: {
          point01: 'You are enterprising and take initiative',
          point02: 'You are independent, show ownership and enjoy working in a team',
          point03: 'A good networker',
          point04: 'Communicative skills in word and writing',
          point05: 'Excellent English oral and writing skills ',
          point06: 'Able to make ASK services your own in short-term',
          point07: 'Preferably living in region of Rotterdam'
        },
        offer: {
          point01: 'Competitive benefits',
          point02: 'A company with potential',
          point03: 'An inspiring international working environment',
          point04: 'Plenty of possibilities for personal development within, as well as beyond your field of study'
        }
      },


      internshipTitle: 'Stages',
      internshipTitle02: 'Stage:',
      challengeTitle: 'De uitdaging',
      weSeekTitle: 'Wie we zoeken',

      internshipClouds: {
        title: 'Onderzoek naar clouds',
        challengeDescription01: 'ASK maakt veelvuldig gebruik van multi-agenttechnologie in haar oplossingen. Twee van onze belangrijkste systemen maken gebruik van deze technologie: de ASK Back-End voor realtime coördinatie en informatie-uitwisseling, en ASK-Fast, een platform voor realtime communicatie tussen verschillende partijen. ',
        challengeDescription02: 'Beide platforms draaien in de cloud (voornamelijk Google App Engine), waardoor ze onbeperkt schaalbaar zijn. Om ook in de toekomst goede beslissingen te kunnen nemen over onze applicaties in de cloud, willen we graag meer weten over andere cloud oplossingen. ',
        weSeekDescription01: 'We zoeken daarom een stagiair die een uitgebreid vergelijkend onderzoek wil doen naar de verschillende cloudplatforms die op dit moment op de markt zijn. Het gaat daarbij om zowel een literatuurstudie als praktische experimenten waarbij de voors en tegens van de verschillende cloud platforms tegen elkaar kunnen worden afgewogen. '
      },

      internshipPersonalAlarm: {
        title: 'Personal alarm system',
        challengeDescription01: 'ASK werkt op dit moment aan de Alarm app: een innovatief systeem dat de juiste mensen alarmeert in geval van nood. Deze app kan gebruikt worden door bijvoorbeeld patiënten met epilepsie, diabetes of hartproblemen, mobiele beveiligers, medewerkers die in hun eentje op een gevaarlijke plek moeten werken, reizigers die worden geconfronteerd met geweld, enz. ',
        challengeDescription02: 'De applicatie bestaat uit een app (te gebruiken door slachtoffers én helpers) en een intelligente back-end. De back-end zorgt dat de meest geschikte persoon wordt gealarmeerd en dat de juiste informatie snel bij de juiste persoon terecht komt. De Alarm app is getest in twee experimentele situaties, namelijk binnen Zorg en binnen Veiligheid. ',
        weSeekDescription01: 'ASK-CS zoekt een stagiair die wil helpen deze pilotversie om te zetten naar een market ready systeem.'
      },

      internshipP2000Alarm: {
        title: 'P2000 alarm system',
        challengeDescription01: '',
        challengeDescription02: '',
        weSeekDescription01: ''
      },

      internshipLearningSoftwareAgent: {
        title: 'Een lerende software-agent voor multi-modale communicatie',
        challengeDescription01: 'Het ASK-Fast platform stelt gebruikers in staat om met verschillende partijen te communiceren via verschillende kanalen. Denk aan telefonie, SMS, Email, IM, in-app berichten, enz. Op deze manier kunnen één of meerdere dialogen worden opgezet.',
        challengeDescription02: 'Eén van de systemen die gebruik maken van ASK-Fast is JoinUs, een systeem dat recruiters helpt om veel flex-medewerkers tegelijk te polsen over hun beschikbaarheid voor een bepaalde taak. Elke flex-medewerker wordt afhankelijk van zijn/haar voorkeuren via één of meerdere kanalen aangesproken. ',
        challengeDescription03: 'Om tot een optimale mix van communicatiekanalen te komen, willen we een lerende software-agent ontwikkelen. Deze agent combineert de statische kennis over de verschillende communicatiekanalen, met de gebruikerspecifieke voorkeuren. ',
        weSeekDescription01: 'We zijn op zoek naar een afstudeerder die ons wil helpen bij het ontwikkelen van deze lerende software-agent. Onderdeel van de afstudeerstage is een onderzoek naar de effectiviteit van de verschillende communicatiekanalen. De resultaten van dit onderzoek worden gebruikt als input voor de agent. '
      },

      internshipTeamup: {
        title: 'TeamUp in de praktijk',
        challengeDescription01: 'Voor de zorgsector ontwikkelt ASK de oplossing TeamUp. Deze applicatie helpt teams van zorgverleners (zoals thuiszorgmedewerkers) om samen te werken met hun teamgenoten. Ze kunnen bijvoorbeeld elkaars status opvragen, ondersteuning vragen, of op locatie informatie over hun patiënten opzoeken.',
        challengeDescription02: 'ASK wil de TeamUp applicatie nu ook inzetten in andere domeinen, zoals sportteams, mantelzorgers, enz.',
        weSeekDescription01: 'We zoeken een stagiair die voor ons wil onderzoeken hoe TeamUp kan worden ingezet in dergelijke domeinen en welke toegevoegde waarde de applicatie kan hebben.'
      },

      workAt: {
        title: 'Werken bij ASK',
        description01: 'ASK Community Systems is een internationaal opererende softwareleverancier van Nederlandse bodem. ' +
        'ASK Community Systems richt zich op het vlak waar informatiemanagement en communicatie elkaar raken.' +
        'De intelligente systemen die wij maken ondersteunen menselijke processen door gebruik te maken van software-agenttechnologie.',
        description02: 'Ben je gemotiveerd en gepassioneerd met je werk bezig? En bereid om iets extra\'s te geven voor de klant? ' +
        'Werk je graag met andere professionals in een informele doch prestatiegerichte werksfeer? ' +
        'Dan nodigen we je graag uit onze vacatures te bekijken en te solliciteren.'
      }
    },


    cases: {
      problemTitle: 'Problemstellungen:',
      goalsTitle: 'Zielstellungen:',
      solutionTitle: 'Lösung:',
      quanResultsTitle: 'Quantitative Ergebnisse:',
      qualResultsTitle: 'Qualitative Ergebnisse:',

      postnl: {
        title: 'die Niederländische Post',
        factsTitle: 'ASK bei der Niederländischen Post in Zahlen:',
        fact01: 'Sortierzentren in den Niederlanden',
        fact02: 'Flexible Arbeitskräfte im System',
        fact03: 'Kommunikationshandlungen pro Monat (Tel/SMS)',
        problem: {
          point01: 'Ineffiziente Planung infolge Abweichungen der Vorausplanung von dem tatsächlichen Bedarf;',
          point02: 'Überschuss an Mitarbeitern und Zeitarbeitern;',
          point03: 'Feste Mitarbeiter binden und Zeitarbeit vermeiden.'
        },
        goals: {
          point01: 'Planung unter Berücksichtigung individueller Wünsche der Mitaberbeiter;',
          point02: 'Verhältnis zwischen wechselndem Arbeitsaufwand und tatsächlichem Mitarbeitereinsatz optimieren;',
          point03: 'schnelleres Reagieren auf Krankheit und Abwesenheit.'
        },
        solution: {
          description01: 'Die Niederländische Post hat sich in Abstimmung mit dem Betriebsrat für ASK als Lösung entschieden, weil ASK optimal zu ihren Zielstellungen passt.',
          description02: 'Die Einplanung von Postsortierkräften erfolgt fortan auf Basis der Verfügbarkeit der Mitarbeiter, die von ihnen selbst online angegeben wird. Die entgültige Planung wird per Email oder SMS den flexiblen Mitarbeitern mitgeteilt.'
        },
        qualResults: {
          point01: 'die Anzahl Überstunden wurde reduziert;',
          point02: 'keine Kündigungen von Festangestellten;',
          point03: 'Kontinuität, da mehr feste Arbeitskräfte zum Einsatz kommen;',
          point04: 'die Mitarbeitermotivation ist gestiegen, da Privatleben und Arbeit besser aufeinander abgestimmt sind.'
        },
        quanResults: {
          fact01: 'Vollzeitarbeitsplätze eingespart',
          fact02: 'weniger Ausfälle (von 11% auf 6%)',
          fact03: 'Ersparnis in 3 Jahren'
        }
      },

      knrm: {
        title: 'der KNRM',
        factsTitle: 'ASK bei der KNRM in Zahlen:',
        fact01: 'Rettungsstationen verwenden ASK',
        fact02: 'Rettungskräfte werden unterstützt',
        problem: {
          point01: 'häufig unnötiges Abrufen;',
          point02: 'nicht immer ausreichend Menschen verfügbar;',
          point03: 'wenig Flexibilität für die Freiwilligen'
        },
        goals: {
          point01: 'Übersicht, ob ausreichend Menschen verfügbar sind;',
          point02: 'Unterstützung der Koordinatoren;',
          point03: 'Erleichterung der Einplanung von Freiwilligen'
        },
        solution: {
          description01: 'Mit ASK geben die mehr als 1300 Rettungskräfte der 46 Stationen ihre Verfügbarkeit online ins Planboard ein. Der Koordinator erhält eine Übersicht über die Personalverfügbarkeit in seinem Standort. ASK schließt automatisch Lücken im Bereitsschaftdienst durch Erfragen der Verfügbarkeit übers Telefon.'
        },
        qualResults: {
          point01: 'Ehrenamtliche Tätigkeit für den KNRM ist leichter mit Arbeits- und Privatleben zu vereinbaren',
          point02: 'ASK sorgt für Beständigkeit (jederzeit ausreichend Retter verfügbar zu haben);',
          point03: 'die Skipper werden entlastet, da sie nur bei Personalmangel gerufen werden.'
        }
      },

      bz: {
        title: 'Nachbarschaftshilfe',
        factsTitle: 'Nachbarschaftshilfe in Zahlen:',
        fact01: 'Personen max. pro Team',
        fact02: 'Niederlassungen in den Niederlanden',
        problem: {
          point01: 'hoher Zeitverlust durch Anfahrtszeiten zum Büro, um Kundendaten elektronisch einzugeben;',
          point02: 'Kommunikation zwischen Kollegen ist ungenügend.'
        },
        goals: {
          point01: 'Krankenpfleger sollen Zugang zu einer benutzerfreundlichen mobilen System haben',
          point02: 'Dieses System soll ihnen jederorts Zugang zu relevanten Patienten/ Kundeninformationen bieten und damit die Pflege optimal unterstützen.'
        },
        solution: {
          description01: 'ASK Community Systems hat zusammen mit Ecare Services die Nachbarschaftshilfe App entwickelt. Diese App ermöglicht den Mitarbeitern auf dem Weg zum Kunden die letzten Berichte durchgehen zu können. Es bildet eine mobile Unterstützung der ambulanten Pflege.',
          description02: 'Gleichzeitig verkürzt die Nachbarschaftshilfe App Verwaltungswege: weniger Leute müssen hinterm Bildschirm sitzen, die Pflegekräfte können mitunter verborgende Talente entdecken und die moderne Technologie optimal nutzen.'
        },
        qualResults: {
          description01: 'Mit der Nachbarschaftshilfe App können Pfleger:',
          point01: 'Basisdaten zu den Kunden/ Patienten einsehen;',
          point02: 'Berichte bezüglich des Patienten einsehen und erstellen;',
          point03: 'Zeitschreibung bezogen auf die Versorgung des Patienten vornehmen;',
          point04: 'Kontakt mit Kunden oder Mitarbeitern herstellen.'
        }
      },

      olympia: {
        title: 'Olympia',
        factsTitle: 'ASK bei Olympia in Zahlen:',
        fact01: 'Registrierte Zeitarbeitskräfte',
        fact02: 'Kommunikationshandlungen pro Quartal (Tel./ SMS)',
        problem: {
          point01: 'Eingeschränkte Produktivität von Disponenten, die alle Branchen betrifft;',
          point02: 'Disponenten verbringen zu viel Zeit mit sich wiederholenden Kommunikationsaufgaben;',
          point03: 'Disponenten haben zu wenig Zeit für persönliche Kontakte mit den Stellenanwärtern.'
        },
        goals: {
          point01: 'Kernprozesse optimieren durch Automatisieren von sich wiederholenden, zeitraubenden Telefonaten;',
          point02: 'Zeit gewinnen für perönlichen Kontakt zwischen Disponenten und Kunden;',
          point03: 'Etablierung einer Datenbank von Zeitarbeitern, aus der die Einsatzmöglichkeiten sofort ersichtlich sind.'
        },
        solution: {
          description01: 'Das Olympia Zeitarbeitsbüro verwendet ASK, um seine Disponenten zu unterstützen.',
          description02: ' Wenn eine Stelle zu besetzen ist, wählt der Disponent manuell eine Gruppe geeigneter Zeitarbeiter aus. Der Disponent nimmt entweder eine Sprachnachricht auf oder schreibt einen Text mit den wesentlichen Informationen zu der Stelle. ASK sendet diese Nachricht zu den ausgewählten Zeitarbeitern und holt direkt Feedback per Telefon, SMS oder Email ein.',
          description03: 'Die Stelle kann online gestellt werden und die Besetzung verfolgt werden. Das bedeutet, dass der Disponent nicht notwendigerweise sich in demselben Land wie der Zeitarbeiter aufhalten muss und weiterhin, dass die Arbeitszeit erweitert wird ( bis 24/7). Das System kann Kandidaten auch außerhalb der Bürozeiten des Disponenten erreichen.'
        },
        qualResults: {
          point01: ' Das Tagesgeschäft ist effizienter und flexibler;',
          point02: 'die Wettbewerbsfähigkeit hat sich erhöht;',
          point03: 'die Tätigkeit als Disponent ist attraktiver geworden, weil ASK langwierige und sich wiederholende Aufgaben übernimmt.'
        },
        quanResults: {
          fact01: 'mehr Vermittlungen',
          fact02: 'Erlöse',
          fact03: 'Reduzierung der Kommunikationskosten'
        }
      }
    },

    platform: {
      intro: {
        title: 'Die ASK Platform',
        description01: 'ASK liefert Technologie, um bei kurzfristigen Änderungen auftretende Probleme zu vermeiden.',
        description02: 'ASK sorgt dafür, dass stets die richtigen Personen verfügbar sind. Dazu werden verschiedene Kommunikationsmittel eingesetzt mit der bspw. der aktuelle Aufenthalt einer Person mitberücksichtigt werden kann.',
        description03: 'Die ASK Plattform ist auch Basis für weitere ASK-Produkte, wie StandBy und TeamUp.'
      },
      need: {
        title: 'Sie erhalten das, was Sie brauchen, wann Sie es brauchen',
        description01: 'Es gibt zahlreiche Situationen, in denen Sie das Know-How eines anderen benötigen.',
        exampleTitle01: 'Beispiel 1',
        example01: 'Ein Unfall wurde gemeldet und Sie müssen so schnell, wie möglich, mit einer ausreichenden Anzahl dafür qualifizierter Personen vor Ort sein.',
        exampleTitle02: 'Beispiel 2',
        example02: 'Sie müssen innerhalb von einer Stunde ein Paket ausliefern. Der eingeplante Fahrer hat sich aber soeben krank gemeldet. Sie müssen einen Ersatzfahrer, der kurzfristig verfügbar ist, finden.',
        exampleTitle03: 'Beispiel 3',
        example03: 'Es findet in Kürze ein Treffen mit einem wichtigen Kunden statt. Dafür brauchen Sie kurzfristig noch das Feedback von einem Kollegen über ein zu erstellendes Angebot.',
        description02: 'Sie wissen nicht vorab, ob die richtige Person zum Zeitpunkt verfügbar ist. Falls Ja, haben Sie Glück, aber wenn nicht, könnte Sie das in Schwierigkeiten bringen.'
      },
      businessGoals: {
        title: 'Die Geschäftsziele im Auge behalten',
        description01: 'Die ASK Software erspart Ihnen diese Probleme. ASK funktioniert autonom und gewährleistet, dass die richtige Person mit den gewünschten Fähigkeiten zum richtigen Zeitpunkt verfügbar ist.',
        description02: 'ASK hebt sich von herkömmlicher Software dadurch hervor; dass fortdauernd die aktuelle mit der geplanten Situation überprüft und damit einen Echtzeitstatus geliefert wird. ASK ist ein selbstlernendes System, sodass ASK bei Bedarf immer schneller und effizienter die notwendigen Personen kontaktiert.'
      },
      context: {
        title: 'Kontext',
        needContext: {
          title: 'Sie brauchen Kontext',
          description01: 'Ein praktisches Beispiel: Um sich sicher zu bewegen braucht man Augen und Ohren mit denen man die Position von Objekten bestimmt. Diese Objekte sind Teil unseres Kontexts. Das gleiche gilt für die ASK-Software. Diese braucht Informationen, um zu wissen, was passiert, um auf Basis davon Entscheidungen zu treffen, die Ihnen beim Erreichen der Zielsetzungen helfen.'
        },
        inputContext: {
          title: 'Input für Kontext',
          description01: 'ASK kann z.B. die Sensoren in Smart-Phones für Kontext-Information verwenden, ggf. im Dialog mit dem Anwender. Ein Anwender-Profil kann weiter durch Analyse der Nutzung von Kommunikationskanälen wie Twitter, SMS und Sprachnachrichten erstellt werden.'
        },
        meaningfulInfo: {
          title: 'Information brauchbar machen',
          description01: 'Für ASK sind Kontext-Informationen wertvolle Hinweise: Ist die Person gerade verfügbar? Mit welchen Personen kommuniziert sie und wie sieht ihre Planung aus?'
        }
      },
      thePlatform: {
        title: 'Die ASK Plattform',
        communicationIntensity: {
          title: 'Auf Ihre Kommunikationsbedürfnisse zugeschnitten',
          description01: 'ASK ist eine sog. Cloud Anwendung. Dieses bietet Ihnen eine unbegrenzte Skalierbarkeit. Der Vorteil? Sie bezahlen nur für die Ressourcen und Funktionen, die Sie tatsächlich nutzen.',
          description02: 'Nutzungsabhängige Preismodelle erhöhen die Transparenz und sorgen dafür, dass Sie nur für die Leistungen bezahlen, die Sie in Anspruch nehmen.',
          description03: 'Mit der ASK cloud Plattform minimieren Sie auch Risiken und Investitionen, welche mit Inhouse Lösungen verbunden wären. Mittels der ASK Cloud erhalten Sie Zugang zu professionellen Lösungen ohne Vorab-Investition.'
        },
        nextGeneration: {
          title: 'Die Plattform der nächsten Generation',
          description01: 'ASK liefert die nächste Generation cloud-Plattform. Sie ist für Entwickler über eine einfache API leicht zugängliche PaaS-Lösung basierend auf open standards.',
          description02: 'Ähnlich dem Prinzip von Legosteinen können Sie mit den ASK-Apps und -API eine eigene cloud-basierte Kommunikationslösung konstruieren. Alternativ stehen Ihnen auch bereits von ASK vorgefertigde Lösungen zur Verfüging, z.B. auf ',
          link01: ' ASK-Fast.com',
          description03: 'Sie können selbstverständlich auf Basis der ASK-API eine eigene Kommunikationslösung entwickeln. ',
          description04: 'Sie können ASK schnell und einfach in Ihre bestehende IT-Infrastruktur integrieren.'
        }
      },
      model: {
        description01: 'Die ASK-Plattform ermöglicht auf vielfältige Art und Weise die Entwicklung von Apps und das jederzeit und von überall aus. Mit der ASK-Plattform können Programmierer für jede Organisation Apps entwickeln, die auf der derselben Plattform basieren, wie die kommerziell erhältlichen ASK- Apps Standby und Teamup.',
        description02: 'Die ASK-Plattform mit ihren anwenderfreundlichen API und Tools macht die Entwicklung von Apps einfach. Mit den Apps sind Teams besser untereinander verknüpft und arbeiten erfolgreicher.'
      }
    },

    notFound: {
      title: '404',
      description01: 'Seite nicht gefunden'
    }
  }


};


angular.module('AskWeb', []).
  constant('locals', localization).
  run(['$rootScope', 'locals', '$timeout', function ($rootScope, locals, $timeout) {


    function fixBoxes() {
      $timeout(
        function () {
          angular.element('.products .product.standBy .textPart').height('auto');
          angular.element('.products .product.teamUp .textPart').height('auto');
          angular.element('.products .product.blank .textPart').height('auto');

          var max = 0;

          angular.forEach(
            angular.element('.products .product .textPart'),
            function (product, index) {
              if (angular.element(product).height() >= max) {
                max = angular.element(product).height();
              }
            }
          );

          angular.element('.products .product.standBy .textPart').height(max);
          angular.element('.products .product.teamUp .textPart').height(max);
          angular.element('.products .product.blank .textPart').height(max);
        }
      )
    }

    fixBoxes();

    if (!localStorage.getItem('selectedLanguage')) {
      localStorage.setItem('selectedLanguage', 'nl');
    }

    $rootScope.showLangMenu = false;

    $rootScope.languages = ['de', 'en', 'nl'];

    var toggled = true;

    $rootScope.changeLang = function (lang) {
      fixBoxes();

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


//temporary for testing menu toggle mobile
$("#dropdownToggle").click(function () {
  if ($('#dropdownMenu').hasClass('show')) {
    $('#dropdownMenu').removeClass('show').addClass('hide');
  } else {
    $('#dropdownMenu').removeClass('hide').addClass('show');
  }
});
