function Count(obj)
{
    var Content=obj.value
    var vow=0;
    var symb=0;
    var num=0;
    var length=Content.length
    var start=0
    document.getElementById("Character").innerHTML="No.Of Chracter's:"+length;
    for (i=start;i<length;i++)
    {
        if(Content[i] in [0,1,2,3,4,5,6,7,8,9])
        {
            num=num+1;
            console.log(num)
            document.getElementById("Number").innerHTML="No.of Numbers:"+ num;
        }
        
        else if(Content[i]=='a' || Content[i]=='e' || Content[i]=='i' ||Content[i]=='o' || Content[i]=='u'||Content[i]=='A' || Content[i]=='E' || Content[i]=='I' ||Content[i]=='O' || Content[i]=='U')
        {
            vow=vow+1;
            document.getElementById("Vowels").innerHTML="No.of Vowel's:"+vow;
        }
        else if (Content[i]=='!' || Content[i]=='@' || Content[i]=='#' ||Content[i]=='$' || Content[i]=='%'||Content[i]=='^' || Content[i]=='&' || Content[i]=='*' ||Content[i]=='(' || Content[i]==')'){
            symb=symb+1
            document.getElementById("Special_Character").innerHTML="No.of Special Character's:"+symb;
        }
        
    }
    start=start+1;
}

