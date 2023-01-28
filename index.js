/*----------------------------------------------------- FUNCIONES ----------------------------------------------------- */

function bienvenida()
{
    alert("Bienvenido al sistema  de Asistencia del Personal"); 
}

function contador(a)
{
    return a + 1;   
}

function totalPersonal(j,e,p)
{
    alert("Personal Jerarquico: " + j + "\nEmpleados: " + e + " \nPasantes : " + p);  
}

function totalOficinas(d, o, s, t)
{
    alert("Direccion: " + d + " personas \nOperaciones: " + o + " personas \nSistemas : " + s + " personas \nTesoreria : " + t + " personas"); 

}


function cantPersonas(personas)
{
    do 
    {
        personas= Number(prompt ("Ingrese la cantidad de personas asistidas"));
        if (personas > total)
        {
            alert("Error!:\nLa cantidad de personas asistidas debe ser menor a la totalida del personal");
        }

    } while (total < personas);
    return personas
}


function subMenu(salir)
{
    while(salir)
    {
        let op= Number (prompt ("presione: \n1.Para volver al menu \n2.Para salir"));
 
        if (op==1)
        {
            salir=false 
            return salida=true
        }

        else if (op=2)
        {
            salir=false;
            return salida=false;
        }

        else
        {
            alert("Opcion invalida!")
        }

         
     }
}

function despedida()
{

    alert("Gracias por utilizar el sistema  de Asistencia del Personal")
}

const resta = (a, b) => a - b;

const porcentaje = (a, b) => (a * 100) / b;
/*--------------------------------------------------------------------------------------------------------------------- */
bienvenida();

var total=Number(prompt("Ingrese la totalidad el personal del edificio"));

var cantidadPersonas= cantPersonas(cantidadPersonas);

let direccion   =0;
let operaciones =0;
let sistemas    =0;
let tesoreria   =0;
let empleado    =0;
let pasante     =0;
let entradaTarde=0;
let entradaTemprano=0;
let personalJerarquico=0;

for (let i = 1; i<=cantidadPersonas; i++)
{
    salida=true
    while(salida)
    {           
        let personal= Number(prompt (i + "° \nSeleccione el tipo de personal: \n1-Personal Jerarquico \n2-Empleado \n3-Pasante"));

        if (personal==1 || personal==2 || personal==3)
        {
            salida=false;    
        }
        else
        {
            alert("Opcion incorrecta!")
        }

        switch (personal) {
            case 1:
                personalJerarquico= Number(contador(personalJerarquico));
                break;
            case 2:
                empleado= Number(contador(empleado));
                break;
            case 3:
                pasante= Number(contador(pasante));
                break;
                    
        }    
    }/*Fin while*/


    sale=true;
    while (sale)
    {
        let departamento= Number(prompt ("Seleccione el destino: \n1-Direccion \n2-Operaciones \n3-Sistemas \n4-Tesoreria"));
                
        if (departamento==1 || departamento==2 || departamento==3 | departamento==4)
            {
                sale=false;    
            }
        else
            {
                alert("Opcion incorrecta!");
            }    

        switch (departamento) 
        {
            case 1:
                direccion=  Number(contador(direccion));
                break;
            case 2:
                operaciones=Number(contador(operaciones));
                break;
            case 3:
                sistemas=   Number(contador(sistemas));              
                break;
            case 4:
                tesoreria=  Number(contador(tesoreria));              
                break;
        
        }   
    }


    let horas=0;
    do 
    {
        horas= parseFloat(prompt ("***********Horario de ingreso habitual 07.00*********** \nATENCION: Las horas y minutos se separan por un punto\nHora de ingreso: "));
            if (horas > 23.59)
            {
                alert("Error!:\nHora no valida. Reingrese...");
            }
    
    } while (horas > 23.59);


    if (horas > 7.00)
    {
        entradaTarde=   Number(contador(entradaTarde));
    }
    else
    {
        entradaTemprano=Number(contador(entradaTemprano));
    }
    

} /* fin FOR */

alert("Datos cargados correctamente!");

let ausente= resta(total, cantidadPersonas);
salida=true
while(salida)
{

    let opcion= Number (prompt ("Elija una opcion: \n1.Informe estado del personal.\n2.Enumerar presentes.\n3.Cantidad de personas por oficina\n4.Estadisticas"));

    switch (opcion)
    {
        case 1:
            alert ("El edificio cuenta con " + total + " personas.\nAsistieron: " + cantidadPersonas + " personas.\nSe ausentaron " + ausente + " personas.\nEn el dia de hoy " + entradaTemprano+ " personas ingresaron en horario y " + entradaTarde +" personas ingresaron tarde");
            break;
        case 2:
            totalPersonal(personalJerarquico, empleado, pasante);
            break;
        case 3:
            totalOficinas(direccion, operaciones, sistemas, tesoreria);;
            break;
        case 4: 
            let PorcentPresente             =porcentaje(cantidadPersonas, total);
            let porcentEmpleado             =porcentaje(empleado, cantidadPersonas);;
            let porcentPasante              =porcentaje(pasante, cantidadPersonas);
            let porcentPersonalJerarquico   =porcentaje(personalJerarquico, cantidadPersonas);
            let PorcentAusente              =porcentaje(ausente, total);

            alert("De un total de " + total + " personas que trabajan el edificio:\nHubo un " + PorcentPresente + "% de asistencias. Los " + PorcentAusente + "% restantes son ausentes.\nDe los Asistenes:\nEl "+porcentPersonalJerarquico + "% son personal jerarquico. \nEl " + porcentEmpleado +"% son empleados \nEl " + porcentPasante + "% son pasantes.");
            break;

        default:
            alert ("Seleccion invalida!");  
            break;  
    }

    salir=true; 
    salida=subMenu(salir);

}//while

despedida();