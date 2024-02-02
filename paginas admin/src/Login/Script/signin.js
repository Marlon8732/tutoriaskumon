var usuarios = [
    {
        nombreCompleto: "Juan Pérez",
        identificacionAcademica: "123456",
        usuario: "juanperez",
        correo: "juan@gmail.com",
        contraseña: "clave123",
        rol:"estudiante"
    },
    {
        nombreCompleto: "María Rodríguez",
        identificacionAcademica: "789012",
        usuario: "mariarodriguez",
        correo: "maria@gmail.com",
        contraseña: "clave456",
        rol:"estudiante"
    },
    {
        nombreCompleto: "Carlos Gómez",
        identificacionAcademica: "345678",
        usuario: "carlosgomez",
        correo: "carlos@gmail.com",
        contraseña: "clave789",
        rol:"estudiante"
    },
    {
        nombreCompleto: "Laura Martínez",
        identificacionAcademica: "901234",
        usuario: "lauramartinez",
        correo: "laura@gmail.com",
        contraseña: "claveabc",
        rol:"estudiante"
    },
    {
        nombreCompleto: "Alejandro Torres",
        identificacionAcademica: "567890",
        usuario: "alejandrotorres",
        correo: "alejandro@gmail.com",
        contraseña: "clavedef",
        rol:"estudiante"
    },
    {
        nombreCompleto: "Ana López",
        identificacionAcademica: "234567",
        usuario: "analopez",
        correo: "ana@gmail.com",
        contraseña: "claveghi",
        rol:"estudiante"
    },
    {
        nombreCompleto: "Roberto Sánchez",
        identificacionAcademica: "890123",
        usuario: "robertosanchez",
        correo: "roberto@gmail.com",
        contraseña: "clavejkl",
        rol:"administrador"
    }
];

function iniciarSesion(e) {
    //Obetenemos los valores ingresados por los input
    var loginUsuario = document.getElementById('loginUsuario').value;
    var loginPassword = document.getElementById('loginPassword').value;

    //Verificamos que los input no este basillo
    if (!loginUsuario || !loginPassword) {
        mostrarAlerta('Por favor, ingrese email y contraseña.', 'warning');
        return;
    }
    //Buscamos el email del usuario para verificar si existe
    var usuarioEncontrado = usuarios.find(u => u.correo === loginUsuario);

    //verificamos su rol y contraseña
    if (usuarioEncontrado) {
        if (usuarioEncontrado.contraseña === loginPassword) {
            if (usuarioEncontrado.rol === "administrador") {
                mostrarAlerta('Inicio de sesión exitoso como administrador', 'success');
            } else {
                mostrarAlerta('Inicio de sesión exitoso como estudiante', 'success');
            }
        } else {
            mostrarAlerta('Contraseña incorrecta', 'error');
        }
    } else {
        mostrarAlerta('Usuario no encontrado', 'error');
    }
}
//Creamos una alarma. Esta es personalizada. Recursos en el html(css y js)
//Ir al sitio web: https://cdnjs.com/. 
function mostrarAlerta(mensaje, tipo) {
    Swal.fire({
        text: mensaje,
        icon: tipo,
        timer: 2000,
        showConfirmButton: false
    });
}