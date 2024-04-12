class Profesor extends Empleado {
    constructor(id, nombre, apellidos, estadoCivil, anoIncorporacion, numeroDespacho, departamento) {
        super(id, nombre, apellidos, estadoCivil, anoIncorporacion, numeroDespacho  );
        this.departamento = departamento;
    }
     }