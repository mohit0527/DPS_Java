function Result()
        {
             var Win;
             var out1="",out2="";
             var team1 =  document.getElementsByName("teamA")[0].value;
             var team2 =  document.getElementsByName("teamB")[0].value;
             var Score1 =  document.getElementsByName("score1")[0].value;
             var Score2 =  document.getElementsByName("score2")[0].value;
             var t1 = new Array();
              t1 = Score1.split("/");
              var t2 = new Array();
              t2 = Score2.split("/");
              Run1=t1[0];
              Run2=t2[0];
              out1=t1[1];
              out2=t2[1];
            if(team1 == "")
            {
                alert("Please Enter Team A Name");
                return false;
            }
            if(team1.search(/[a-zA-Z]{1,50}/)<0)
            {
                alert("Team Name Should alphabets and  not contain any special character or digit");
                return false;
            }
            if(Score1 =="")
            {
                alert("Please Enter Team A Score and Format of score should be Like Runs / wkts");
                return false;   
            }
            if(Run1.length >3 || Run1.length <= 0)
            {
                
                alert("Run can not be Zero and Should not be more than 3 digits");
                return false;
            }
            var s1=parseInt(out1);
            if(isNaN(s1))
            {
                alert("Please Enter No of Wickets Fallen");
                return false;
            }
            if(s1 > 11)
            {
               alert("Wickets fallen not more than 11 and not more than 2 digits");
               return false;
            }
            if(team2 == "")
            {
                alert("Please Enter Team B Name");
                return false;
            }
            if(team2.search(/[a-zA-Z]{1,50}/)<0)
            {
                alert("Team Name Should be alphabets and  not contain any special character or digit");
                return false;
            }
            if(team1.toLowerCase() == team2.toLowerCase())
            {
                alert("Both Team Names Cannot be Same");
                Win ="";
                document.getElementById("show").innerHTML = Win;
                return false;
            }
            if(Score2 =="")
            {
                alert("Please Enter Team B Score and Format of score should be Like Runs / wkts");
                return false;
            }
            if(Run2.length >3 || Run2.length <= 0)
            {
                alert("Run can not be Zero and Should not be more than 3 digits");
                return false;
            }
            var s2=parseInt(out2);
            if(isNaN(s2))
            {
                alert("Please Enter No of Wickets Fallen");
                return false;
            }
            if(s2>11)
            {
               alert("Wickets fallen not more than 11 and not more than 2 digits");
               return false;
            }
            v=Run2-Run1;
            if(v >= 7)
            {
                alert("Invalid Input check your team2 score again ")
                return false;
            }
            Run1=parseInt(Run1);
            Run2=parseInt(Run2);
            if(Run1 === Run2)
            {
                Win ="Match Tied";
                document.getElementById("show").innerHTML = Win;
            }
            else if(Run1 >=Run2)
            {
                x=Run1-Run2;
                Win=team1+" won by "+x+" runs";
                document.getElementById("show").innerHTML = Win;
            }
            else if(Run2>=Run1)
            {
                y=Run2-Run1
                Win = team2+" won by "+y+" runs";
                document.getElementById("show").innerHTML = Win;
            }
        }
