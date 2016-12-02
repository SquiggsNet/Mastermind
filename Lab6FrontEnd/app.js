/**
 * Created by inet2005 on 12/2/16.
 */

(function(){

    var app = angular.module('EmployApp',['ngResource']);

    app.factory('Employees', function($resource){

        return $resource('http://localhost:3000/employees/:emp_no', null, {'update': {method:'PUT'}});

    });

    app.controller('EmployController', function($scope, $timeout, Employees){

        $scope.employees = [];

        $scope.message = "";

        $scope.refreshTable = function(){
            Employees.query(function (data){

                $scope.employees = data;

            });
        };

        $scope.showEmployee = function(emp_no){
            Employees.get({emp_no:emp_no}, function(data){
                $scope.selectedEmployee = data;
            });
        };

        $scope.addEmployee = function(){

            var data = {
                birth_date: $scope.submittedBirthDate,
                first_name: $scope.submittedFirstName,
                last_name: $scope.submittedLastName,
                gender: $scope.submittedGender,
                hire_date: $scope.submittedHireDate
            };

            Employees.save(data)
                .$promise
                .then(
                    function(){
                        $scope.refreshTable();

                        $scope.submittedBirthDate = "";
                        $scope.submittedFirstName = "";
                        $scope.submittedLastName = "";
                        $scope.submittedGender = "";
                        $scope.submittedHireDate = "";

                        $scope.message = "Employee Successfully Added";
                        $scope.messageClass = 'alert alert-success';
                        $timeout(removeMessage, 2000);
                    },
                    function(){

                        $scope.message = "Error: Unable to Add Employee";
                        $scope.messageClass = 'alert alert-danger';
                        $timeout(removeMessage, 2000)

                    }
                )

        };

        $scope.updateEmployee = function(emp_no){

            var bday = document.getElementById("birthDate"+emp_no).innerHTML;
            var fname= document.getElementById("firstName"+emp_no).innerHTML;
            var lname= document.getElementById("lastName"+emp_no).innerHTML;
            var gender= document.getElementById("gender"+emp_no).innerHTML;
            var hdate= document.getElementById("hireDate"+emp_no).innerHTML;

            var data = {
                birth_date: bday,
                first_name: fname,
                last_name: lname,
                gender: gender,
                hire_date: hdate
            };

            Employees.update({emp_no: emp_no}, data)
                .$promise
                .then(
                    function(){
                        $scope.message = "Employee Successfully Updated";
                        $scope.messageClass = 'alert alert-success';
                        $timeout(removeMessage, 2000);
                    },
                    function(){
                        $scope.message = "Error: Unable to Update Employee";
                        $scope.messageClass = 'alert alert-danger';
                        $timeout(removeMessage, 2000);
                    });

        };

        $scope.deleteEmployee = function(emp_no){

            Employees.remove( {emp_no: emp_no})
                .$promise
                .then(
                    function(){
                        $scope.refreshTable();

                        $scope.message = "Employee Successfully Deleted";
                        $scope.messageClass = 'alert alert-success';
                        $timeout(removeMessage, 2000);
                    },
                    function(){
                        $scope.message = "Error: Unable to Delete Employee";
                        $scope.messageClass = 'alert alert-danger';
                        $timeout(removeMessage, 2000);
                    });

        };

        removeMessage = function(){
            $scope.message = "";
        };

        $scope.refreshTable();

    });

})();