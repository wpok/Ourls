$('#shorten').click(function() {
    var raw_url = $('#url').val();
    if (validator.isURL(raw_url)) {
        var url = encodeURIComponent(raw_url);
        $.getJSON(
            'shorten?url=' + url,
            function (data) {
                if (data.status == 1) {
                    $('#url').val(data.s_url);
                } else {
                    alert(data.msg);
                }
            }
        )
    } else {
        alert('请输入正确的url');
    }
});

$('#expand').click(function() {
    var s_url = $('#url').val();
    $.getJSON(
        'expand?s_url=' + s_url,
        function(data) {
            if (data.status == 1) {
                $('#url').val(data.url);
            } else {
                alert(data.msg);
            }
        }
    )
});
