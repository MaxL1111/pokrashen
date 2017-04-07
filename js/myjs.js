$(function() {
    $('#form').submit(function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "test.php",
            data: data,
            success: function (result) {
                $('#result').html(result)
            }
        })
    });
});

$('#content').scroll(function() {
    $('#log').append('<div>Handler for .scroll() called.</div>');
});

