angular.module("app",['sessionService','sessionFactory'])

    .controller('sessionController', [
        '$window','sessionService','sessionFactory',
        function ($window,sessionService,sessionFactory) {
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
                obj.model = {
                    name: obj.model.name,
                    nickname: obj.model.nickname,
                    status: 'Saved by Factory on ' + new Date()
                };


            };

            obj.clearFactorySession=function clearFactorySession(){
                obj.mySessionFactory.clear();
                obj.model = {
                                 name: null,
                                 nickname: null,
                                 status: null
                             };

            }



        }
    ]);