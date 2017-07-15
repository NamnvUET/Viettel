$('#modal-content').on('shown.bs.modal', function() {
    $("body.modal-open").removeAttr("style");
});

$(function() {
    $('#example').barrating({
        theme: 'fontawesome-stars'
    });
});