// PER APRIRE IL MENU CLICCO SULL'ICONA E MOSTRO IL MENU
$('a > i.fas.fa-bars').click(function() {

    $('.hamburger-menu').show();
});

// PER CHIUDERE IL MENU CLICCO SULL'ICONA X E NASCONDO IL MENU
$('a.close').click(function() {

    $('.hamburger-menu').hide();
});
