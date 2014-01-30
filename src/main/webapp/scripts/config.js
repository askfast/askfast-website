(function() {
  define({
    app: {
      version: '@@version',
      released: '@@released',
      defaults: {
        language: 'en'
      },
      app: {
        languages: ['en', 'nl'],
        nav: {
          main: ['developers', 'business', 'dialogs', 'prices', 'about'],
          user: ['register', 'login'],
          footer: ['jobs', 'legal', 'contact'],
          subs: {
            developers: ['faststart', 'devmods', 'documents'],
            business: ['solutions', 'benefits'],
            dialogs: ['what'],
            about: ['team', 'contact']
          }
        }
      }
    }
  });

}).call(this);

//# sourceMappingURL=../../.tmp/scripts/config.js.map
