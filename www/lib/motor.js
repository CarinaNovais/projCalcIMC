
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
        document.getElementById('foto').src = "lib/img/abaixo.png";
           
        }else if(imc > 18.5 && imc < 24.9){
             result.innerHTML = imc;
              msg.innerHTML = "Parabéns!! Seu peso é ideal";
            document.getElementById('foto').src = "lib/img/ideal.png";

        }else if (imc > 25 && imc < 29.9){
             result.innerHTML = imc;
              msg.innerHTML = "Acima do Peso";
            document.getElementById('foto').src = "lib/img/acima.png";

        }else if (imc > 30 && imc < 34.9){
             result.innerHTML = imc;
              msg.innerHTML = "Obesidade Grau I";
            document.getElementById('foto').src = "lib/img/acima.png";
            
        }else if (imc > 35 && imc < 39.9){
             result.innerHTML = imc;
              msg.innerHTML = "Obesidade Grau II";
            document.getElementById('foto').src = "lib/img/acima.png";

        }else if (imc >= 40){
             result.innerHTML = imc;
              msg.innerHTML = "Obesidade Grau III ou Mórbida";
            document.getElementById('foto').src = "lib/img/acima.png";

    }

}