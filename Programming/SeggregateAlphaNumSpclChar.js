var s = "a1$b2@c3$%&89";
		var alpha="";
		var num="";
		var spcl="";
		for(var i=0; i<s.length; i++)
		{
			var ch = s.charAt(i);
			if(ch>='a' && ch<='z'||ch>'A' && ch<='Z') {
				alpha = alpha+ch;
			}
			else if(ch>='0' && ch<='9')
			{
				num = num+ch;
			}
			else
			{
				spcl = spcl+ch;
			}
		}
		console.log(alpha+" "+num+" "+spcl);    //abc 12389 $@$%&