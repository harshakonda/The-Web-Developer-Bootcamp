function printReverse(array){
 	for(var i = array.length -1 ; i >= 0; i--){
 		 console.log(array[i]);
 		//return array[i]
 	}	
}

function newReverse(arr){
	var newArr = arr.reverse();
	console.log(newArr);
}

/*function isUniform(uniArr){
	var fisrtEle = uniArr[0];
	for(var i= 1 ; i < uniArr.length ; i++){
		if(fisrtEle !== uniArr[i]){
			return false
		}
	}
	return true
}*/

function isUniform(uniArr){
	var fisrtEle = uniArr[0];
	for(var i= 0; i < uniArr.length ; i++){
		if(uniArr[i] !== uniArr[i+1]){
			return false;			
		}
	}
	/*uniArr.forEach(function(element){debugger;
		if(fisrtEle !== element){
			return false
		}
	})*/
	return true;
}

function isUniform(uniArr){
	for(var i= 1; i < uniArr.length ; i++){
		if(uniArr[i-1] !== uniArr[i]){
			return false;			
		}

	}
	return true;
}



/*function sumArray(sum){
	var add = 0
	for(var i = 0 ; i < sum.length ; i++){
		add = add + sum[i];
	}
	return add
}*/
function sumArray(sum){// Not working in forEach ??
	var add =  0
	sum.forEach(function(element){;
		add = add + element ;
	})
	return add
}

function max(m){
	for(var i = 0 ; i < m.length ; i++){
		if (m[i] < m[i+1]){
			var maxi = m[i+1]
		}
	} return maxi;
}
function max1(m1){
	var max2 = Math.max(...m1);
	return max2
}

