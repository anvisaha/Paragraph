var first_para1=[];
var second_para2=[];
function DisplayFirstPara() {
    //document.getElementById("para1").innerHTML = "":""  
    for(var i = 1; i <= 6; i++)
    {
        if((document.getElementById("input_number"+i).value)!="")
        {
            first_para1.push(document.getElementById("input_number" + i).value);
            first_para1.join(". ");
            document.getElementById("para1").innerHTML = first_para1.join(". ");
        }
    }
    
}

function Display_second_para() {
    //document.getElementById("para2").innerHTML = "";
    for(var k = 1; k <= 6; k++)
    {
        if((document.getElementById("input_number"+k).value)!="")
        {
            second_para2.push(document.getElementById("input_number" + k).value);
            second_para2.join(". ");
            document.getElementById("para2").innerHTML = second_para2.join(". ");
            
        }
    }
}