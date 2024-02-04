// js/script2.js
gapi.load('client', init);

function init() {
    gapi.client.init({
        apiKey: 'AIzaSyAolrO_vvIb9mMFcwpP-tOKvalilWmcJk8',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        // Llama a la función para cargar los datos de la hoja de cálculo
        loadSheetData();
    });
}

function loadSheetData() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1IyxCbyqq2m41i167uPhoJKusbTDvFhW1I0ePo-YYd3Q',
        range: 'clientes!A2:G50', // Por ejemplo, 'Sheet1!A2:G'
    }).then(function(response) {
        var values = response.result.values;

        // Llena la tabla con los datos obtenidos
        fillTable(values);
    }, function(response) {
        console.error('Error al obtener datos de la hoja de cálculo', response);
    });
}

function fillTable(data) {
    var table = document.getElementById('data-table');

    // Itera sobre los datos y agrega filas a la tabla
    data.forEach(function(rowData) {
        var newRow = table.insertRow(-1);

        rowData.forEach(function(cellData) {
            var newCell = newRow.insertCell(-1);
            newCell.textContent = cellData;

            // Agregar el atributo contenteditable para hacer las celdas editables
            newCell.setAttribute('contenteditable', 'false');
        });

        // Agrega botones de editar y borrar
        var actionsCell = newRow.insertCell(-1);
        actionsCell.innerHTML = '<button onclick="editRow(this)">Editar</button><button onclick="deleteRow(this)">Borrar</button>';
    });
}

function editRow(button) {
    var row = button.closest('tr');
    var cells = row.getElementsByTagName('td');

    // Cambia el atributo contenteditable y estilo para habilitar la edición
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.setAttribute('contenteditable', 'true');
        cell.style.backgroundColor = 'red';
    }

    // Cambia el texto del botón de "Editar" a "Guardar"
    button.textContent = 'Guardar';
    
    // Agrega un evento de clic al botón para llamar a saveChanges
    button.onclick = function() {
        saveChanges(button);
    };
}

function saveChanges(button) {
    var row = button.closest('tr');
    var cells = row.getElementsByTagName('td');

    // Obtén los datos editados de la fila
    var newData = Array.from(cells).map(cell => cell.textContent);

    // Actualiza los datos en la hoja de cálculo
    var rowIndex = row.rowIndex;
    updateSheetData(rowIndex, newData);

    // Cambia el atributo contenteditable y estilo para deshabilitar la edición
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.setAttribute('contenteditable', 'false');
        cell.style.backgroundColor = '';
    }

    // Cambia el texto del botón de "Guardar" a "Editar" después de un breve retraso
    setTimeout(function() {
        button.textContent = 'Editar';
        button.onclick = function() { editRow(button); }; // Restaura el evento 'click' original
    }, 100);
}


function deleteRow(button) {
    // Agrega la lógica para eliminar la fila o realizar la acción de "Borrar" aquí
    var row = button.closest('tr');
    row.remove();
}
    