let  newarr=[];
let arr=[1,2,3,4,5,6,7,8];
arrayExample(...arr);//spread technique

function arrayExample(...arr)//rest passing array
{
	getArrLength(arr);
	multiplyByTwo(arr);
	sortRestArgs(arr);
}

function getArrLength(arr)
{
	console.log("Array length is: "+arr.length);
}

function multiplyByTwo(arr)
{
console.log("Multiplies of 2:");	
	arr.forEach(function(arrgs){
		newarr.push(arrgs*2);
	});
	
	newarr.forEach(function(arrgs){
		console.log("\t"+arrgs);
	});
}
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  console.log("Sort: "+ sortedArgs);
}
