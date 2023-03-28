function calculateMinCost() {
  //your code here

	var inpData=document.querySelector("input").value;
	var inpArr=inpData.split(",");
	for (var i = 0; i < inpArr.length; i++) {
		inpArr[i]=Number(inpArr[i]);
	}
	var cost=0;
	while (inpArr.length > 1){
		inpArr.sort(function (a,b){return a-b})
		var newRope=inpArr[0]+inpArr[1];
		cost +=newRope;

		//delete first two elements
		inpArr.splice(0,2);
		inpArr.push(newRope);
	}
	document.getElementById('result').textContent=cost;
}
