 var timer=null;
            function sMove(obj,attr,iTar)
            {
                
                clearInterval(obj.timer);
                obj.timer=setInterval(function(){
                if(attr=='opacity')
                {
                   var t=parseInt(parseFloat(getComputedStyle(obj,false)[attr])*100);
                }
                else{
                    var t=parseInt(getComputedStyle(obj,false)[attr]);
                }
                
                
                 var iSpeed=(iTar-t)/8;
                 
                 iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
                 if(t==iTar)
                 {
                     clearInterval(timer);
                 }
                 else{
                    
                    if(attr=='opacity')
                    {
                        obj.style[attr]=(t+iSpeed)/100;
                        
                    } 
                    else{
                       obj.style[attr]=t+iSpeed+'px';
                    }
                 }

                },30)

            }