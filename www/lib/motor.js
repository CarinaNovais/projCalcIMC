
    function usar(){
        var h;
        var kg;
        var imc;
        var result = document.getElementById("resultado");
        var msg = document.getElementById("msg");

        h = parseFloat(document.getElementById("altura").value);  
        kg = parseFloat(document.getElementById("peso").value);
        imc = kg/(h*h);

        if(imc < 18.5){
        result.innerHTML = imc;
        msg.innerHTML = "Abaixo do Peso";
        document.getElementById('foto').src = "lib/img/magro.png";
           
        }else if(imc > 18.5 && imc < 24.9){
             result.innerHTML = imc;
              msg.innerHTML = "Parabéns!! Seu peso é ideal";
            document.getElementById('foto').src = "lib/img/normal.png";
        }else if (imc > 24.9){
             result.innerHTML = imc;
              msg.innerHTML = "Acima do Peso";
            document.getElementById('foto').src = "lib/img/gordo.png";
        }
    }

