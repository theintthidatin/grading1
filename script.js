function total(){
    var sub1 = parseInt(document.getElementById("foren").value);
    var sub2 = parseInt(document.getElementById("info").value);
    var sub3 = parseInt(document.getElementById("pro").value);
    var sub4 = parseInt(document.getElementById("pj").value);
    var sub5 = parseInt(document.getElementById("vir").value);
    var sub6 = parseInt(document.getElementById("mic").value);
    var sub7 = parseInt(document.getElementById("micc").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100 || sub7>100){
    alert("Please enter your mark in range of 100");
    }else{
        var total = sub1+sub2+sub3+sub4+sub5+sub6+sub7;
        document.getElementById("total").innerHTML = total;
    }
}

function Average(){
    var sub1 = parseInt(document.getElementById("foren").value);
    var sub2 = parseInt(document.getElementById("info").value);
    var sub3 = parseInt(document.getElementById("pro").value);
    var sub4 = parseInt(document.getElementById("pj").value);
    var sub5 = parseInt(document.getElementById("vir").value);
    var sub6 = parseInt(document.getElementById("mic").value);
    var sub7 = parseInt(document.getElementById("micc").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100 || sub7>100){
    alert("Please enter your mark in range of 100");
    }else{
        var total = sub1+sub2+sub3+sub4+sub5+sub6+sub7;
        var Ave=Math.round(total/7);
        document.getElementById("average").innerHTML= Ave;
    }
}

function grade(){
    var sub1 = parseInt(document.getElementById("foren").value);
    var sub2 = parseInt(document.getElementById("info").value);
    var sub3 = parseInt(document.getElementById("pro").value);
    var sub4 = parseInt(document.getElementById("pj").value);
    var sub5 = parseInt(document.getElementById("vir").value);
    var sub6 = parseInt(document.getElementById("mic").value);
    var sub7 = parseInt(document.getElementById("micc").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100 || sub7>100){
    alert("Please enter your mark in range of 100");
    }else{
        var total = sub1+sub2+sub3+sub4+sub5+sub6+sub7;
        var Ave=total/7;

        if(Ave>=70 && Ave<=100){
        document.getElementById("grade").textContent= "Distinction";
        }else if(Ave>=60 && Ave<= 69){
        document.getElementById("grade").textContent= "Credit";
        }else if(Ave>=40 && Ave<= 59){
        document.getElementById("grade").textContent= "Pass";
        }else if(Ave<=39){
        document.getElementById("grade").textContent= "Fail";
        }
    }
}
