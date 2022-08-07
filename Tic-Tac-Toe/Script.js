    var player='X';
    var xscore=0;
    var oscore=0;
    var clicks=0;
    var arr=Array(9).fill(null);
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    const boxes = document.querySelectorAll(".col-md-4");
    boxes.forEach(box => {
    box.addEventListener('click', play)
    }), false;

 

    function play(e)
    {   
        var clicked_id =e.target.id;
       
        if(!arr[clicked_id])
        {
      
        if(player=='X')
        {
            event.target.style.color = 'black';
            document.getElementById(clicked_id).innerHTML = "X";
            arr[clicked_id]='X';
            if(!won())
            player='O';
        
        }
        else if (player=='O')
        {
            event.target.style.color = 'white';
            document.getElementById(clicked_id).innerHTML = "O";
            arr[clicked_id]='O';
            if(!won())
            player='X';
        }
        clicks++;
        if(clicks==9 && !won())
        {
        document.getElementById('winner_id').innerHTML = 'Draw ! ';
        setTimeout(function(){restart();; }, 3500);
        return;
       }
    }

    
    console.log(clicks);
}
    console.log(arr);
    Restartbtn.addEventListener('click',restart)
    function restart()
    {
        arr.fill(null);
        document.getElementsByClassName('col-md-4').innerHTML = null;
        boxes.forEach(box=> {
            box.innerHTML=null;
        });
        clicks=0;
        document.getElementById('winner_id').innerHTML =null;
     
    }
    
    function won()
    {
      for(condition of winningConditions)
      {
          let [a,b,c]=condition;
          if(arr[a] && arr[a]==arr[b] && arr[a]==arr[c])
          {
             
              if(player=='X')
              {
                xscore+=1;
                document.getElementById('x_score').innerHTML = 'X score :'+xscore;
              }
              else
              {
                oscore+=1;
                document.getElementById('o_score').innerHTML = 'O score :'+oscore;
              }
         
              //alert(player + " WON !");
              document.getElementById('winner_id').innerHTML = 'winner is:'+player;
              setTimeout(function(){restart();; }, 3500);
              return true;
          }
          
    }
    
    return false;
}
    
