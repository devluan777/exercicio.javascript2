document.getElementById('add-contact').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    if (name && phone) {
        var table = document.getElementById('contact-list');
        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var phoneCell = row.insertCell(1);

        nameCell.innerHTML = name;
        phoneCell.innerHTML = phone;

        // Limpar os campos do formulário
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});
