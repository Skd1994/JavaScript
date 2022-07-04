var a =  [300, 10, 50, 40 , 20, 30 ];
		var Fmax = 0;//a[i]for min
		var Smax = 0;//a[i]for min
		for (var i = 0; i < a.length; i++) {
			if(Fmax<a[i]) {//>
				Smax=Fmax;
				Fmax=a[i];
			}
			else if(Smax<a[i]) {//>
				Smax=a[i];
			}
		}
        console.log("first Maximum and second Maximum are " + Fmax + " " + Smax);
        //first Maximum and second Maximum are 300 50