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
    data.forEach(function(row) {
        var newRow = table.insertRow(-1);

        row.forEach(function(cell) {
            var newCell = newRow.insertCell(-1);
            newCell.textContent = cell;
        });

        // Agrega botones de editar y borrar
        var actionsCell = newRow.insertCell(-1);
        actionsCell.innerHTML = '<button>Editar</button><button>Borrar</button>';
    });
}
