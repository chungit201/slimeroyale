function openPopup(i) {
    $('.cover').show();
    $('.popup').hide();
    $('#popup-send-code').show();
    gtag('event', 'show', { 'event_category': 'registration' });
    if (i === 1) {
        gtag('event', 'click', {
            'event_category': 'registration',
            'event_label': 'button_whitelist_registration_1'
        });
    }
    if (i === 2) {
        gtag('event', 'click', {
            'event_category': 'registration',
            'event_label': 'button_whitelist_registration_2'
        });
    }
}

function closePopup() {
    $('.cover').hide();
    $('.popup').hide();
}

function prePopup() {
    $('#popup-confirm-code').hide();
    $('#popup-send-code').show();
}

function openPopupRegisterNow() {
    $('.popup').hide();
    $('#popup-register-now').show();
}

