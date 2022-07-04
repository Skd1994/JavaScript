var s ="khatam Ta ta Bye bye";
		
		var str = s.split(" ");
		//STEP 1 : create a set collection and add all character of string
		LinkedHashSet<String> set == new LinkedHashSet<String>{};
		for(var i=0; i<str.length; i++)
		{
			set.add(str[i]);        //add the character to set if not present
			
		}
		//STEP 2:
		for( var word : set)        //Read the character from the set collection
		{
			var count = 0;
			for(var j=0; j<str.length; j++)     //Read the character from the String
			{
				if(word.equalsIgnoreCase(str[j]))  //STEP 2: compare each character of set with all the character of given string

				{
					count++;
					
					
				}
			}
			
            console.log(word+" "+count);
        }