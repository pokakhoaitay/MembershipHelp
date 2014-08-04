
function toggle_visibility(id, self) {
    var e = document.getElementById(id);
    if (e.style.display == 'block') {
        e.style.display = 'none';
        self.text = "[ Expand Code ]";
    } else {
        e.style.display = 'block';
        self.text = "[ Collapse Code ]";
    }
}
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $(".modal").appendTo($("body"));
    

    $('a.external').on('click', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $(".modal-body").html($('#prop_GetGuestCall'));
        //$(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="' + url + '"></iframe>');

    });

    $('#myModal').on('show.bs.modal', function () {
        $(this).find('.modal-body .code').removeClass('hide');

        $(this).find('.modal-dialog').css({
            //width: '40%x', //choose your width
            height: '100%',
            'padding': '0'
        });
        $(this).find('.modal-content').css({
            height: '100%',
            'border-radius': '0',
            'padding': '0'
        });
        $(this).find('.modal-body').css({
            width: 'auto',
            height: '100%',
            'padding': '0', 'overflow-x': 'auto'
        });
    });

    $('.view_code').click(function () {
        var link = $(this);
        var id = $(this).attr('data-target');
        $('#' + id).slideToggle(function() {
            var e = document.getElementById(id);
            if (e.style.display == 'block') {
                link.text("[ Close Code ]");
            } else {
                link.text("[ View Code ]");
            }
        });
        
    });

});