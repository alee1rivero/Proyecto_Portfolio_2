function func_ej1(){
    let ej1_c1=parseFloat(document.getElementById("ej1_c1").value)
    let ej1_c2=parseFloat(document.getElementById("ej1_c2").value)
    let ej1_c3=parseFloat(document.getElementById("ej1_c3").value)

    if(ej1_c1>ej1_c2&&ej1_c1>ej1_c3) 
    {document.getElementById("ej1_resultado").value="Número 1 es el mayor"}
    if(ej1_c2>ej1_c1&&ej1_c2>ej1_c3) 
    {document.getElementById("ej1_resultado").value="Número 2 es el mayor"}
    if(ej1_c3>ej1_c2&&ej1_c3>ej1_c1) 
    {document.getElementById("ej1_resultado").value="Número 3 es el mayor"}
}

function func_ej2(){
    let ej2_c1=parseFloat(document.getElementById("ej2_c1").value)
    let ej2_c2=parseFloat(document.getElementById("ej2_c2").value)

    let ej2_suma=ej2_c1+ej2_c2

    document.getElementById("ej2_resultado").value=ej2_suma}

function func_ej3(){
        let ej3_c1=document.getElementById("ej3_c1").value
        let ej3_c2=parseFloat(document.getElementById("ej3_c2").value)
        let ej3_acu1 = ej3_c1

        for(let index=1 ; index<ej3_c2 ; index++)
        {ej3_acu1=ej3_acu1+ej3_c1}
        document.getElementById("ej3_resultado").value=ej3_acu1}

function func_ej4(){
            let ej4_c1=parseFloat(document.getElementById("ej4_c1").value)
            let ej4_c2=parseFloat(document.getElementById("ej4_c2").value)
            
            let ej4_conv1 = (ej4_c1-32)/1.8;
            let ej4_conv2 = (ej4_c2*1.8)+32
    
            document.getElementById("ej4_resultado1").value=ej4_conv1
            document.getElementById("ej4_resultado2").value=ej4_conv2}

function func_ej5() {
                let ej5_c1 = document.getElementById ("ej5_c1").value;
            
                let ej5_char = ej5_c1.length
            
                document.getElementById("ej5_resultado").value = ej5_char}

function func_ej6() {
                    let ej6_c1 = document.getElementById ("ej6_c1").value;
                
                    if(ej6_c1 % 2)
                    {document.getElementById("ej6_resultado").value ="No"}
                    else
                    {document.getElementById("ej6_resultado").value ="Sí"}}

function func_ej7() {
                        let ej7_c1 = document.getElementById ("ej7_c1").value;
                        let ej7_c2 = document.getElementById ("ej7_c2").value;
                        let ej7_acu1 = ""
                    
                        for (let index = ej7_c1 ; index <= ej7_c2 ; index++){
                        if(index % 3){}
                        else
                        {   ej7_acu1=ej7_acu1+" "+index;
                            document.getElementById("ej7_resultado").value =ej7_acu1;}}}

function func_ej9() {
                                let ej9_c1 = document.getElementById ("ej9_c1").value;
                                let ej9_c2 = document.getElementById ("ej9_c2").value;
                                let ej9_c3 = document.getElementById ("ej9_c3").value;
                            
                                let ej9_acu = "Mi nombre es "+ej9_c1+", tengo "+ej9_c2+" años. Nací en la ciudad de "+ej9_c3;
                                document.getElementById("ej9_resultado").innerHTML =ej9_acu;}

function func_ej10() {
                                    let ej10_c1 = parseFloat(document.getElementById ("ej10_c1").value)
                                    let ej10_c2 = parseFloat(document.getElementById ("ej10_c2").value)
                                    let ej10_acu=""
                                
                                    if(ej10_c2>ej10_c1){
                                    for(let index=ej10_c1+1 ; index<ej10_c2 ; index++){
                                        ej10_acu=ej10_acu+" "+index;
                                        document.getElementById("ej10_resultado").value =ej10_acu;
                                    }}
                                
                                    if(ej10_c2<ej10_c1){
                                    for(let index=ej10_c1-1 ; index>ej10_c2 ; index--){
                                        ej10_acu=ej10_acu+" "+index;
                                        document.getElementById("ej10_resultado").value =ej10_acu;}}}

