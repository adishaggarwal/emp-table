
class actions
{
    id:any;
    emp:any;
    numrows:number;
    temp: any[];

constructor()
{
    let add = document.getElementById("add")!;
    add.addEventListener("click", this.addrow);

    this.temp=[''];
    this.numrows=this.getdata();

    for(let i=0;i<this.numrows;i++)
    {  
         this.id=i;
           let d = document.getElementById(""+i)!;
    d.addEventListener("click", this.deleterow);
    
    let p = document.getElementById(""+i+ "" +i)!;
    p.addEventListener("click", this.editrow);
    }
   
}

    addrow()
    {
        alert("Remember to fill a unique ID, else it will not work properly.");
        let thebody= document.getElementById("t1body")!;
        
       
            thebody.innerHTML +=` <tr style="display:block" id="newnew">
            <td><input type="text" placeholder=""></td>
            <td><input type="text" placeholder=""></td>
            <td><input type="text" placeholder=""></td>
            <td><input type="email" placeholder=""></td>
            <td><input type="number" placeholder=""></td>
            <td><input type="number" placeholder=""></td>
            <td><input type="text" placeholder=""></td>
            <td><input type="number" placeholder="" id="theid"></td>
            <td><button id="newsave" class="btn btn-primary">SAVE</button></td>
            <td><button id="newcancel" class="btn btn-danger">CANCEL</button></td>
            </tr>`;

            let dnew = document.getElementById("newcancel")!;
            dnew.addEventListener("click", p1.deleterow);
            
            let pnew = document.getElementById("newsave")!;
            pnew.addEventListener("click", p1.editrow);


    }

    

    editrow()
    { 
        
        var fid;
        var yo;
        var kid=1;
        var lol=7;
        if (this.id == "newsave" || document.getElementById("newcancel")) {
            let theid = document.getElementById("theid")!;
            let theval = theid.value;
            if(theval)
            {
                console.log("ki aa");
                let therow = document.getElementById("newnew")!;
                therow.id = "row" + theval;
               
                let thesave = document.getElementById("newsave")!;
                thesave.id = "" + theval + "" + theval;

                let thedelete = document.getElementById("newcancel")!;
                thedelete.innerHTML = "DELETE";
                thedelete.id = "" + theval;

                fid = "" + theval;
                yo = "" + theval + "" + theval;
                lol=99;
            }
            else
            {
                let rowid = document.getElementById("newnew")!;
                rowid.style.display = "none";
                rowid.removeAttribute("id");
                let theid = document.getElementById("theid")!;
                let thesave = document.getElementById("newsave")!;
                let thecancel = document.getElementById("newcancel")!;
                theid.removeAttribute("id");
                thesave.removeAttribute("id");
                thecancel.removeAttribute("id");
                fid = "nosorry";
                kid=99;
            }
           
        }
       else{
        let ill=this.id;
        let num=ill;
            let len= Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
            let num1=len/2;
            let div=Math.pow(10,num1); 
            let nid=num/div; 
            fid= Math.floor(nid);
            yo=""+num;
       }
      
           

                    if(kid==1)
                    {  
                        //console.log(fid);
                        if(document.getElementById(""+fid+""+fid)!.innerHTML=="SAVE" )
                        {
                            
                            let b6="row"+ fid;
            
                            var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;
            
                            var q6;
                            for(q6=0;q6<xx6.length;q6++)
                            {
                                var index=xx6[q6];  
                                if(index.value)
                                 {
                                    index.placeholder=index.value;
                                 }
   
                            }
                            if(lol==99)
                                    {
                                        p1.emp.push( {
                                            "FirstName": xx6[0].value,
                                            "MiddleName":  xx6[1].value,
                                            "LastName":  xx6[2].value,
                                            "Email":  xx6[3].value,
                                            "phoneno":  xx6[4].value,
                                            "role":  xx6[5].value,
                                            "Address":  xx6[6].value,
                                            "id": xx6[7].value
                                        });

                                        p1.numrows=p1.numrows +1; 
                                    }
                            
                            
                            var tt;
                            for(tt=0;tt<p1.numrows;tt++)
                            {  
                                let num2=p1.emp[tt].id;
                                let b25=""+num2;
                                let b35=""+num2+ "" +num2;
                                var xx15= document.getElementById(""+b25)!;
                                var xx25= document.getElementById(""+b35)!;
                               
            
                                if(b35==yo)
                                {
                                        xx25.innerHTML="EDIT";
                                        xx15.innerHTML="DELETE";
                                        let b="row"+ fid;
            
                                        var xx5= document.getElementById(b)!.getElementsByTagName("input")!;
            
                                        var q5;
                                        for(q5=0;q5<xx5.length;q5++)
                                        {
                                            var index=xx5[q5];
                                            index.disabled=true;   
                                        }
                                }
                                else
                                {
                                    xx15.style.display="block";
                                    xx25.style.display="block";
                                }
                            }
                        }
                        

                                    else
                                    {
                                        
                                        let b6="row"+ fid;

                                        var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;

                                        var q60;
                                        for(q60=0;q60<xx6.length;q60++)
                                        {
                                            var index=xx6[q60];  
                                                index.value=index.placeholder;   
                                        }

                                        var q6;
                                        for(q6=0;q6<xx6.length;q6++)
                                        {
                                            var index=xx6[q6];   
                                            p1.temp[q6]=index.placeholder;
                                        }
                                    

                                        var pp;
                                        for(pp=0;pp<p1.numrows;pp++)
                                        {  
                                            
                                            
                                            let num2=p1.emp[pp].id;
                                            
                                            if(p1.emp[pp].id==fid)
                                            {
                                                
                                                let b2=this.id;
                                                
                                                let b3="row"+ fid;
                                
                                            
                                                    var xx1= document.getElementById(""+fid)!;
                                                    var xx2= document.getElementById(b2)!;
                                                    var xx3= document.getElementById(b3)!.getElementsByTagName("input")!;
                                            
                                                    xx1.innerHTML="CANCEL";
                                                    xx2.innerHTML="SAVE";
                                                    
                                                    
                                                    var qq;
                                                    for(qq=0;qq<xx3.length;qq++)
                                                    {
                                                        var index=xx3[qq];
                                                        index.disabled=false;
                                                        
                                                    }
                                            }
                                            else
                                            {
                                                
                                                let b22=""+num2;
                                                let b33=""+num2+ "" +num2;
                                                var xx11= document.getElementById(""+b22)!;
                                                var xx22= document.getElementById(""+b33)!;
                                                xx11.style.display="none";
                                                xx22.style.display="none";
                                            }
                                    }

                            
                                }
                    }

        

       
        
    }

    deleterow()
    {
        var num;
        var kya=1;

       if(this.id=="newcancel")
       {
           if(document.getElementById("theid")!.value){
        let theid = document.getElementById("theid")!;
            let theval = theid.value;
            let therow = document.getElementById("newnew")!;
            therow.id="row" + theval;
            let thesave = document.getElementById("newsave")!;
            thesave.innerHTML = "EDIT";
            thesave.id="" + theval + "" + theval;
            let thedelete = document.getElementById("newcancel")!;
            thedelete.innerHTML = "DELETE";
            thedelete.id="" + theval;
            num = "" + theval;
           }
           else{
               p1.editrow();
               kya=99;
           }
       }
        else
        {
            num=this.id;
        }
        if(kya==1)
        {
            if(document.getElementById(""+num)!.innerHTML=="CANCEL" )
            {
                
                let h2= "row"+ this.id;
                let nh1=this.id;
                           
                            var h22= document.getElementById(h2)!;

                            h22.innerHTML=`
                            <td><input type="text" placeholder="${p1.temp[0]}" disabled></td>
                            <td><input type="text" placeholder="${p1.temp[1]}" disabled></td>
                            <td><input type="text" placeholder="${p1.temp[2]}" disabled></td>
                            <td><input type="email" placeholder="${p1.temp[3]}" disabled></td>
                            <td><input type="number" placeholder="${p1.temp[4]}" disabled></td>
                            <td><input type="number" placeholder="${p1.temp[5]}" disabled></td>
                            <td><input type="text" placeholder="${p1.temp[6]}" disabled></td>
                            <td><input type="number" placeholder="${p1.temp[7]}" disabled></td>
                            <td><button id="${nh1}${nh1}" class="btn btn-primary">EDIT</button></td>
                            <td><button id="${nh1}" class="btn btn-danger">DELETE</button></td>`;

                            
                            let r=""+ this.id + "" +this.id;
                            let de = document.getElementById(""+nh1)!;
                     de.addEventListener("click", p1.deleterow);
                     
                     let pe = document.getElementById(r)!;
                     pe.addEventListener("click", p1.editrow);

                            let num=this.id;
                            let len= Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
                            let num1=len/2;
                            let div=10^num1;
                            let nid=num/div; 
                            let fid= Math.floor(nid);
                            let yo=""+num;
                            
                var tt
                for(tt=0;tt<p1.numrows;tt++)
                {  
                    let num2=p1.emp[tt].id;
                    let b25=""+num2;
                    let b35=""+num2+ "" +num2;
                    var xx15= document.getElementById(""+b25)!;
                    var xx25= document.getElementById(""+b35)!;
                        xx15.style.display="block";
                        xx25.style.display="block";
                }
            }
            else
            {
                var tt;

                for(tt=0;tt<p1.numrows;tt++)
                {  
                     if(p1.emp[tt].id==num)
                      {
                          let deleteitem= "row"+ num;
                          let b1=""+num;
                          let b2=""+ num + "" + num;
                       var xx= document.getElementById(deleteitem)!;
                       var xx1= document.getElementById(b1)!;
                       var xx2= document.getElementById(b2)!;
                    xx.style.display="none";
                    xx1.style.display="none";
                    xx2.style.display="none";
                        
                      }
                }
            }
        }
        
    
               
                
     
    }


    getdata():number
    {
         this.emp=[
            {
                "FirstName": "Arman",
                "MiddleName": "deep",
                "LastName": "Singh",
                "Email": "abc@g.com",
                "phoneno": 789789999,
                "role": 0,
                "Address": "2402 ",
                "id":0
            },
            {
                "FirstName": "Ojasve",
                "MiddleName": " ",
                "LastName": "Nanda",
                "Email": "xyz@ab.com",
                "phoneno": 99073478978,
                "role": 1,
                "Address": "2411",
                "id":1
            },
            {
                "FirstName": "Ajay",
                "MiddleName": "Vir",
                "LastName": "Singh",
                "Email": "abub.com",
                "phoneno": 7897000978,
                "role": 0,
                "Address": "5523 ",
        "id":2
            },
            {
                "FirstName": "Sai",
                "MiddleName": "rai",
                "LastName": "Sethi",
                "Email": "ab@ab.com",
                "phoneno": 75083478978,
                "role": 0,
                "Address": "3939 ",
        "id":3
            },
            {
                "FirstName": "jas",
                "MiddleName": "",
                "LastName": "",
                "Email": "xyzb.com",
                "phoneno": 98873478978,
                "role": 2,
                "Address": "9999",
        "id":4
            },
            {
                "FirstName": "Ross",
                "MiddleName": "",
                "LastName": "Geller",
                "Email": "ab.com",
                "phoneno": 78944444978,
                "role": 1,
                "Address": "3433",
                "id":5
            }
        ];

        let tbody= document.getElementById("t1body")!;
        tbody.innerHTML =``;
        for(let i=0;i<this.emp.length;i++)
        {
            tbody.innerHTML +=` <tr style="display:block" id="row${this.emp[i].id}">
            <td><input type="text" placeholder="${this.emp[i].FirstName}" disabled></td>
            <td><input type="text" placeholder="${this.emp[i].MiddleName}" disabled></td>
            <td><input type="text" placeholder="${this.emp[i].LastName}" disabled></td>
            <td><input type="email" placeholder="${this.emp[i].Email}" disabled></td>
            <td><input type="number" placeholder="${this.emp[i].phoneno}" disabled></td>
            <td><input type="number" placeholder="${this.emp[i].role}" disabled></td>
            <td><input type="text" placeholder="${this.emp[i].Address}" disabled></td>
            <td><input type="number" placeholder="${this.emp[i].id}" disabled></td>
            <td><button id="${this.emp[i].id}${this.emp[i].id}" class="btn btn-primary">EDIT</button></td>
            <td><button id="${this.emp[i].id}" class="btn btn-danger">DELETE</button></td>
            </tr>`;

        }


        
        
        return this.emp.length;
    }
    
}



let p1=new actions();
