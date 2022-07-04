var s = "a%3b$45F#456";
		var sum = 0;
		for(var i=0; i<s.length; i++)
		{
			if(s.charAt(i)>='0' && s.charAt(i)<='9')
			{
				var n = s.charAt(i);
				a=Number(n)
				
				
				sum = sum + a;
			}
		}
		console.log(sum);     //27   