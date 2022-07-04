var a = [20,40,10,50,30];
	for(var i = 0; i<a.length; i++)
	{
		for(var j = i+1; j<a.length; j++)
		{
			if(a[i] < a[j]) //desc 50,40,30,20,10
			{
				var temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}
	}
	
    console.log("second maximum no is"+" "+a[1]);     //second maximum no is 40