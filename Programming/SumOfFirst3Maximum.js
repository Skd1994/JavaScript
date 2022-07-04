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
		var sum = 0;
		for(var i = 0; i<3; i++)
		{
            //sum = a[i];    //30
			sum = sum+a[i];  //50,40,30    0+50  50+40  90+30
		}
		console.log(sum);  //120
