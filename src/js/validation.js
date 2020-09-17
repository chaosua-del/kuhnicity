export default function validation() {
    $('.mainForm__input').each((i, elem) => {
        $(elem).focus(function () {
            $(elem).prev().addClass('mainForm__label--active');
        });
        $(elem).focusout(function () {
            if (!$(elem).val()) {
                $(elem).prev().removeClass('mainForm__label--active');
            }
        });
    });
}
