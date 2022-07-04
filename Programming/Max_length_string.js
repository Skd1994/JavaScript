var str = ["hi","abc","celcome","hello","tyss","welcome","am"];
		var max = str[0];
		for(var i=0; i<str.length; i++) {
			if(max.length<str[i].length) {
				max = str[i];
				
			}
		}
		for(var i = 0; i<str.length; i++)
		{
			if(max.length==str[i].length)
			{
				console.log(str[i]);
            }
        }
        //celcome
        //welcome