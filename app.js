let listaEmpleados = [];
let editando = false;
function cargarScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

Promise.all([
    cargarScript('persona.js'),
    cargarScript('estudiante.js')
]).then(() => {
class CentroEducativo {
    constructor() {
        this.formulario = document.querySelector('#formulario');
        this.nombreInput = document.querySelector('#nombre');
        this.apellidosInput = document.querySelector('#apellidos');
        this.estadoCivilInput = document.querySelector('#estadoCivil');
        this.cursoMatriculadoInput = document.querySelector('#cursoMatriculado');
        this.btnAgregarInput = document.querySelector('#btnAgregar');

        this.formulario.addEventListener('submit', this.validarFormulario.bind(this));
    }

    validarFormulario(e) {
        e.preventDefault();

        if(this.nombreInput.value === '' || this.apellidosInput.value === '' || this.estadoCivilInput.value === ''|| this.cursoMatriculadoInput.value === '') {
            alert('Todos los campos se deben llenar');
            return;
        }

        if(editando) {
            this.editarEmpleado();
            editando = false;
        } else {
            const estudiante = new Estudiante(
                Date.now(),
                this.nombreInput.value,
                this.apellidosInput.value,
                this.estadoCivilInput.value,
                this.cursoMatriculadoInput.value
            );

            this.agregarEmpleado(estudiante);
        }
    }

    agregarEmpleado(estudiante) {
        listaEmpleados.push({...estudiante});

        this.mostrarEmpleados();

        this.formulario.reset();
    }

    limpiarHTML() {
        const divEmpleados = document.querySelector('.div-empleados');
        while(divEmpleados.firstChild) {
            divEmpleados.removeChild(divEmpleados.firstChild);
        }
    }

    mostrarEmpleados() {
        this.limpiarHTML();

        const divEmpleados = document.querySelector('.div-empleados');

        listaEmpleados.forEach(empleado => {
            const {id, nombre, apellidos, estadoCivil, cursoMatriculado} = empleado;

            const parrafo = document.createElement('p');
            parrafo.textContent = `${id} - ${nombre} - ${apellidos} - ${estadoCivil} - ${cursoMatriculado}`;
            parrafo.dataset.id = id;

            const editarBoton = document.createElement('button');
            editarBoton.onclick = () => this.cargarEmpleado(empleado);
            editarBoton.textContent = 'Editar';
            editarBoton.classList.add('btn', 'btn-editar');
            parrafo.append(editarBoton);

            const eliminarBoton = document.createElement('button');
            eliminarBoton.onclick = () => this.eliminarEmpleado(id);
            eliminarBoton.textContent = 'Eliminar';
            eliminarBoton.classList.add('btn', 'btn-eliminar');
            parrafo.append(eliminarBoton);

            const hr = document.createElement('hr');

            divEmpleados.appendChild(parrafo);
            divEmpleados.appendChild(hr);
        });
    }

    cargarEmpleado(empleado) {
        const {id, nombre, apellidos, estadoCivil, cursoMatriculado} = empleado;

        this.nombreInput.value = nombre;
        this.apellidosInput.value = apellidos;
        this.estadoCivilInput.value = estadoCivil;
        this.cursoMatriculadoInput.value = cursoMatriculado;
        formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
        Persona.id = id;
        editando = true;
    }

    editarEmpleado() {
        const id = Number(Persona.id);
        const nombre = this.nombreInput.value;
        const apellidos = this.apellidosInput.value;
        const estadoCivil = this.estadoCivilInput.value;
        const cursoMatriculado = this.cursoMatriculadoInput.value;

        listaEmpleados = listaEmpleados.map(empleado => {
            if(empleado.id === id) {
                return { ...empleado, nombre, apellidos, estadoCivil, cursoMatriculado };
            } else {
                return empleado;
            }
        });

        this.limpiarHTML();
        this.mostrarEmpleados();

        this.formulario.reset();
        editando = false;
    }

    eliminarEmpleado(id) {
        listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

        this.limpiarHTML();
        this.mostrarEmpleados();
    }
}

// Instanciar la clase CentroEducativo
const centroEducativo = new CentroEducativo();
}).catch(error => {
    console.error('Error al cargar los scripts:', error);
});
