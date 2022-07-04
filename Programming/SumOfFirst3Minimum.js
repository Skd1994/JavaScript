var a = [20,40,10,50,30];
		for(var i = 0; i<a.length; i++)
		{
			for(var j = i+1; j<a.length; j++)
			{
				if(a[i] > a[j]) //asc 10,20,30,40,50
				{
					var temp = a[i];
					a[i] = a[j];
					a[j] = temp;
				}
			}
		}
		var sum = 0;
		for(var i = 0; i<3; i++)
		{
            //sum = a[i];    //30
			sum = sum+a[i];  //10,20,30   0+10  10+20  30+30
		}
		console.log(sum);  //60
