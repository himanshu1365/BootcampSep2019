class Calculator{
    constructor(){
        this.num = ""
    }
    getInput = (obj)=>{
        this.num += obj
        let len = this.num.length-1;
        if(obj == 0 && this.num == ""){
            return;
        }
        document.getElementById('result').innerHTML += obj      
    }

    getOperation = (obj) =>{
        this.num += obj
        document.getElementById('result').innerHTML = ""
    }

    showResult = ()=>{
        let result = eval(this.num)
        document.getElementById('result').innerHTML = result
        this.num = 0
    }

    clearOperation = ()=>{
        this.num = 0
        document.getElementById('result').innerHTML = ""
    }

    clearLastElement = ()=>{
        this.num = this.num.slice(0,this.num.length-1);
        document.getElementById('result').innerHTML = this.num;
    }
}

const cal = new Calculator()
