angular.module('app')
    .factory('sessionFactory',
        ['$window',
            function ($window){
                var sessionFactory=function(save,get,clear){
                    this.save=save;
                    this.get=get;
                    this.clear=clear;
                };

                sessionFactory.prototype.save= function save(key, value) {
                    $window.sessionStorage.setItem(key, value);
                };
                sessionFactory.prototype.get= function get(key) {
                    return $window.sessionStorage.getItem(key);
                };
                sessionFactory.prototype.clear=function clear() {
                    $window.sessionStorage.clear();
                };

                return sessionFactory()
            }
            /* function save(key, value) {
             $window.sessionStorage.setItem(key, value);
             },
             function get(key) {
             return $window.sessionStorage.getItem(key);
             },
             function clear() {
             $window.sessionStorage.clear();
             }*/
        ]);
