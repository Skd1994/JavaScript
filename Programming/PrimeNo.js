var a = [2,3,4,5,13,11,6,7,8,9];
	for(var i=0; i<a.length; i++)  //i=1  i<=100
	{
		var n = a[i];              //n=i
		var j=2;
		while(n>=j)
		{
			if(n%j==0)
			{
				break;
			}
			{
				j++;
			}
		}
		if(n==j)
		{
			
            console.log(a[i]+" "); 
            //2 
            //3 
             //5
             //13
              //11
               //7
        }
    }