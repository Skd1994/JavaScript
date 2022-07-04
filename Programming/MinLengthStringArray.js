var str = ["a", "ab", "abcd", "abcde", "abc"];
		var min = str[0];
				for(var i=1; i<str.length; i++)
		{
			if(min.length>str[i].length)
			{
				min = str[i];
			}
			
			
		}
		
        console.log(min);    //a