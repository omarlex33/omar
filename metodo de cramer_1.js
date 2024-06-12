	function.res() {
	 
	var a1=document.getElementById('a1').value;
	var b1=document.getElementById('b1').value;;
	var c1=document.getElementById('c1').value;

	var a2=document.getElementById('a2').value;
	var b2=document.getElementById('b2').value;
	var c2=document.getElementById('c2').value;

     var=det=((a1*b2)-(a2*b1));
     var=detx=((c1*b2)-(c2*b1));
     var=dety=((a1*c2)-(a2*c1));
     var x=(detx/det);
     var y=(dety/det);


	  solve(){
			const a1=parsedfloat(document.getElementById('a1').value)
			;
			const b1=parsedfloat(document.getElementById('b1').value)
			;
			const c1=parsedfloat(document.getElementById('c1').value)
			;
			const a2=parsedfloat(document.getElementById('a2').value)
			;
			const b2=parsedfloat(document.getElementById('b2').value)
			;
			const c2=parsedfloat(document.getElementById('c3').value)
			;



			const d=a1*b2-a2*b1;
			const dx=c1*b2-c2*b1;
			const dy=a1*c2-a2*c1;


			if (D ===0) {

				document.getElementById('x-result'.value='no hay solocion unica.');
				document.getElementById('y-result'.value='no hay solocion unica.');
			}else{
				const x=dx/d;
				dy/d;
				document.getElementById('x-result').value =x;
					document.getElementById('x-result').value =y;



			}

		}
		}



