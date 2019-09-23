class Calculator{
    constructor(){
        this.num = ""
    }
    getInput = (obj)=>{
        if(obj == 0 && this.num == ""){
            return
        }
        let lastElement = this.num[this.num.length-1]
        
        if(this.num != "" && (lastElement.charCodeAt(0)>=42 && lastElement.charCodeAt(0)<=47)){
            this.num += obj
            document.getElementById('result').innerHTML = obj
            return
        }
        this.num += obj
        document.getElementById('result').innerHTML += obj             
    }

    getOperation = (obj) =>{
        if(this.num != ""){
            this.num += obj
        }
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