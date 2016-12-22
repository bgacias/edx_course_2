

angular.module("app",['sessionService'])
.controller('sessionController', [
        'sessionService',
        function (sessionService) {
            var obj = this;

            obj.init=function(){
                alert("");
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
/*

            var sessionFactory = function(){
                this.save = function(key, value) {
                    $window.sessionStorage.setItem(key, value);
                    };
                    this.get = function(key) {
                        return $window.sessionStorage.getItem(key);
                    };
                    this.clear = function() {
                        $window.sessionStorage.clear();
                };
            };
            return sessionFactory;


            var mySessionFactory = new sessionFactory();
            obj.getFactorySession = getFactorySession;
            obj.setFactorySession = setFactorySession;
            obj.clearFactorySession = clearFactorySession;

            function getFactorySession() {
                obj.model = {
                    name: mySessionFactory.get('name'),
                    nickname: mySessionFactory.get('nickname'),
                    status: 'Retrieved by Factory on ' + new Date()
                };
            }

            function setFactorySession() {

                mySessionFactory.save('name', obj.model.name);
                mySessionFactory.save('nickname', obj.model.nickname);
                console.log($window.sessionStorage);
                getFactorySession();
            }

            function clearFactorySession(){
                mySessionFactory.clear();
                getFactorySession();
            }

*/

        }
]);