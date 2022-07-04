var a = [10,20,30,40,50];
		for(var j=0; j<2; j++)
		{
			var temp = a[0];
			for(var i=1; i<a.length; i++)
			{
				a[i-1] = a[i];
			}
			a[a.length-1] = temp;
		}
			for(var x=0; x<a.length; x++)
			{
				console.log(a[x])    //30 40 50 10 20
            }
        