$(document).ready(function () {
    $('#animation').click(function () {
        $('img').fadeOut(2000, function () {
            $('img').slideDown(3000, function () {
                $('img').slideUp(1000);
            });
        });
    });
});
