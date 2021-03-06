const langURLs = {
  "ru": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Russian.json",
  "en": "",
}

// Make tables interactive
$(document).ready(function () {
  const dt = $('#list').DataTable({
    columnDefs:[{
      "targets": 0,
      "orderable": false,
    }],
    "pageLength": 25,
    "order": [],
    "language": {
      "url": langURLs[document.documentElement.lang]
    },
  });

  dt.on('order', (e, settings) => {
    dt.column(0).nodes().each((cell, i) => {
      cell.innerText = i + 1;
    });
  }).draw();
});

// Activate Bootstrap tooltips
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Language selector
function switchLanguage(e) {
  e.preventDefault();
  const langForm = document.querySelector('#language-form');
  const selector = langForm.querySelector('select');
  selector.value = e.target.innerText.trim().toLowerCase();
  langForm.submit();
}

const langLinks = document.querySelectorAll('.inactive-lang-link');
langLinks.forEach((link) => link.addEventListener('click', switchLanguage));
