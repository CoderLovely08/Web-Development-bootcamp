var mystr = "";
var arr = mystr.split("\n");
var result = [];
arr.forEach(element => {
    var myarr = element.split("https:");
    myarr[1] = "https:" + myarr[1];
    result.push(myarr);
});
console.log(result);