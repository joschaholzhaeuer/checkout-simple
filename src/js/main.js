/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

function showVersandbox() {

    var $versandbox = $('.versandbox');

    //smooth scroll to box
    $('body,html').animate({
        scrollTop: 500,
        }, 600
    );

    // show versandbox
    $versandbox.slideDown(400);
}

function adressbox() {

    var $label      = $('.fields-label-check'),
        $val_fields = $('.no-validation-fields'),
        $adressbox  = $('.adressbox'),
        adressbox_offset = $('.rechnung-toggle').offset().top - 90;

    //smooth scroll to box
    $('body,html').animate({
        scrollTop: adressbox_offset,
        }, 600
    );

    // if checkbox is unchecked, show additional box
    if ($label.hasClass('checked')) {

        $label.removeClass('checked');
        $adressbox.slideDown(400);
        $adressbox.removeClass('no-validation');
        $val_fields.removeClass('no-validation-required');

    // if checkbox is checked, hide additional box
    } else {
        $label.addClass('checked');
        $adressbox.slideUp(400);
        $adressbox.addClass('no-validation');

        // remove all input and error messages
        if ($val_fields.hasClass('fields-error-frame')) {
            $val_fields.removeClass('fields-error-frame');
            $val_fields.siblings('.fields-item-label').removeClass('label--correct');
            $val_fields.siblings('.fields-item-label').show();
            $val_fields.siblings('.fields-error').hide();
            $val_fields.siblings('.fields-error2').hide();
            $val_fields.addClass('no-validation-required');
            $val_fields.val('');
        }
    }
}

function showKreditbox() {

    var $kreditbox = $('.kreditbox'),
        kreditbox_offset = $('.kredit-toggle').offset().top - 100;

    //smooth scroll to box
    $('body,html').animate({
        scrollTop: kreditbox_offset,
        }, 600
    );

    $kreditbox.slideDown(400);
    $kreditbox.removeClass('no-validation');
    $('.no-validation-fields2').removeClass('no-validation-required');

}

function hideKreditbox() {

    var $kreditbox = $('.kreditbox');

    $kreditbox.slideUp(400);
    $kreditbox.addClass('no-validation');

    var $val_fields = $('.no-validation-fields2');

    // remove all input and error messages
    if ($val_fields.hasClass('fields-error-frame')) {
        $val_fields.removeClass('fields-error-frame');
        $val_fields.siblings('.fields-item-label').removeClass('label--correct');
        $val_fields.siblings('.fields-item-label').show();
        $val_fields.siblings('.fields-error').hide();
        $val_fields.siblings('.fields-error2').hide();
        $val_fields.addClass('no-validation-required');
        $val_fields.val('');
    }
}

function showCheckboxes() {

    var $checkangabenbox = $('.checkangabenbox');

    // show additional boxes after delay
    setTimeout(delayTabClick, 2000);
    function delayTabClick() {

        // show versandbox
        if (!$checkangabenbox.hasClass('dropped')) {

            //smooth scroll to boxes
            $('body,html').animate({
                scrollTop: 220,
                }, 600
            );
            $checkangabenbox.slideDown(400);
            $checkangabenbox.addClass('dropped');
        }
    }
}

function showDankeboxes() {

    var $nutzerkontobox = $('.nutzerkontobox'),
        $danke_info     = $('.danke-info'),
        $tippsbox       = $('.tippsbox');

    // show additional boxes after delay
    setTimeout(delayTabClick2, 1000);
    function delayTabClick2() {

        // show info
        $danke_info.fadeIn();

        // show nutzerkontobox
        $nutzerkontobox.slideDown(400);
    }
}

function checkAgbs() {

    var $agbs = $('#agbs'),
        $fields_check = $('.fields-item-check'),
        agbs_offset = $agbs.offset().top;

    $fields_check.addClass('pulse');

    // show additional boxes after delay
    setTimeout(delayAgbCheck, 600);
    function delayAgbCheck() {

        // check agbs
        $agbs.prop('checked', true);
        $fields_check.removeClass('pulse');
    }
}

function checkStep() {

    if ($('.step-one').hasClass('steps-item--active')) {
        $('.step-two--done').addClass('is-hidden');
        $('.steps-number-two').removeClass('is-hidden');

        if ($('.steps-number-one').hasClass('is-hidden')) {
            $('.steps-number-one').removeClass('is-hidden');
            $('.step-one--done').addClass('is-hidden');
        }

    } else if ($('.step-two').hasClass('steps-item--active')) {
        $('.step-one--done').removeClass('is-hidden');
        $('.steps-number-one').addClass('is-hidden');

        if ($('.steps-number-two').hasClass('is-hidden')) {
            $('.steps-number-two').removeClass('is-hidden');
            $('.step-two--done').addClass('is-hidden');
        }

    } else if ($('.step-three').hasClass('steps-item--active')) {
        $('.step-one--done').removeClass('is-hidden');
        $('.step-two--done').removeClass('is-hidden');
        $('.steps-number-one').addClass('is-hidden');
        $('.steps-number-two').addClass('is-hidden');
    }
}

function checkErrorsInput($element) {

    var $current_field = $element,
        entered_input  = $current_field.val(),
        $icon_check    = $current_field.siblings('.icon--correct'),
        test_text      = /^[A-Zäöüß ]*$/i;

    // remove check icon
    $current_field.removeClass('input--correct');
    $icon_check.hide();
    $icon_check.removeClass('flip');

    // input field was left empty
    if ($current_field.val().length === 0) {
        $current_field.addClass('fields-error-frame');
        $current_field.siblings('.fields-item-label').hide();
        $current_field.siblings('.fields-error2').hide();
        $current_field.siblings('.fields-error').show();

    // input was entered
    } else {

        // if no correct input was entered
        if (!test_text.test(entered_input)) {

            // show error message for wrong input and hide previous error, if it is still visible
            if ($current_field.hasClass('fields-error-frame')) {
                $current_field.siblings('.fields-error').hide();
                $current_field.siblings('.fields-error2').show();

            // otherwise show error message for wrong input
            } else {
                $current_field.addClass('fields-error-frame');
                $current_field.siblings('.fields-item-label').hide();
                $current_field.siblings('.fields-error').hide();
                $current_field.siblings('.fields-error2').show();
            }

        // user entered correct input
        } else {

            // hide error message
            if ($current_field.hasClass('fields-error-frame')) {
                $current_field.removeClass('fields-error-frame');
                $current_field.siblings('.fields-item-label').show();
                $current_field.siblings('.fields-error').hide();
                $current_field.siblings('.fields-error2').hide();
            }

            // show correct icon
            $current_field.addClass('input--correct');
            $icon_check.show();
            $icon_check.addClass('flip');
        }
    }
}

function checkErrorsNumber($element) {

    var $current_field_n = $element,
        $icon_check      = $current_field_n.siblings('.icon--correct'),
        entered_input    = $current_field_n.val();

    // remove check icon
    $current_field_n.removeClass('input--correct');
    $icon_check.hide();
    $icon_check.removeClass('flip');

    // input field was left empty
    if (entered_input.length === 0) {
        $current_field_n.addClass('fields-error-frame');
        $current_field_n.siblings('.fields-item-label').hide();
        $current_field_n.siblings('.fields-error2').hide();
        $current_field_n.siblings('.fields-error').show();

    // input was entered
    } else {

        // if no number was entered
        if (!$.isNumeric(entered_input)) {

            // show error message for wrong input and hide previous error, if it is still visible
            if ($current_field_n.hasClass('fields-error-frame')) {
                $current_field_n.siblings('.fields-error').hide();
                $current_field_n.siblings('.fields-error2').show();

            // otherwise show error message for wrong input
            } else {
                $current_field_n.addClass('fields-error-frame');
                $current_field_n.siblings('.fields-item-label').hide();
                $current_field_n.siblings('.fields-error2').show();
            }

        // user entered a correct input
        } else {

            // if user did not enter 5 numbers, show error
            if (($current_field_n.data('validation') == 'min5') && (entered_input.length != 5)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // if user did not enter 16 numbers, show error
            } else if (($current_field_n.data('validation') == 'min16') && (entered_input.length != 16)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // if user did not enter 3 numbers, show error
            } else if (($current_field_n.data('validation') == 'min3') && (entered_input.length != 3)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // user entered correct number
            } else {

                // hide error message
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.removeClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').show();
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').hide();
                }

                // show correct icon
                $current_field_n.addClass('input--correct');
                $icon_check.show();
                $icon_check.addClass('flip');
            }
        }
    }
}

// check street number for errors
function checkErrorsStreetNumber($element) {

    var $current_field_n = $element,
        $icon_check      = $current_field_n.siblings('.icon--correct'),
        entered_input    = $current_field_n.val(),
        test_text        = /^[1-90\/]*$/i;

    // remove check icon
    $current_field_n.removeClass('input--correct');
    $icon_check.hide();
    $icon_check.removeClass('flip');

    // input field was left empty
    if (entered_input.length === 0) {
        $current_field_n.addClass('fields-error-frame');
        $current_field_n.siblings('.fields-item-label').hide();
        $current_field_n.siblings('.fields-error2').hide();
        $current_field_n.siblings('.fields-error').show();

    // input was entered
    } else {

        // if no correct input was entered
        if (!test_text.test(entered_input)) {

            // show error message for wrong input and hide previous error, if it is still visible
            if ($current_field_n.hasClass('fields-error-frame')) {
                $current_field_n.siblings('.fields-error').hide();
                $current_field_n.siblings('.fields-error2').show();

            // otherwise show error message for wrong input
            } else {
                $current_field_n.addClass('fields-error-frame');
                $current_field_n.siblings('.fields-item-label').hide();
                $current_field_n.siblings('.fields-error2').show();
            }

        // user entered a correct input
        } else {

            // if user did not enter 5 numbers, show error
            if (($current_field_n.data('validation') == 'min5') && (entered_input.length != 5)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // if user did not enter 16 numbers, show error
            } else if (($current_field_n.data('validation') == 'min16') && (entered_input.length != 16)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // if user did not enter 3 numbers, show error
            } else if (($current_field_n.data('validation') == 'min3') && (entered_input.length != 3)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // user entered correct number
            } else {

                // hide error message
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.removeClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').show();
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').hide();
                }

                // show correct icon
                $current_field_n.addClass('input--correct');
                $icon_check.show();
                $icon_check.addClass('flip');
            }
        }
    }
}

// check expiration date for errors
function checkErrorsExpiration($element) {

    var $current_field_n = $element,
        $icon_check      = $current_field_n.siblings('.icon--correct'),
        entered_input    = $current_field_n.val(),
        test_text        = /^(0[1-9]|1[0-2])+(\/)+(1[5-9]|([2-9]+[0-9]))$/i;

    // remove check icon
    $current_field_n.removeClass('input--correct');
    $icon_check.hide();
    $icon_check.removeClass('flip');

    // input field was left empty
    if (entered_input.length === 0) {
        $current_field_n.addClass('fields-error-frame');
        $current_field_n.siblings('.fields-item-label').hide();
        $current_field_n.siblings('.fields-error2').hide();
        $current_field_n.siblings('.fields-error').show();

    // input was entered
    } else {

        // if no correct input was entered
        if (!test_text.test(entered_input)) {

            // show error message for wrong input and hide previous error, if it is still visible
            if ($current_field_n.hasClass('fields-error-frame')) {
                $current_field_n.siblings('.fields-error').hide();
                $current_field_n.siblings('.fields-error2').show();

            // otherwise show error message for wrong input
            } else {
                $current_field_n.addClass('fields-error-frame');
                $current_field_n.siblings('.fields-item-label').hide();
                $current_field_n.siblings('.fields-error2').show();
            }

        // user entered a correct input
        } else {

            // hide error message
            if ($current_field_n.hasClass('fields-error-frame')) {
                $current_field_n.removeClass('fields-error-frame');
                $current_field_n.siblings('.fields-item-label').show();
                $current_field_n.siblings('.fields-error').hide();
                $current_field_n.siblings('.fields-error2').hide();
            }

            // show correct icon
            $current_field_n.addClass('input--correct');
            $icon_check.show();
            $icon_check.addClass('flip');
        }
    }
}

// check mail input for errors
function checkErrorsMail($element) {

    var $current_field_m = $element,
        entered_input    = $current_field_m.val(),
        $icon_check      = $current_field_m.siblings('.icon--correct'),
        test_mail        = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    // remove check icon
    $current_field_m.removeClass('input--correct');
    $icon_check.hide();
    $icon_check.removeClass('flip');

    // input field was left empty
    if (entered_input.length === 0) {
        $current_field_m.addClass('fields-error-frame');
        $current_field_m.siblings('.fields-item-label').hide();
        $current_field_m.siblings('.fields-error2').hide();
        $current_field_m.siblings('.fields-error').show();

    // input was entered
    } else {

        // if no correct email address was entered
        if (!test_mail.test(entered_input)) {

            // show error message for wrong input and hide previous error, if it is still visible
            if ($current_field_m.hasClass('fields-error-frame')) {
                $current_field_m.siblings('.fields-error').hide();
                $current_field_m.siblings('.fields-error2').show();

            // otherwise show error message for wrong input
            } else {
                $current_field_m.addClass('fields-error-frame');
                $current_field_m.siblings('.fields-item-label').hide();
                $current_field_m.siblings('.fields-error2').show();
            }

        // user entered a correct email address
        } else {

            // hide error message
            if ($current_field_m.hasClass('fields-error-frame')) {
                $current_field_m.removeClass('fields-error-frame');
                $current_field_m.siblings('.fields-item-label').show();
                $current_field_m.siblings('.fields-error').hide();
                $current_field_m.siblings('.fields-error2').hide();
            }

            // show correct icon
            $current_field_m.addClass('input--correct');
            $icon_check.show();
            $icon_check.addClass('flip');
        }
    }
}

// check password
function checkErrorsPassword($element) {

    var $current_field = $element,
        entered_input  = $current_field.val(),
        $icon_check    = $current_field.siblings('.icon--correct');

    // remove check icon
    $current_field.removeClass('input--correct');
    $icon_check.hide();
    $icon_check.removeClass('flip');

    // input field was left empty
    if ($current_field.val().length === 0) {
        $current_field.addClass('fields-error-frame');
        $current_field.siblings('.fields-item-label').hide();
        $current_field.siblings('.fields-error2').hide();
        $current_field.siblings('.fields-error').show();

    // input was entered
    } else {

        // hide error message
        if ($current_field.hasClass('fields-error-frame')) {
            $current_field.removeClass('fields-error-frame');
            $current_field.siblings('.fields-item-label').show();
            $current_field.siblings('.fields-error').hide();
            $current_field.siblings('.fields-error2').hide();
        }

        // show correct icon
        $current_field.addClass('input--correct');
        $icon_check.show();
        $icon_check.addClass('flip');
    }
}


// update text fields on step3
function updateText() {

    // lieferadresse
    var l_adresse_name    = $('.lieferadresse-name').val(),
        l_adresse_surname = $('.lieferadresse-surname').val(),
        l_adresse_street  = $('.lieferadresse-street').val(),
        l_adresse_number  = $('.lieferadresse-number').val(),
        l_adresse_city    = $('.lieferadresse-city').val(),
        l_adresse_plz     = $('.lieferadresse-plz').val(),
        $cl_adresse_name   = $('.change-lieferadresse-name'),
        $cl_adresse_street = $('.change-lieferadresse-street'),
        $cl_adresse_city   = $('.change-lieferadresse-city');

    // bring text fields together
    var l_updated_name   = l_adresse_name + ' ' + l_adresse_surname,
        l_updated_street = l_adresse_street + ' ' + l_adresse_number,
        l_updated_city   = l_adresse_plz + ' ' + l_adresse_city;

    // update text fields
    $cl_adresse_name.text(l_updated_name);
    $cl_adresse_street.text(l_updated_street);
    $cl_adresse_city.text(l_updated_city);


    // rechnungsadresse
    var r_adresse_name    = $('.rechnungsadresse-name').val(),
        r_adresse_surname = $('.rechnungsadresse-surname').val(),
        r_adresse_street  = $('.rechnungsadresse-street').val(),
        r_adresse_number  = $('.rechnungsadresse-number').val(),
        r_adresse_city    = $('.rechnungsadresse-city').val(),
        r_adresse_plz     = $('.rechnungsadresse-plz').val(),
        $cr_adresse_same   = $('.change-rechnungsadresse'),
        $cr_adresse_name   = $('.change-rechnungsadresse-name'),
        $cr_adresse_street = $('.change-rechnungsadresse-street'),
        $cr_adresse_city   = $('.change-rechnungsadresse-city');

    // only change if rechnungsadresse is not identical
    if (!$('#rechnungsadresse').is(':checked')) {

        $cr_adresse_same.hide();
        $cr_adresse_name.removeClass('is-hidden');
        $cr_adresse_street.removeClass('is-hidden');
        $cr_adresse_city.removeClass('is-hidden');

        // bring text fields together
        var r_updated_name   = r_adresse_name + ' ' + r_adresse_surname,
            r_updated_street = r_adresse_street + ' ' + r_adresse_number,
            r_updated_city   = r_adresse_plz + ' ' + r_adresse_city;

        // update text fields
        $cr_adresse_name.text(r_updated_name);
        $cr_adresse_street.text(r_updated_street);
        $cr_adresse_city.text(r_updated_city);

    // rechnungsadresse is identical to lieferadresse
    } else {

        $cr_adresse_same.show();
        if (!$cr_adresse_name.hasClass('is-hidden')) {
            $cr_adresse_name.addClass('is-hidden');
            $cr_adresse_street.addClass('is-hidden');
            $cr_adresse_city.addClass('is-hidden');
        }

    }

    // bezahlungsart
    var $b_rechnung     = $('.bezahlungsart-rechnung'),
        $b_paypal       = $('.bezahlungsart-paypal'),
        $b_kreditkarte  = $('.bezahlungsart-kreditkarte'),
        $c_bezahlungsart  = $('.change-bezahlungsart');

    if ($b_rechnung.is(':checked')) {
        $c_bezahlungsart.text('auf Rechnung');
    } else if ($b_paypal.is(':checked')) {
        $c_bezahlungsart.text('Paypal');
    } else if ($b_kreditkarte.is(':checked')) {
        $c_bezahlungsart.text('Kreditkarte');
    }

    // versandart
    var $v_standard    = $('.versandart-standard'),
        $v_express     = $('.versandart-express'),
        $c_versandart  = $('.change-versandart');

    if ($v_standard.is(':checked')) {
        $c_versandart.text('Standardversand');
    } else if ($v_express.is(':checked')) {
        $c_versandart.text('Expressversand');
    }

}


// calculate costs for bestelluebersicht
function calculateCosts() {

    var $versandcost      = $('.price-toggle'),
        $price_wk         = $('.price-warenkorb'),
        $price_final      = $('.price-final'),
        $value_1          = $('.articles-price--one'),
        $value_2          = $('.articles-price--two'),
        $price_mwst       = $('.price-mwst'),
        count_1,
        count_2,
        count_versand,
        count_wk,
        count_final,
        count_mwst,
        count_wk_rounded,
        count_final_rounded,
        count_mwst_rounded;

    // calculate versandkosten
    if ($('.versandart-standard').is(':checked')) {
        count_versand = 0;
    } else if ($('.versandart-express').is(':checked')) {
        count_versand = 3;
    }

    // convert strings to integer and calculate prizes
    count_1 = parseInt($value_1.text().replace('€', ''));
    count_2 = parseInt($value_2.text().replace('€', ''));
    count_wk = count_1 + count_2;
    count_final = count_wk + count_versand;
    count_mwst  = (count_final/100)*19;

    // round to two digits after comma
    count_wk_rounded = Math.round(count_wk).toFixed(2).replace('.', ',');
    count_final_rounded = Math.round(count_final).toFixed(2).replace('.', ',');
    count_mwst_rounded = Math.round(count_mwst).toFixed(2).replace('.', ',');

    //change warenkorbwert und gesamtpreis
    $price_wk.text(count_wk_rounded + '€');
    $price_final.text(count_final_rounded + '€');
    $price_mwst.text(count_mwst_rounded + '€');
}


// update cart text and prizes
function updateCart() {

    var $c_article1_count  = $('.cart-article1-count'),
        $c_article1_price  = $('.cart-article1-price'),
        $c_article2_count  = $('.cart-article2-count'),
        $c_article2_price  = $('.cart-article2-price'),
        $c_wk_price        = $('.cart-wk-price'),
        $c_final_price     = $('.cart-final-price'),
        count_1_final      = $('.articles-count--one').val(),
        count_2_final      = $('.articles-count--two').val(),
        value_1_final      = $('.articles-price--one').text(),
        value_2_final      = $('.articles-price--two').text(),
        price_wk_final     = $('.price-warenkorb').text(),
        price_total_final  = $('.price-final').text();

    // update text fields
    $c_article1_count.text(count_1_final);
    $c_article1_price.text(value_1_final);
    $c_article2_count.text(count_2_final);
    $c_article2_price.text(value_2_final);
    $c_wk_price.text(price_wk_final);
    $c_final_price.text(price_total_final);
}


// update username and mail on checkout finish
function updateUserdata() {

    var $pre_username = $('.prefilled-name'),
        $pre_mail     = $('.prefilled-mail'),
        l_name        = $('.lieferadresse-name').val(),
        l_surname     = $('.lieferadresse-surname').val(),
        l_mail        = $('.lieferadresse-mail').val();

    $pre_username.val(l_name + l_surname);
    $pre_mail.val(l_mail);
}



$(document).ready(function($) {

    var $input = $('.fields-item-frame'),
        $cart  = $('.cart'),
        cart_offset = $cart.offset().top;


    // Hide loading spinner
    $('.spinner').hide();

    // Hide additional boxes
    $('.adressbox').hide();
    $('.kreditbox').hide();
    $('.versandbox').hide();
    $('.checkangabenbox').hide();
    $('.checkagbbox').hide();
    $('.checkbestellungbox').hide();
    $('.danke-info').hide();
    $('.tippsbox').hide();
    $('.nutzerkontobox').hide();

    // Hide error messages
    $('.fields-error').hide();
    $('.fields-error2').hide();

    // Hide icon for correct input
    $('.icon--correct').hide();
    $('.icon--precorrect').show();


    function scrollCart() {
        var scroll_offset      = $(window).scrollTop(),
            cart_scroll_offset = cart_offset + scroll_offset,
            $active_box        = $('.tab--active > .box'),
            box_height         = ($active_box.offset().top + $active_box.outerHeight()),
            cart_max_offset    = (cart_scroll_offset + $cart.outerHeight()),
            cart_max_position  = (box_height - $cart.outerHeight());

        // if cart reaches box end, stop moving it
        if (cart_max_offset <= box_height) {
            $cart.css('top', cart_scroll_offset);
        } else {
            $cart.css('top', cart_max_position);
        }
    }


    // Animate and switch tabs an nav clicks
    $(document).on('click', '.steps-item', function() {

        //smooth scroll to top
        $('body,html').animate({
            scrollTop: 0 ,
            }, 600
        );

        var $clicked_tab = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three'),
        $tab_active  = $('.tab--active > .box'),
        $spinner     = $('.spinner'),
        $one_number  = $('.step-one > .step-number'),
        $two_number  = $('.step-two > .step-number'),
        $one_done    = $('.step-one--done'),
        $two_done    = $('.step-two--done');

        // Show loading spinner on click
        $tab_active.addClass('box-overlay');
        $spinner.show();

        //check for errors
        // $('.fields-input').each(function(index, el) {
        //     if (!$(this).hasClass('fields-optional') && !$(this).hasClass('no-validation-required')) {
        //         checkErrorsInput($(this));
        //     }
        // });
        // $('.fields-number').each(function(index, el) {
        //     if (!$(this).hasClass('no-validation-required')) {
        //         checkErrorsNumber($(this));
        //     }
        // });
        // $('.fields-streetnumber').each(function(index, el) {
        //     if (!$(this).hasClass('no-validation-required')) {
        //         checkErrorsStreetNumber($(this));
        //     }
        // });
        // $('.fields-date').each(function(index, el) {
        //     if (!$(this).hasClass('no-validation-required')) {
        //         checkErrorsExpiration($(this));
        //     }
        // });
        // $('.fields-mail').each(function(index, el) {
        //     if (!$(this).hasClass('no-validation-required')) {
        //         checkErrorsMail($(this));
        //     }
        // });

        setTimeout(delay_one, 600);
        function delay_one() {

            // check if there are any errors or empty fields in the current tab
            if ($('.tab--active').find('.fields-error-frame').length > 0) {

            // go to next step if there are no errors
            } else {

                // click on tab 1
                if ($clicked_tab.hasClass('step-one') && !$clicked_tab.hasClass('steps-item--active')) {
                    $tab_one.removeClass('tab--inactive');
                    $tab_one.addClass('tab--active');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_one.addClass('steps-item--active');
                    if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_one.hasClass('steps-item--done')) {
                        $step_one.removeClass('steps-item--done');
                    }
                    if ($step_two.hasClass('steps-item--done')) {
                        $step_two.removeClass('steps-item--done');
                    }

                    // update cart prizes and text on load
                    updateCart();

                // click on tab 2
                } else if ($clicked_tab.hasClass('step-two') && !$clicked_tab.hasClass('steps-item--active')) {
                    $tab_two.removeClass('tab--inactive');
                    $tab_two.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_two.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_two.hasClass('steps-item--done')) {
                        $step_two.removeClass('steps-item--done');
                    }

                    // update cart prizes and text on load
                    updateCart();

                // click on tab 3
                } else if ($clicked_tab.hasClass('step-three') && !$clicked_tab.hasClass('steps-item--active')) {
                    $tab_three.removeClass('tab--inactive');
                    $tab_three.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');

                    $step_three.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    $step_two.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    }

                    // show additional boxes
                    showCheckboxes();
                    updateText();
                    calculateCosts();
                    updateUserdata();
                }
            }

            setTimeout(delay_spinner, 300);
            function delay_spinner() {
                // Hide loading spinner after tab-switch
                $tab_active.removeClass('box-overlay');
                $spinner.hide();
                checkStep();
            }
        }
    });


    // Animate and switch tabs on button clicks
    $(document).on('click', '.button-next', function() {

        //smooth scroll to top
        $('body,html').animate({
            scrollTop: 0 ,
            }, 600
        );

        var $clicked_button = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $tab_four    = $('.tab-four'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three'),
        $tab_active  = $('.tab--active > .box'),
        $spinner     = $('.spinner');

        // Show loading spinner on click
        $tab_active.addClass('box-overlay');
        $spinner.show();

        //check for errors
        $('.fields-input').each(function(index, el) {
            if (!$(this).hasClass('fields-optional') && !$(this).hasClass('no-validation-required')) {
                checkErrorsInput($(this));
            }
        });
        $('.fields-number').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsNumber($(this));
            }
        });
        $('.fields-streetnumber').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsStreetNumber($(this));
            }
        });
        $('.fields-date').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsExpiration($(this));
            }
        });
        $('.fields-mail').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsMail($(this));
            }
        });

        setTimeout(delay_two, 600);
        function delay_two() {

            // check if there are any errors or empty fields in the current tab
            if ($('.tab--active').find('.fields-error-frame').length > 0) {

            // go to next step if there are no errors
            } else {

                // click on button 1
                if ($clicked_button.hasClass('button-one')) {
                    $tab_one.removeClass('tab--inactive');
                    $tab_one.addClass('tab--active');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_one.addClass('steps-item--active');
                    if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_one.hasClass('steps-item--done')) {
                        $step_one.removeClass('steps-item--done');
                    }

                    // update cart prizes and text on load
                    updateCart();

                // click on button 2
                } else if ($clicked_button.hasClass('button-two')) {
                    $tab_two.removeClass('tab--inactive');
                    $tab_two.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_two.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_two.hasClass('steps-item--done')) {
                        $step_two.removeClass('steps-item--done');
                    }

                    // update cart prizes and text on load
                    updateCart();

                // click on button 3
                } else if ($clicked_button.hasClass('button-three')) {
                    $tab_three.removeClass('tab--inactive');
                    $tab_three.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');

                    $step_three.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    $step_two.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    }

                    // show additional boxes
                    showCheckboxes();
                    updateText();
                    calculateCosts();
                    updateUserdata();

                // click on button 4
                } else if ($clicked_button.hasClass('button-four')) {

                    // check if agbs are checked
                    if ($('#agbs').is(':checked')) {
                        $tab_four.removeClass('tab--inactive');
                        $tab_four.addClass('tab--active');
                        $tab_three.removeClass('tab--active');
                        $tab_three.addClass('tab--inactive');

                        $('.steps').hide();

                        // show additional boxes
                        showDankeboxes();
                    } else {
                        checkAgbs();
                    }
                }
            }

            setTimeout(delay_spinner2, 300);
            function delay_spinner2() {
                // Hide loading spinner after tab-switch
                $tab_active.removeClass('box-overlay');
                $spinner.hide();
                checkStep();
            }
        }
    });


    // Animate and switch tabs on button clicks
    $(document).on('click', '.button-prev', function() {

        //smooth scroll to top
        $('body,html').animate({
            scrollTop: 0 ,
            }, 600
        );

        var $clicked_button = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $tab_four    = $('.tab-four'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three');

        // click on button 1
        if ($clicked_button.hasClass('button-one')) {
            $tab_one.removeClass('tab--inactive');
            $tab_one.addClass('tab--active');
            $tab_two.removeClass('tab--active');
            $tab_two.addClass('tab--inactive');
            $tab_three.removeClass('tab--active');
            $tab_three.addClass('tab--inactive');

            $step_one.addClass('steps-item--active');
            if ($step_two.hasClass('steps-item--active')) {
                $step_two.removeClass('steps-item--active');
            } else if ($step_three.hasClass('steps-item--active')) {
                $step_three.removeClass('steps-item--active');
            }

            if ($step_one.hasClass('steps-item--done')) {
                $step_one.removeClass('steps-item--done');
            }

            if ($step_two.hasClass('steps-item--done')) {
                $step_two.removeClass('steps-item--done');
            }

        // click on button 2
        } else if ($clicked_button.hasClass('button-two')) {
            $tab_two.removeClass('tab--inactive');
            $tab_two.addClass('tab--active');
            $tab_one.removeClass('tab--active');
            $tab_one.addClass('tab--inactive');
            $tab_three.removeClass('tab--active');
            $tab_three.addClass('tab--inactive');

            $step_two.addClass('steps-item--active');
            $step_one.addClass('steps-item--done');
            if ($step_one.hasClass('steps-item--active')) {
                $step_one.removeClass('steps-item--active');
            } else if ($step_three.hasClass('steps-item--active')) {
                $step_three.removeClass('steps-item--active');
            }

            if ($step_two.hasClass('steps-item--done')) {
                $step_two.removeClass('steps-item--done');
            }
        }

        checkStep();
    });


    // Show and hide placeholder and labels in input fields
    $input.on('focus', function() {

        var $clicked_input = $(this);

        // Show placeholder
        $clicked_input.siblings('.fields-item-placeholder--info').removeClass('is-invisible');

        if ($clicked_input.siblings('.fields-item-placeholder--info').hasClass('fields-item--prefilled')) {
            $clicked_input.siblings('.fields-item-placeholder--info').css('color', '#cdd3d7');
        }

        // Show green, small label
        if ($clicked_input.siblings('label').hasClass('label--correct')) {
            $clicked_input.siblings('label').removeClass('label--correct');
        }
        $clicked_input.siblings('label').addClass('label--focused');
    });

    $input.on('focusout', function() {

        var $clicked_input = $(this);

        // Hide placeholder
        if (!$clicked_input.siblings('.fields-item-placeholder--info').hasClass('fields-item--prefilled')) {
            $clicked_input.siblings('.fields-item-placeholder--info').addClass('is-invisible');
        } else {
            $clicked_input.siblings('.fields-item-placeholder--info').css('color', '#34495e');
        }

        // Hide small label, if no input exists
        var value = $.trim($clicked_input.val());
        if (value.length === 0) {

            $clicked_input.siblings('label').removeClass('label--focused');

            // Show placeholder for prefilled fields
            if ($clicked_input.siblings('.fields-item-placeholder--info').hasClass('fields-item--prefilled')) {
                $clicked_input.siblings('.fields-item-placeholder--info').removeClass('is-invisible');
            }
        } else {

            $clicked_input.siblings('label').removeClass('label--focused');
            $clicked_input.siblings('label').addClass('label--correct');
        }
    });

    // Hide placeholder when user starts typing
    $input.on('input focus', function() {

        var $clicked_input = $(this),
            value = $.trim($clicked_input.val());

        if (value.length > 0) {

            $clicked_input.siblings('.fields-item-placeholder--info').addClass('is-invisible');

        } else {

            if ($('.fields-item-placeholder--info').hasClass('is-invisible')) {
                $clicked_input.siblings('.fields-item-placeholder--info').removeClass('is-invisible');
            }
        }
    });


    // Show and hide versandbox when in vision
    $(document).on('focus', '.kontakt-toggle', function() {

        if (!$(this).data('isClicked') && !$(this).hasClass('stop-trigger')) {
            var $trigger = $(this);

            $trigger.addClass('stop-trigger');
            showVersandbox();

            // Using a timer to prevent multiple clicks
            $trigger.data('isClicked', true);
            setTimeout(function() {
                $trigger.removeData('isClicked');
            }, 100);
        }
    });


    // Show and hide rechnungsadresse box when checked/unchecked
    $(document).on('click', '.rechnung-toggle', function() {

        if (!$(this).data('isClicked')) {
            var $trigger = $(this);

            adressbox();

            // Using a timer to prevent multiple clicks
            $trigger.data('isClicked', true);
            setTimeout(function() {
                $trigger.removeData('isClicked');
            }, 100);
        }
    });

    // Show kreditkarten box when checked
    $(document).on('click', '.kredit-toggle', function() {

        if (!$(this).data('isClicked')) {
            var $trigger2 = $(this);

            if (!$('#kreditkarte').is(':checked')) {
                showKreditbox();
            }

            // Using a timer to prevent multiple clicks
            $trigger2.data('isClicked', true);
            setTimeout(function() {
                $trigger2.removeData('isClicked');
            }, 100);
        }
    });

    // Hide kreditkarten box when unchecked
    $(document).on('click', '.kredit-toggle--off', function() {

        if (!$(this).data('isClicked')) {
            var $trigger2 = $(this);

            hideKreditbox();

            // Using a timer to prevent multiple clicks
            $trigger2.data('isClicked', true);
            setTimeout(function() {
                $trigger2.removeData('isClicked');
            }, 100);
        }
    });

    // Show/hide info on click
    $(document).on('click', '.danke-info', function() {

        if (!$(this).data('isClicked')) {
            var $trigger3 = $(this),
                $tippsbox = $('.tippsbox');

            if (!$tippsbox.hasClass('is-shown')) {
                $tippsbox.slideDown('400');
                $tippsbox.addClass('is-shown');
                $trigger3.addClass('is-shown');
            } else {
                $tippsbox.slideUp('400');
                $tippsbox.removeClass('is-shown');
                $trigger3.removeClass('is-shown');
            }

            // Using a timer to prevent multiple clicks
            $trigger3.data('isClicked', true);
            setTimeout(function() {
                $trigger3.removeData('isClicked');
            }, 100);
        }
    });


    // Form validation on input fields
    $(document).on('focusout', '.fields-input', function() {

        if (!$(this).hasClass('fields-optional') && !$(this).hasClass('no-validation')) {
            checkErrorsInput($(this));
        }
    });


    // Form validation on number fields
    $(document).on('focusout', '.fields-number', function() {

        if (!$(this).hasClass('no-validation')) {
            checkErrorsNumber($(this));
        }
    });


    // Form validation on street number fields
    $(document).on('focusout', '.fields-streetnumber', function() {

        if (!$(this).hasClass('no-validation')) {
            checkErrorsStreetNumber($(this));
        }
    });


    // Form validation on expiration date
    $(document).on('focusout', '.fields-date', function() {

        if (!$(this).hasClass('no-validation')) {
            checkErrorsExpiration($(this));
        }
    });


    // Form validation on password
    $(document).on('focusout', '.fields-password', function() {

        checkErrorsPassword($(this));
    });


    // Form validation on mail fields
    $(document).on('focusout', '.fields-mail', function() {

        if (!$(this).hasClass('no-validation')) {
            checkErrorsMail($(this));
        }
    });


    // Show password on toggle
    $(document).on('click', '.show-pw-toggle', function() {

        if (!$(this).data('isClicked')) {

            var $pw_check  = $('.pw-check'),
                $input_pw  = $('.fields-password'),
                $pw_toggle = $(this);

            if ($pw_check.is(':checked')) {
                $input_pw.attr('type', 'text');
            } else {
                $input_pw.attr('type', 'password');
            }

            // Using a timer to prevent multiple clicks
            $pw_toggle.data('isClicked', true);
            setTimeout(function() {
                $pw_toggle.removeData('isClicked');
            }, 300);
        }
    });


    // Indicate versandkosten change on toggle
    $(document).on('click', '.versand-toggle', function() {

        if (!$(this).data('isClicked')) {

            var $price = $('.price-toggle'),
                $price_ges = $('.price-toggle-ges'),
                $text_lieferung = $('.text-lieferung'),
                $clicked_versand = $(this);

            $price.addClass('pulse');
            $price_ges.addClass('pulse');
            $text_lieferung.addClass('color-highlight');

            // click on standardversand
            if ($clicked_versand.hasClass('versand-s')) {
                $price.text('0,00€');
                $text_lieferung.text('Lieferung voraussichtlich am Freitag, den 11.12.2015');
                calculateCosts();

            // click on expressversand
            } else {
                $price.text('3,00€');
                $text_lieferung.text('Lieferung voraussichtlich am Dienstag, den 08.12.2015');
                calculateCosts();
            }
            updateCart();

            // Using a timer to prevent multiple clicks
            $clicked_versand.data('isClicked', true);
            setTimeout(function() {
                $clicked_versand.removeData('isClicked');
                $price.removeClass('pulse');
                $price_ges.removeClass('pulse');
                $text_lieferung.removeClass('color-highlight');
            }, 500);
        }
    });


    // Calculate price on dropdown selection
    $(document).on('change', '.articles-count', function() {

        if (!$(this).data('isClicked')) {

            var $clicked_dropdown = $(this),
                clicked_count     = $clicked_dropdown.val(),
                $price_final      = $('.price-final'),
                $value_1          = $('.articles-price--one'),
                $value_2          = $('.articles-price--two');

            $price_final.addClass('pulse');

            // if count of first article changed
            if ($clicked_dropdown.hasClass('articles-count--one')) {

                if (clicked_count == 1) {
                    $value_1.text('39,00€');

                } else if (clicked_count == 2) {
                    $value_1.text('78,00€');

                } else if (clicked_count == 3) {
                    $value_1.text('117,00€');
                }

            // if count of second article changed
            } else if ($clicked_dropdown.hasClass('articles-count--two')) {

                if (clicked_count == 1) {
                    $value_2.text('69,00€');

                } else if (clicked_count == 2) {
                    $value_2.text('138,00€');

                } else if (clicked_count == 3) {
                    $value_2.text('207,00€');
                }
            }

            calculateCosts();

            // Using a timer to prevent multiple clicks
            $clicked_dropdown.data('isClicked', true);
            setTimeout(function() {
                $clicked_dropdown.removeData('isClicked');
                $price_final.removeClass('pulse');
            }, 500);
        }

    });


    // Make cart fixed on scroll
    $(window).on('scroll', function() {
        scrollCart();
    });

});