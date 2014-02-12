define app:
  version:  '@@version'
  released: '@@released'
  defaults:
    language: 'en'
  app:
    languages: [
      'en'
      'nl'
    ]
    nav:
      main: [
        'developers'
        'business'
        'dialogs'
        'prices'
        'about'
      ]
      user: [
        'register'
        'login'
      ]
      footer : [
        'jobs'
        'legal'
        'contact'
      ]
      subs:
        developers: [
          'documents'
          'faststart'
          'devmods'
        ]
        business: [
          'solutions'
          'benefits'
        ]
#        dialogs: [
#          'what'
#        ]
        about: [
          'team'
          'contact'
        ]