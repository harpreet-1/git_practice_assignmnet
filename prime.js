let num =15;
let result =true;
for(let i=2;i<Math.sqrt(num);i++){
	if(num%i==0){
		result= false;

	}
}
if(result){
	console.log(" prime ")
}
else{
	console.log("Not prime ")
}