'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

    $scope.alerts = [
      {
        icon: 'glyphicon-user',
        color: 'btn-success',
        number: '20,408',
        description: 'TOTAL CUSTOMERS' 
      },
      {
        icon: 'glyphicon-calendar',
        color: 'btn-primary',
        number: '8,382',
        description: 'UPCOMING EVENTS' 
      },
      {
        icon: 'glyphicon-edit',
        color: 'btn-success',
        number: '527',
        description: 'NEW CUSTOMERS IN 24H' 
      },
      {
        icon: 'glyphicon-record',
        color: 'btn-info',
        number: '85,000',
        description: 'EMAILS SENT' 
      },
      {
        icon: 'glyphicon-eye-open',
        color: 'btn-warning',
        number: '268',
        description: 'FOLLOW UPS REQUIRED' 
      },
      {
        icon: 'glyphicon-flag',
        color: 'btn-danger',
        number: '348',
        description: 'REFERRALS TO MODERATE' 
      },

    ];


	}
]);