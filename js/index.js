$( document ).ready(function() {
    $(".js-info-modal-toggle").click(() => {
        $(".js-modal").toggleClass('modal-active');
    });

    $(".js-modal").click(() => {
        $(".js-modal").toggleClass('modal-active');
    });

    $(".js-modal-body").click((e) => {
        e.stopPropagation();
    });

    $(".js-modal-close").click(() => {
        $(".js-modal").removeClass('modal-active');
    });
});
