function firstNonRepeatedChar(str) {
 let n=str.length;
	for(let i=0;i<n;i++)
		{
			let char=str.charAt(i);
			let count=0;
			for(let j=0;j<n;j++)
				{
					if(char==str.charAt(j))
					{
						count++;
					}
				}
			    if(count==1)
					{
						return char;
					}
		}return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
