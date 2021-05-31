function Solve() {
    var x = document.getElementById("uname").value;
    if(x =="")
    {
        alert("Please Enter the Score and Enter it in Comma Separated Format");
    }
    var s=0,c=0,p=0,r=0,l=0; 
    var t = new Array();
     t = x.split(",");
     for(i=0;i<t.length;i++)
     {
         if(i==0)
         {
          s=t[i];
          s=parseInt(s);
         }
         else if(i==1)
         {
          c=2*t[i]
          c=parseInt(c);
         }
         else if(i==2)
         {
          p=3*t[i];
          p=parseInt(p);
         }
         else if(i==3)
         {
          r=4*t[i];
          r=parseInt(r);
         }
         else if(i==4)
         {
             l=6*t[i];
             l=parseInt(l);
         }
     }
     var t3 = s+c+p+r+l;
     if(isNaN(t3))
     {
         t3="";
     }
     document.getElementById("done").innerHTML = t3;
  }
