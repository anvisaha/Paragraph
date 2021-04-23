var first_para = [];
var second_para = [];

function DisplayFirstPara() {
    //document.getElementById("para1").innerHTML = "":""  
    for(var i = 1; i <= 6; i++)
    {
        if((document.getElementById("input_number"+i).value)!="")
        {
            first_para.push(document.getElementById("input_number" + i).value);
            first_para.join(". ");
            document.getElementById("para1").innerHTML = first_para.join(". ");
        }
    }
    
}

function Display_second_para() {
    //document.getElementById("para2").innerHTML = "";
    for(var k = 1; k <= 6; k++)
    {
        if((document.getElementById("input_number2."+k).value)!="")
        {
            second_para.push(document.getElementById("input_number2." + k).value);
            second_para.join(". ");
            document.getElementById("para2").innerHTML = second_para.join(". ");
            
        }
    }
}