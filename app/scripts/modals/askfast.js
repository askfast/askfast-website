define(
  ['modals/modals'],
  function (modals)
  {
    'use strict';

    modals.factory('AskFast',
      [
        '$resource', '$q', '$location', '$rootScope',
        function ($resource, $q, $location, $rootScope)
        {
          var AskFast = $resource(
            $rootScope.config.host + '/:action/:id',
            {},
            {
              register: {
                method: 'GET',
                params: {
                  action:   'register',
                  name:     '',
                  username: '',
                  password: '',
                  phone:    '',
                  verification: ''
                }
              },
              registerVerify: {
                method: 'GET',
                params: {
                  action: 'register_verify',
                  id: '',
                  code: ''
                }
              },
              resendVerify: {
                method: 'GET',
                params: {
                  action: 'resend_verify',
                  code: '',
                  verification: ''
                }
              },
              login: {
                method: 'GET',
                params: {
                  action:   'login',
                  username: '',
                  password: ''
                }
              },
              logout: {
                method: 'GET',
                params: {
                  action: 'logout'
                }
              },
              authorizedApp: {
                method: 'GET',
                params: {
                  action: 'authorized_app'
                }
              },
              info: {
                method: 'GET',
                params: {
                  action: 'info'
                }
              },
              getDialog: {
                method: 'GET',
                params: {
                  action: 'dialog'
                }
              },
              createDialog: {
                method: 'POST',
                params: {
                  action: 'dialog'
                }
              },
              getAdapters: {
                method: 'GET',
                params: {
                  action: 'adapter'
                }
              },
              createAdapter: {
                method: 'POST',
                params: {
                  action: 'adapter',
                  id: ''
                }
              },
              freeAdapters: {
                method: 'GET',
                params: {
                  action: 'free_adapters'
                }
              },
              key: {
                method: 'GET',
                params: {
                  action: 'key'
                }
              },
              getAccessToken: {
                method: 'POST',
                params: {
                  action: 'keyserver',
                  id: 'token'
                }
              }
            }
          );


          /**
           * User login
           */
          AskFast.prototype.login = function (username, password)
          {
            var deferred = $q.defer();

            AskFast.login.process(
              {
                username: username,
                password: password
              },
              function (result)
              {
                if (angular.equals(result, []))
                {
                  deferred.reject('Something went wrong with login!');
                }
                else
                {
                  deferred.resolve(result);
                }
              },
              function (error)
              {
                deferred.resolve(error);
              }
            );

            return deferred.promise;
          };


          /**
           * User logout
           */
          AskFast.prototype.logout = function ()
          {
            var deferred = $q.defer();

            AskFast.process(null,
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