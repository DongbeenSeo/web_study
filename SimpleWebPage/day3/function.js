function return_test(){
	console.log("실행되지 않는 코드");
	return;
	
}

function print(message){
	console.log("print function in");
	console.log(message);
	console.log("print function out");
}

function sum(arg1, arg2){
	var result = arg1+arg2;
	return result;
}