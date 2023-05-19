class Persona {
    constructor(rut, nombre, apellido, edad, peso, estatura, genero){
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.estatura = estatura;
        this.imc = 0;
        this.genero = genero;
    }

    get getRut(){
        return this.rut;
    }

    get getNombre(){
        return this.nombre;
    }

    get getApellido(){
        return this.apellido;
    }

    get getEdad(){
        return this.edad;
    }

    get getPeso(){
        return this.peso;
    }

    get getEstatura(){
        return this.estatura;
    }
    
    get getGenero(){
        return this.genero;
    }
}

let listaPersona = [];

let registrar = function () {
    let rut = document.getElementById("rut").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;

    if (rut, nombre, apellido, edad) {
        listaPersona.push(new Persona(rut, nombre, apellido, edad, peso, estatura, genero))
        alert("Agregado")
    }

    else {
        alert("Por favor, ingrese datos válidos")
    }

    document.getElementById("rut").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("estatura").value = ""

}

let buscar = function () {
    let buscarRut = document.getElementById("buscarRut").value;

    if (buscarRut) {
        if (listaPersona.find(p => p.getRut == buscarRut)) {
            let buscar = listaPersona.find(p => p.getRut == buscarRut);
            document.getElementById("res3").innerHTML = buscar.getRut;
            document.getElementById("res1").innerHTML = buscar.getNombre+" "+buscar.getApellido;
            document.getElementById("res4").innerHTML = buscar.getEdad;
            document.getElementById("res5").innerHTML = buscar.getGenero;
            let calc = buscar.getPeso / (buscar.getEstatura * buscar.getEstatura)
            if (calc < 18.5){
                document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
                document.getElementById("imc").innerHTML ="<b>"+"Bajo peso"+"</b>";
                document.getElementById("imc").classList.add("text-danger");
            }
            else if (calc > 18.5 && calc < 24.9) {
                document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
                document.getElementById("imc").innerHTML ="<b>"+"Peso normal"+"</b>";
                document.getElementById("imc").classList.add("text-info");
            }
            else if (calc > 25 && calc < 29.9) {
                document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
                document.getElementById("imc").innerHTML ="<b>"+"Sobrepeso"+"</b>";
                document.getElementById("imc").classList.add("text-warning");
            }
            else if (calc > 30) {
                document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
                document.getElementById("imc").innerHTML ="<b>"+"Obesidad"+"</b>";
                document.getElementById("imc").classList.add("text-danger");
            }
        }
        else {    
            alert("La persona no existe")
        }
    }

    else {
        alert("Ingrese datos válidos")
    }
    
    document.getElementById("buscarRut").value = "";
}

let suma = function(){

    /* let x = parseInt(document.getElementById("val1").value);
    let y = parseInt(document.getElementById("val2").value); */

    let est = document.querySelector('input[name="est"]').value;
    let peso = document.querySelector('input[name="peso"]').value;

    if (est && peso) {
        document.getElementById("res1").innerHTML ="<b>"+document.querySelector('input[name="nombre"]').value+" "+document.querySelector('input[name="apellido"]').value+"</b>";
        document.getElementById("res3").innerHTML ="<b>"+document.querySelector('input[name="rut"]').value+"</b>";
        document.getElementById("res4").innerHTML ="<b>"+document.querySelector('input[name="edad"]').value+"</b>";
        document.getElementById("res5").innerHTML ="<b>"+document.querySelector('input[name="genero"]:checked').value+"</b>";
        let calc = peso / (est * est)
        if (calc < 18.5){
            document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
            document.getElementById("imc").innerHTML ="<b>"+"Bajo peso"+"</b>";
            document.getElementById("imc").classList.add("text-danger");
        }
        else if (calc > 18.5 && calc < 24.9) {
            document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
            document.getElementById("imc").innerHTML ="<b>"+"Peso normal"+"</b>";
            document.getElementById("imc").classList.add("text-info");
        }
        else if (calc > 25 && calc < 29.9) {
            document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
            document.getElementById("imc").innerHTML ="<b>"+"Sobrepeso"+"</b>";
            document.getElementById("imc").classList.add("text-warning");
        }
        else if (calc > 30) {
            document.getElementById("res").innerHTML ="<b>"+calc+"</b>";
            document.getElementById("imc").innerHTML ="<b>"+"Obesidad"+"</b>";
            document.getElementById("imc").classList.add("text-danger");
        }
        
    }

    


    //return "Resultado: "+(x+y);
    //document.getElementById("res").innerHTML ="<b>"+(x+y)+"</b>";
}
