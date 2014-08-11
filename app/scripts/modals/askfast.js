define(
  ['modals/modals'],
  function (modals)
  {
    'use strict';

    modals.factory('AskFast',
      [
        '$resource', '$q',
        function ($resource, $q)
        {
          var AskFast = $resource(
            'http://char-a-lot.appspot.com/rpc',
            {},
            {
              request: {
                method: 'POST',
                params: {}
              }
            }
          );


          /**
           * Contact form
           */
          AskFast.prototype.contact = function (contact)
          {
            var deferred = $q.defer();

            var data = {
              message: contact.message,
              sender: contact.name + ' ' +
                      contact.surname + ' <' +
                      contact.email + '>',
              subject: 'New message from AskFast, related to: ' + contact.subject
            };

            AskFast.request(
              {},
              {
                "method": "outboundCallWithMap",
                "params": {
                  "adapterID": "2dbe5b60-154a-11e3-b728-00007f000001",
                  "addressMap": {
                    "info@ask-fast.com": "Contact Inquiry"
                  },
                  "url": "http://askfastmarket1.appspot.com/resource/question/comment?message=" +
                    encodeURIComponent(data.message),
                  "publicKey": 	"",
                  "privateKey": 	"",
                  "senderName": data.sender,
                  "subject": 	data.subject
                }
              },
              function (result)
              {
                deferred.resolve(result);
              },
              function (error)
              {
                deferred.resolve({error: error});
              }
            );

            return deferred.promise;
          };


          return new AskFast();
        }
      ]
    );
  }
);