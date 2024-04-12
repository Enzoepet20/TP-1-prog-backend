class PersonalServicio extends Empleado {
    constructor(id, nombre, apellidos, estadoCivil, anoIncorporacion, numeroDespacho, seccionAsignada) {
        super(id, nombre, apellidos, estadoCivil,  anoIncorporacion, numeroDespacho );
        this.seccionAsignada = seccionAsignada;
    }
     }