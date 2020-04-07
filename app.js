"use strict";
class actions {
    constructor() {
        this.temp = [''];
        this.numrows = this.getdata();
        for (let i = 0; i < this.numrows; i++) {
            this.id = i;
            let d = document.getElementById("" + i);
            d.addEventListener("click", this.deleterow);
            let p = document.getElementById("" + i + "" + i);
            p.addEventListener("click", this.editrow);
        }
    }
    editrow() {
        let num = this.id;
        let len = Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
        let num1 = len / 2;
        let div = 10 ^ num1;
        let nid = num / div;
        let fid = Math.floor(nid);
        let yo = "" + num;
        if (document.getElementById("" + fid + "" + fid).innerHTML == "SAVE") {
            let b6 = "row" + fid;
            var xx6 = document.getElementById(b6).getElementsByTagName("input");
            var q6;
            for (q6 = 0; q6 < xx6.length; q6++) {
                var index = xx6[q6];
                index.placeholder = index.value;
            }
            var tt;
            for (tt = 0; tt < p1.numrows; tt++) {
                let num2 = p1.emp[tt].id;
                let b25 = "" + num2;
                let b35 = "" + num2 + "" + num2;
                var xx15 = document.getElementById("" + b25);
                var xx25 = document.getElementById("" + b35);
                if (b35 == yo) {
                    xx25.innerHTML = "EDIT";
                    xx15.innerHTML = "DELETE";
                    let b = "row" + fid;
                    var xx5 = document.getElementById(b).getElementsByTagName("input");
                    var q5;
                    for (q5 = 0; q5 < xx5.length; q5++) {
                        var index = xx5[q5];
                        index.disabled = true;
                    }
                }
                else {
                    xx15.style.display = "block";
                    xx25.style.display = "block";
                }
            }
        }
        else {
            let b6 = "row" + fid;
            var xx6 = document.getElementById(b6).getElementsByTagName("input");
            var q6;
            for (q6 = 0; q6 < xx6.length; q6++) {
                var index = xx6[q6];
                p1.temp[q6] = index.placeholder;
            }
            console.log(p1.temp);
            var pp;
            for (pp = 0; pp < p1.numrows; pp++) {
                let num2 = p1.emp[pp].id;
                if (p1.emp[pp].id == fid) {
                    let b2 = this.id;
                    let b3 = "row" + fid;
                    var xx1 = document.getElementById("" + fid);
                    var xx2 = document.getElementById(b2);
                    var xx3 = document.getElementById(b3).getElementsByTagName("input");
                    xx1.innerHTML = "CANCEL";
                    xx2.innerHTML = "SAVE";
                    var qq;
                    for (qq = 0; qq < xx3.length; qq++) {
                        var index = xx3[qq];
                        index.disabled = false;
                    }
                }
                else {
                    let b22 = "" + num2;
                    let b33 = "" + num2 + "" + num2;
                    var xx11 = document.getElementById("" + b22);
                    var xx22 = document.getElementById("" + b33);
                    xx11.style.display = "none";
                    xx22.style.display = "none";
                }
            }
        }
    }
    deleterow() {
        let num = this.id;
        if (document.getElementById("" + num).innerHTML == "CANCEL") {
            let h2 = "row" + this.id;
            let nh1 = this.id;
            var h22 = document.getElementById(h2);
            h22.innerHTML = `
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
            let r = "" + this.id + "" + this.id;
            let de = document.getElementById("" + nh1);
            de.addEventListener("click", p1.deleterow);
            let pe = document.getElementById(r);
            pe.addEventListener("click", p1.editrow);
            let num = this.id;
            let len = Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
            let num1 = len / 2;
            let div = 10 ^ num1;
            let nid = num / div;
            let fid = Math.floor(nid);
            let yo = "" + num;
            var tt;
            for (tt = 0; tt < p1.numrows; tt++) {
                let num2 = p1.emp[tt].id;
                let b25 = "" + num2;
                let b35 = "" + num2 + "" + num2;
                var xx15 = document.getElementById("" + b25);
                var xx25 = document.getElementById("" + b35);
                xx15.style.display = "block";
                xx25.style.display = "block";
            }
        }
        else {
            var tt;
            for (tt = 0; tt < p1.numrows; tt++) {
                if (p1.emp[tt].id == this.id) {
                    let deleteitem = "row" + this.id;
                    let b1 = this.id;
                    let b2 = "" + this.id + "" + this.id;
                    var xx = document.getElementById(deleteitem);
                    var xx1 = document.getElementById(b1);
                    var xx2 = document.getElementById(b2);
                    xx.style.display = "none";
                    xx1.style.display = "none";
                    xx2.style.display = "none";
                }
            }
        }
    }
    getdata() {
        this.emp = [
            {
                "FirstName": "Arman",
                "MiddleName": "deep",
                "LastName": "Singh",
                "Email": "abc@g.com",
                "phoneno": 789789999,
                "role": 0,
                "Address": "2402 ",
                "id": 0
            },
            {
                "FirstName": "Ojasve",
                "MiddleName": " ",
                "LastName": "Nanda",
                "Email": "xyz@ab.com",
                "phoneno": 99073478978,
                "role": 1,
                "Address": "2411",
                "id": 1
            },
            {
                "FirstName": "Ajay",
                "MiddleName": "Vir",
                "LastName": "Singh",
                "Email": "abub.com",
                "phoneno": 7897000978,
                "role": 0,
                "Address": "5523 ",
                "id": 2
            },
            {
                "FirstName": "Sai",
                "MiddleName": "rai",
                "LastName": "Sethi",
                "Email": "ab@ab.com",
                "phoneno": 75083478978,
                "role": 0,
                "Address": "3939 ",
                "id": 3
            },
            {
                "FirstName": "jas",
                "MiddleName": "",
                "LastName": "",
                "Email": "xyzb.com",
                "phoneno": 98873478978,
                "role": 2,
                "Address": "9999",
                "id": 4
            },
            {
                "FirstName": "Ross",
                "MiddleName": "",
                "LastName": "Geller",
                "Email": "ab.com",
                "phoneno": 78944444978,
                "role": 1,
                "Address": "3433",
                "id": 5
            }
        ];
        let tbody = document.getElementById("t1body");
        tbody.innerHTML = ``;
        for (let i = 0; i < this.emp.length; i++) {
            tbody.innerHTML += ` <tr style="display:block" id="row${this.emp[i].id}">
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
let p1 = new actions();