function TodoCtrl($scope){
	
	$scope.todos = [
		{text: 'Learn AngularJS', done:false},
		{text: 'Build an app', done:false},
		{text: 'Create MBO Sheets', done:false}
	];


	// this is how we find out how many tasks there are to do

	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};

	// this is where we add more todo's to the list

	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	};


	$scope.clearCompleted = function(){
		$scope.todos = _.filter($scope.todos,
			function(todo){
				return !todo.done;
			});
	};
}