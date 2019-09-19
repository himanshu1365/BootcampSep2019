var num;
showInput = (obj)=>{
    num = obj;
    document.getElementById('result').innerHTML += obj;
}

giveResult = ()=>{
    let data,result;
    data = document.getElementById('result').value;
    // console.log(data)
    // console.log(typeof(data))
    // result = eval(data);
    // document.getElementById('result').innerHTML = result;
}