var a = [1,0,1,0,1,1,0];
		//int a[] = {2,3,2,3,2,2,3};
		for(var i = 0; i<2; i++)
		{
			for(var j=0; j<a.length; j++)
			{
				if(a[i]==a[j])
				{
					console.log(a[j]+" ");     //1 1 1 1 0 0 0 
                }
            }
        }