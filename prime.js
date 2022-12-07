let n =15;
let result =true;


for(let i=2;i<=Math.sqrt(n);i++){
	if(n%i==0){

		result= false;

	}
}
if(result){
	console.log(" prime ")
}
else{
	console.log("Not prime ")
}