fetch("https://jsonplaceholder.typicode.com/users").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length>0){
                    var temp="";
                    data.forEach((u)=>{
                        temp +="<tr>";
                        temp +="<td>"+u.id+"</td>";
                        temp +="<td>"+u.name+"</td>";
                        temp +="<td>"+u.email+"</td>";
                        temp +="<td>"+"<li>"+"Street: "+u.address.street+","+"</li>"+
                                    "<li>"+"Suite: "+ u.address.suite+"</li>"+
                                     "<li>"+"City: "+u.address.city+"</li>"+
                                     "<li>"+"Zipcode: "+u.address.zipcode+"</li>"+"</td></tr>";
                    }
                    )
                    document.getElementById("data").innerHTML=temp;
                }
            }
        )
    }
)