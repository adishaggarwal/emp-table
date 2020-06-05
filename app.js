var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var actions = /** @class */ (function () {
    function actions() {
        var add = document.getElementById("add");
        add.addEventListener("click", this.addrow);
        this.temp = [''];
        this.numrows = this.getdata();
        for (var i = 0; i < this.numrows; i++) {
            this.id = i;
            var d = document.getElementById("" + i);
            d.addEventListener("click", this.deleterow);
            var p = document.getElementById("" + i + "" + i);
            p.addEventListener("click", this.editrow);
        }
    }
    actions.prototype.addrow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var kalesh, thebody, newlen, dnew, pnew, i, a, b, d, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert("Remember to fill a unique ID, else it will not work properly.");
                        return [4 /*yield*/, document.getElementById("t1body").getElementsByTagName("button")];
                    case 1:
                        kalesh = _a.sent();
                        thebody = document.getElementById("t1body");
                        newlen = kalesh.length;
                        console.log(newlen);
                        thebody.innerHTML += " <tr style=\"display:block\" id=\"newnew\">\n            <td><input type=\"text\" placeholder=\"\"></td>\n            <td><input type=\"text\" placeholder=\"\"></td>\n            <td><input type=\"text\" placeholder=\"\"></td>\n            <td><input type=\"email\" placeholder=\"\"></td>\n            <td><input type=\"number\" placeholder=\"\"></td>\n            <td><input type=\"number\" placeholder=\"\"></td>\n            <td><input type=\"text\" placeholder=\"\"></td>\n            <td><input type=\"number\" placeholder=\"\" id=\"theid\"></td>\n            <td><button id=\"newsave\" class=\"btn btn-primary\">SAVE</button></td>\n            <td><button id=\"newcancel\" class=\"btn btn-danger\">CANCEL</button></td>\n            </tr>";
                        dnew = document.getElementById("newcancel");
                        dnew.addEventListener("click", p1.deleterow);
                        pnew = document.getElementById("newsave");
                        pnew.addEventListener("click", p1.editrow);
                        console.log(kalesh);
                        for (i = 1; i < newlen; i = i + 2) {
                            console.log(kalesh[i].id);
                            a = "" + kalesh[i].id;
                            b = "" + kalesh[i].id + "" + kalesh[i].id;
                            d = document.getElementById("" + a);
                            d.addEventListener("click", p1.deleterow);
                            p = document.getElementById("" + b);
                            p.addEventListener("click", p1.editrow);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    actions.prototype.editrow = function () {
        var fid;
        var yo;
        var kid = 1;
        var lol = 7;
        if (this.id == "newsave" || document.getElementById("newcancel")) {
            var theid = document.getElementById("theid");
            var theval = theid.value;
            if (theval) {
                var therow = document.getElementById("newnew");
                therow.id = "row" + theval;
                var thesave = document.getElementById("newsave");
                thesave.id = "" + theval + "" + theval;
                var thedelete = document.getElementById("newcancel");
                thedelete.innerHTML = "DELETE";
                thedelete.id = "" + theval;
                fid = "" + theval;
                yo = "" + theval + "" + theval;
                lol = 99;
            }
            else {
                var rowid = document.getElementById("newnew");
                var theid_1 = document.getElementById("theid");
                var thesave = document.getElementById("newsave");
                var thecancel = document.getElementById("newcancel");
                theid_1.removeAttribute("id");
                thesave.removeAttribute("id");
                thecancel.removeAttribute("id");
                rowid.id = "fake";
                document.getElementById("fake").remove();
                fid = "nosorry";
                kid = 99;
            }
        }
        else {
            var ill = this.id;
            var num = ill;
            var len = Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
            var num1 = len / 2;
            var div = Math.pow(10, num1);
            var nid = num / div;
            fid = Math.floor(nid);
            yo = "" + num;
        }
        if (kid == 1) {
            if (document.getElementById("" + fid + "" + fid).innerHTML == "SAVE") {
                var b6 = "row" + fid;
                var xx6 = document.getElementById(b6).getElementsByTagName("input");
                var q6;
                for (q6 = 0; q6 < xx6.length; q6++) {
                    var index = xx6[q6];
                    if (q6 == 7) {
                        if (index.value) {
                            index.placeholder = index.value;
                        }
                    }
                    else {
                        index.placeholder = index.value;
                    }
                }
                if (lol == 99) {
                    p1.emp.push({
                        "FirstName": xx6[0].value,
                        "MiddleName": xx6[1].value,
                        "LastName": xx6[2].value,
                        "Email": xx6[3].value,
                        "phoneno": xx6[4].value,
                        "role": xx6[5].value,
                        "Address": xx6[6].value,
                        "id": xx6[7].value
                    });
                    p1.numrows = p1.numrows + 1;
                }
                var kalesh1 = document.getElementById("t1body").getElementsByTagName("button");
                for (var i = 1; i < kalesh1.length; i = i + 2) {
                    var num2 = kalesh1[i].id;
                    var b25 = "" + num2;
                    var b35 = "" + num2 + "" + num2;
                    var xx15 = document.getElementById("" + b25);
                    var xx25 = document.getElementById("" + b35);
                    if (b35 == yo) {
                        xx25.innerHTML = "EDIT";
                        xx15.innerHTML = "DELETE";
                        var b = "row" + fid;
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
                var b6 = "row" + fid;
                var xx6 = document.getElementById(b6).getElementsByTagName("input");
                var q60;
                for (q60 = 0; q60 < xx6.length; q60++) {
                    var index = xx6[q60];
                    index.value = index.placeholder;
                }
                var q6;
                for (q6 = 0; q6 < xx6.length; q6++) {
                    var index = xx6[q6];
                    p1.temp[q6] = index.placeholder;
                }
                var kalesh2 = document.getElementById("t1body").getElementsByTagName("button");
                for (var i = 1; i < kalesh2.length; i = i + 2) {
                    var num2 = kalesh2[i].id;
                    if (num2 == fid) {
                        var b2 = "" + fid + "" + fid;
                        var b3 = "row" + fid;
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
                        var b22 = "" + num2;
                        var b33 = "" + num2 + "" + num2;
                        var xx11 = document.getElementById("" + b22);
                        var xx22 = document.getElementById("" + b33);
                        xx11.style.display = "none";
                        xx22.style.display = "none";
                    }
                }
            }
        }
    };
    actions.prototype.deleterow = function () {
        var num;
        var kya = 1;
        if (this.id == "newcancel") {
            if (document.getElementById("theid").value) {
                var theid = document.getElementById("theid");
                var theval = theid.value;
                var therow = document.getElementById("newnew");
                therow.id = "row" + theval;
                var thesave = document.getElementById("newsave");
                thesave.innerHTML = "EDIT";
                thesave.id = "" + theval + "" + theval;
                var thedelete = document.getElementById("newcancel");
                thedelete.innerHTML = "DELETE";
                thedelete.id = "" + theval;
                num = "" + theval;
            }
            else {
                p1.editrow();
                kya = 99;
            }
        }
        else {
            num = this.id;
        }
        if (kya == 1) {
            if (document.getElementById("" + num).innerHTML == "CANCEL") {
                var h2 = "row" + this.id;
                var nh1 = this.id;
                var h22 = document.getElementById(h2);
                h22.innerHTML = "\n                            <td><input type=\"text\" placeholder=\"" + p1.temp[0] + "\" disabled></td>\n                            <td><input type=\"text\" placeholder=\"" + p1.temp[1] + "\" disabled></td>\n                            <td><input type=\"text\" placeholder=\"" + p1.temp[2] + "\" disabled></td>\n                            <td><input type=\"email\" placeholder=\"" + p1.temp[3] + "\" disabled></td>\n                            <td><input type=\"number\" placeholder=\"" + p1.temp[4] + "\" disabled></td>\n                            <td><input type=\"number\" placeholder=\"" + p1.temp[5] + "\" disabled></td>\n                            <td><input type=\"text\" placeholder=\"" + p1.temp[6] + "\" disabled></td>\n                            <td><input type=\"number\" placeholder=\"" + p1.temp[7] + "\" disabled></td>\n                            <td><button id=\"" + nh1 + nh1 + "\" class=\"btn btn-primary\">EDIT</button></td>\n                            <td><button id=\"" + nh1 + "\" class=\"btn btn-danger\">DELETE</button></td>";
                var r = "" + this.id + "" + this.id;
                var de = document.getElementById("" + nh1);
                de.addEventListener("click", p1.deleterow);
                var pe = document.getElementById(r);
                pe.addEventListener("click", p1.editrow);
                var num_1 = this.id;
                var len = Math.max(Math.floor(Math.log10(Math.abs(num_1))), 0) + 1;
                var num1 = len / 2;
                var div = 10 ^ num1;
                var nid = num_1 / div;
                var fid = Math.floor(nid);
                var yo = "" + num_1;
                var kalesh3 = document.getElementById("t1body").getElementsByTagName("button");
                for (var i = 1; i < kalesh3.length; i = i + 2) {
                    var num2 = kalesh3[i].id;
                    var b25 = "" + num2;
                    var b35 = "" + num2 + "" + num2;
                    var xx15 = document.getElementById("" + b25);
                    var xx25 = document.getElementById("" + b35);
                    xx15.style.display = "block";
                    xx25.style.display = "block";
                }
            }
            else {
                var tt;
                var deleteitem = "row" + num;
                var b1 = "" + num;
                var b2 = "" + num + "" + num;
                var xx = document.getElementById(deleteitem);
                var xx1 = document.getElementById(b1);
                var xx2 = document.getElementById(b2);
                xx.remove();
                p1.numrows = p1.numrows - 1;
                //xx.style.display="none";
                //xx1.style.display="none";
                //xx2.style.display="none";
            }
        }
    };
    actions.prototype.getdata = function () {
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
        var tbody = document.getElementById("t1body");
        tbody.innerHTML = "";
        for (var i = 0; i < this.emp.length; i++) {
            var newrow = tbody.insertRow(-1);
            newrow.setAttribute("id", "row" + this.emp[i].id);
            tbody.innerHTML += "\n            <td><input type=\"text\" placeholder=\"" + this.emp[i].FirstName + "\" disabled></td>\n            <td><input type=\"text\" placeholder=\"" + this.emp[i].MiddleName + "\" disabled></td>\n            <td><input type=\"text\" placeholder=\"" + this.emp[i].LastName + "\" disabled></td>\n            <td><input type=\"email\" placeholder=\"" + this.emp[i].Email + "\" disabled></td>\n            <td><input type=\"number\" placeholder=\"" + this.emp[i].phoneno + "\" disabled></td>\n            <td><input type=\"number\" placeholder=\"" + this.emp[i].role + "\" disabled></td>\n            <td><input type=\"text\" placeholder=\"" + this.emp[i].Address + "\" disabled></td>\n            <td><input type=\"number\" placeholder=\"" + this.emp[i].id + "\" disabled></td>\n            <td><button id=\"" + this.emp[i].id + this.emp[i].id + "\" class=\"btn btn-primary\">EDIT</button></td>\n            <td><button id=\"" + this.emp[i].id + "\" class=\"btn btn-danger\">DELETE</button></td>\n            ";
        }
        return this.emp.length;
    };
    return actions;
}());
var p1 = new actions();
