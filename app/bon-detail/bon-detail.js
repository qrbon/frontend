angular.module('bonDetail', ['ngRoute']).component('bonDetail', {
    templateUrl: 'app/bon-detail/bon-detail.template.html',
    controller: function EventResultController(BackendService, $routeParams, $location, $scope) {
        var self = this;
        self.bonID = $routeParams.bonId;

        self.bon = BackendService.get({id: self.bonID})

       
    }
});