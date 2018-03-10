console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappucino");
console.log("4. Green Tea");

var cnt = 0;

while(cnt <3){
	var choice = parseInt(prompt("메뉴를 선택해 주세요"));

	console.log(choice+"번 메뉴를 선택하셨습니다.");

	switch(choice){
		case 1:
			console.log("1번 메뉴는 1500원입니다.");
			break;
		case 2:
			console.log("2번 메뉴는 1800원입니다.");
			break;
		case 3:
			console.log("3번 메뉴는 2000원입니다.");
			break;
		case 4:
			console.log("4번 메뉴는 1300원입니다.");
			break;
		default:
			console.log("죄송합니다. 그런 메뉴는 없습니다.");
			break;
	}
	cnt++;
}
