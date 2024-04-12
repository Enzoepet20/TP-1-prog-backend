

class Empleado extends Persona {
    constructor(id, nombre, apellidos, estadoCivil, anoIncorporacion, numeroDespacho) {
        super(id, nombre, apellidos, estadoCivil );
        this.anoIncorporacion = anoIncorporacion;
        this.numeroDespacho = numeroDespacho;
    }
     }

