
angular.module('sessionFactory',[])
    .factory('sessionFactory',
        ['$window',
            function ($window){
                return {
                    save:function (key, value) {
                        console.log ("sessionFactory save");
                        $window.sessionStorage.setItem(key, value);
                    },
                    get:function(key) {
                        return $window.sessionStorage.getItem(key);
                    },
                    clear:function clear() {
                        $window.sessionStorage.clear();
                    }
                };
            }
        ]);
