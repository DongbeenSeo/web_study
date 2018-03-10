function makeCounterFunction(initVal){
	var cnt = initVal;
	function Increase(){
		cnt++;
		console.log(cnt);
	}
	return Increase;
}

var cnt1 = makeCounterFunction(0);
var cnt2 = makeCounterFunction(10);

cnt1();
cnt2();

console.log(cnt1);
console.log(cnt2);