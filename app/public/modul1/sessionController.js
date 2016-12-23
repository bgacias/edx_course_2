angular.module("app",['sessionService'])

    .factory('sessionFactory',
        ['$window',
            function ($window){
                return {
                    save:function (key, value) {
                        console.log ("sessionFactory save");
                        $window.sessionStorage.setItem(key, value);
                    },
                    get:                 function(key) {
                        return $window.sessionStorage.getItem(key);
                    },
                    clear:            function clear() {
                        $window.sessionStorage.clear();
                    }
                };
            }
        ])



    .controller('sessionController', [
        'sessionService','sessionFactory',
        function (sessionService,sessionFactory) {
            var obj = this;

            obj.init=function(){
                //alert("");
                console.log("init");
            };
            // usant Service

            obj.getServiceSession = function () {
                obj.model = {
                    name: sessionService.get('name'),
                    nickname: sessionService.get('nickname'),
                    status: 'Retrieved by service on ' + new Date()
                };
            };
            obj.setServiceSession = function() {
                console.log("setServiceSession");
                sessionService.save('name', obj.model.name);
                sessionService.save('nickname', obj.model.nickname);
                obj.getServiceSession();
            };
            obj.clearServiceSession = function() {
                sessionService.clear();
                obj.getServiceSession();
            };

            // usant Factory

            obj.mySessionFactory = sessionFactory;
            console.log ( obj.mySessionFactory);

            obj.getFactorySession =function () {
                obj.model = {
                    name: obj.mySessionFactory.get('name'),
                    nickname: obj.mySessionFactory.get('nickname'),
                    status: 'Retrieved by Factory on ' + new Date()
                };
            };

            obj.setFactorySession= function setFactorySession() {
                obj.mySessionFactory.save('name', obj.model.name);
                obj.mySessionFactory.save('nickname', obj.model.nickname);
                console.log($window.sessionStorage);
                getFactorySession();
            };

            obj.clearFactorySession=function clearFactorySession(){
                obj.mySessionFactory.clear();
                getFactorySession();
            }



        }
    ]);