define(["app"],function(e){e.config(["$routeProvider",function(e){e.when("/home",{templateUrl:"views/home.html",controller:"promotional"}).when("/developers",{templateUrl:"views/developers.html",controller:"promotional"}).when("/business",{templateUrl:"views/business.html",controller:"promotional"}).when("/dialogs",{templateUrl:"views/dialogs.html",controller:"promotional"}).when("/prices",{templateUrl:"views/prices.html",controller:"promotional"}).when("/about",{templateUrl:"views/about.html",controller:"promotional"}).when("/legal",{templateUrl:"views/legal.html",controller:"promotional"}).when("/contact",{templateUrl:"views/contact.html",controller:"promotional"}).otherwise({redirectTo:"/home"})}])});