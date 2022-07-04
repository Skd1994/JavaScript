var str = ["a", "ab", "abcd", "abcde", "abc"];
		var max = str[0];
				for(var i=1; i<str.length; i++)
		{
			if(max.length<str[i].length)
			{
				max = str[i];
			}
			
			
		}
		
        console.log(max);      //abcde