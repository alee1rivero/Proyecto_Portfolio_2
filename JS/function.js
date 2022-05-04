function func_p2(){
    let p2_c1 = parseFloat(document.getElementById('p2_c1').value); 
    let p2_c2 = parseFloat(document.getElementById('p2_c2').value);
    let p2_c3 = parseFloat(document.getElementById('p2_c3').value);

    if ( p2_c1 == p2_c2 && p2_c1 == p2_c3){
        document.getElementById("resultado_p2").value ="son iguales";
    } else {
        if (p2_c1 > p2_c2){  
            if (p2_c1 > p2_c3){
                document.getElementById("resultado_p2").value = p2_c1
            } else {
                document.getElementById("resultado_p2").value = p2_c3
            }
        } else {
            if (p2_c2 > p2_c3){
                document.getElementById("resultado_p2").value = p2_c2
            } else {
                document.getElementById("resultado_p2").value = p2_c3
            }
        }
    } 

}

function func_p1(){
    let p1_c1 = parseFloat(document.getElementById('p1_c1').value); 
    let p1_c2 = parseFloat(document.getElementById('p1_c2').value);

    const suma = p1_c1 + p1_c2 ;

    document.getElementById('resultado_p1').value = suma;
}

function func_ej3(){
    let ej3_c1=document.getElementById("ej3_c1").value
    let ej3_c2=parseFloat(document.getElementById("ej3_c2").value)
    let ej3_acu1 = ej3_c1

    for(let index=1 ; index<ej3_c2 ; index++)
    {ej3_acu1=ej3_acu1+ej3_c1}
    document.getElementById("ej3_resultado").value=ej3_acu1}