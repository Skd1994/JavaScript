var str = ["hi","abc","celcome","hello","tyss","welcome","am"];
		var min = str[0];
		for(var i=0; i<str.length; i++) {
			if(min.length>str[i].length) {
				min = str[i];
				
			}
		}
		for(var i = 0; i<str.length; i++)
		{
			if(min.length==str[i].length)
			{
				console.log(str[i]);
            }
        }
        //hi
        //am