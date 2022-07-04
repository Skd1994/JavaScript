var a = [20,40,10,50,30];
		for(var i = 0; i<a.length; i++)
		{
			for(var j = i+1; j<a.length; j++)
			{
				if(a[i] < a[j])
				{
					var temp = a[i];
					a[i] = a[j];
					a[j] = temp;
				}
			}
		}
        console.log("fist maximum no is"+" "+a[0]);     //fist maximum no is 50
		