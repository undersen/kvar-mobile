'use strict';


(function() {
	this.app.factory('QuotationService', ['$http', '$q', 'ENV',
	function($http, $q, ENV) {


		return {

			createQuotation: function(quotation) {
				var defer = $q.defer();
				$http({
					url: ENV.LOCAL + "employees/"+employee.id+"/applications/"+applicationId+"/services/"+serviceId,
					method: "POST",
					headers: {
						'email': employee.email,
						'token': employee.authenticationToken
					},
					data: {
						service: {
							status: "EmployeeOk"
						}
					}
				}).then(function(serviceCreates) {
					defer.resolve(serviceCreates.data);
				}, function(serviceCreates) {


					defer.reject(serviceCreates.data);
				});
				return defer.promise;
			},

	}

	}]);
}).call(this);
