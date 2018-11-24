var acolor=['red','green','blue','yellow'];
var c=0;
var  i=0;
function user(choice){
	return choice;
}
function sImon(){

	for(var int j=0; j<Infinity; j++)
	{
		c=Math.random()*3;
		setTimeout(document.getElementByID("color").style.background-color=acolor[c],2000);
		i=user(choice);
		if(i!=acolor[c])
		{
			break;
		}	
		else
		{
			result[j]=i;
			simon();
		}
	}
}
	
	