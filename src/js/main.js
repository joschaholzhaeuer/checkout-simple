/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

function adressbox() {

    var $label      = $('.fields-label-check'),
        $val_fields = $('.no-validation-fields'),
        $adressbox  = $('.adressbox');

    // if checkbox is unchecked, show additional box
    if ($label.hasClass('checked')) {

        $label.removeClass('checked');
        $adressbox.show();
        $adressbox.removeClass('no-validation');
        $val_fields.removeClass('no-validation-required');

    // if checkbox is checked, hide additional box
    } else {
        $label.addClass('checked');
        $adressbox.hide();
        $adressbox.addClass('no-validation');
        $val_fields.val('');
        if (!$val_fields.hasClass('no-validation-required')) {
            $val_fields.addClass('no-validation-required');
        }

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

    var $kreditbox = $('.kreditbox');

    $kreditbox.show();
    $kreditbox.removeClass('no-validation');
    $('.no-validation-fields2').removeClass('no-validation-required');

}

function hideKreditbox() {

    var $kreditbox = $('.kreditbox'),
        $val_fields = $('.no-validation-fields2');

    $kreditbox.hide();
    $kreditbox.addClass('no-validation');
    $val_fields.val('');

    if (!$val_fields.hasClass('no-validation-required')) {
        $val_fields.addClass('no-validation-required');
    }

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

function showDankeboxes() {

    var $nutzerkontobox = $('.nutzerkontobox'),
        $danke_info     = $('.danke-info'),
        $tippsbox       = $('.tippsbox');

    // show additional boxes after delay
    setTimeout(delayTabClick2, 1000);
    function delayTabClick2() {

        // show info
        $danke_info.show();

        // show nutzerkontobox
        $nutzerkontobox.show();
    }
}

function checkAgbs() {

    var $agbs = $('#agbs'),
        $fields_check = $('.fields-item-check'),
        agbs_offset = $agbs.offset().top,
        $agb_label = $agbs.siblings('.fields-label');

    if (!$agbs.is(':checked')) {

        $agb_label.addClass('fields-label--error');

    } else {

        if ($agb_label.hasClass('fields-label--error')) {
            $agb_label.removeClass('fields-label--error');
        }
    }
}

function checkKontoCheckboxes() {

    var $agb = $('#agb'),
        $agb_label = $agb.siblings('.fields-label');

    setTimeout(delayKonto, 600);
    function delayKonto() {

        if (!$agb.is(':checked')) {

            $agb_label.addClass('fields-label--error');

        } else {

            if ($agb_label.hasClass('fields-label--error')) {
                $agb_label.removeClass('fields-label--error');
            }
        }
    }
}

function checkStep() {

    if ($('.step-one').hasClass('steps-item--active')) {
        $('.step-two--done').addClass('is-hidden');

    } else if ($('.step-two').hasClass('steps-item--active')) {
        $('.step-one--done').removeClass('is-hidden');

    } else if ($('.step-three').hasClass('steps-item--active')) {
        $('.step-one--done').removeClass('is-hidden');
        $('.step-two--done').removeClass('is-hidden');
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
            }
        }
    }
}


// check street number for errors
function checkErrorsStreet($element) {

    var $current_field_n = $element,
        $icon_check      = $current_field_n.siblings('.icon--correct'),
        entered_input    = $current_field_n.val(),
        test_text        = /^([A-Zäöüß \-]|[A-Zäöüß \-]+[\.])*$/i;

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

// check street number for errors
function checkErrorsStreetNumber($element) {

    var $current_field_n = $element,
        $icon_check      = $current_field_n.siblings('.icon--correct'),
        entered_input    = $current_field_n.val(),
        test_text        = /^[1-90\/]*$/i;

    // remove check icon
    $current_field_n.removeClass('input--correct');
    $icon_check.hide();

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

        console.log(l_name);
        console.log(l_surname);
        console.log(l_mail);

    $pre_username.val(l_name + l_surname);
    $pre_mail.val(l_mail);
}



$(document).ready(function($) {

    var $input = $('.fields-item-frame'),
        $cart  = $('.cart'),
        cart_offset = $cart.offset().top;


    // Hide additional boxes
    $('.adressbox').hide();
    $('.kreditbox').hide();

    // Hide error messages
    $('.fields-error').hide();
    $('.fields-error2').hide();

    // Hide icon for correct input
    $('.icon--correct').hide();
    $('.icon--precorrect').show();


    // Animate and switch tabs an nav clicks
    $(document).on('click', '.steps-item', function() {

        var $clicked_tab = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three'),
        $tab_active  = $('.tab--active > .box'),
        $one_number  = $('.step-one > .step-number'),
        $two_number  = $('.step-two > .step-number'),
        $one_done    = $('.step-one--done'),
        $two_done    = $('.step-two--done');

        setTimeout(delay_one, 1000);
        function delay_one() {

            // check for errors
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
            $('.fields-street').each(function(index, el) {
                if (!$(this).hasClass('no-validation-required')) {
                    checkErrorsStreet($(this));
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

                    // change url
                    window.history.pushState('obj', 'lieferadresse', '/~holzhaeu/thesis_prototyp/checkout_simple/lieferadresse.html');

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

                    // change url
                    window.history.pushState('obj', 'bezahlungsart', '/~holzhaeu/thesis_prototyp/checkout_simple/bezahlungsart.html');

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
                    updateText();
                    calculateCosts();
                    updateUserdata();

                    // change url
                    window.history.pushState('obj', 'ueberpruefung', '/~holzhaeu/thesis_prototyp/checkout_simple/ueberpruefung.html');
                }

                // jump to top
                $('body,html').scrollTop(0);
            }

            setTimeout(delay_spinner, 300);
            function delay_spinner() {
                checkStep();
            }
        }
    });


    // Animate and switch tabs on button clicks
    $(document).on('click', '.button-next', function() {

        var $clicked_button = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $tab_four    = $('.tab-four'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three'),
        $tab_active  = $('.tab--active > .box');

        setTimeout(delay_two, 1000);
        function delay_two() {

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
            $('.fields-street').each(function(index, el) {
                if (!$(this).hasClass('no-validation-required')) {
                    checkErrorsStreet($(this));
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

                    // change url
                    window.history.pushState('obj', 'lieferadresse', '/~holzhaeu/thesis_prototyp/checkout_simple/lieferadresse.html');

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

                    // change url
                    window.history.pushState('obj', 'bezahlungsart', '/~holzhaeu/thesis_prototyp/checkout_simple/bezahlungsart.html');

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
                    updateText();
                    calculateCosts();
                    updateUserdata();

                    // change url
                    window.history.pushState('obj', 'ueberpruefung', '/~holzhaeu/thesis_prototyp/checkout_simple/ueberpruefung.html');

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

                        // change url
                        window.history.pushState('obj', 'erfolgreich', '/~holzhaeu/thesis_prototyp/checkout_simple/erfolgreich.html');

                    } else {
                        checkAgbs();
                    }
                }

                // jump to top
                $('body,html').scrollTop(0);
            }

            setTimeout(delay_spinner2, 300);
            function delay_spinner2() {
                checkStep();
            }
        }
    });


    // Animate and switch tabs on button clicks
    $(document).on('click', '.button-prev', function() {

        // jump to top
        $('body,html').scrollTop(0);

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


    // Form validation on input fields
    $(document).on('focusout', '.fields-input', function() {

        var $current_input = $(this);

        if (!$current_input.hasClass('fields-optional') && !$(this).hasClass('no-validation')) {

            // hide error message
            if ($current_input.hasClass('fields-error-frame')) {
                $current_input.removeClass('fields-error-frame');
                $current_input.siblings('.fields-item-label').show();
                $current_input.siblings('.fields-error').hide();
                $current_input.siblings('.fields-error2').hide();
            }
        }
    });


    // Form validation on number fields
    $(document).on('focusout', '.fields-number', function() {

        var $current_input = $(this);

        if (!$current_input.hasClass('no-validation')) {

            // hide error message
            if ($current_input.hasClass('fields-error-frame')) {
                $current_input.removeClass('fields-error-frame');
                $current_input.siblings('.fields-item-label').show();
                $current_input.siblings('.fields-error').hide();
                $current_input.siblings('.fields-error2').hide();
            }
        }
    });


    // Form validation on street number fields
    $(document).on('focusout', '.fields-streetnumber', function() {

        var $current_input = $(this);

        if (!$current_input.hasClass('no-validation')) {

            // hide error message
            if ($current_input.hasClass('fields-error-frame')) {
                $current_input.removeClass('fields-error-frame');
                $current_input.siblings('.fields-item-label').show();
                $current_input.siblings('.fields-error').hide();
                $current_input.siblings('.fields-error2').hide();
            }
        }
    });


    // Form validation on street fields
    $(document).on('focusout', '.fields-street', function() {

        var $current_input = $(this);

        if (!$current_input.hasClass('no-validation')) {

            // hide error message
            if ($current_input.hasClass('fields-error-frame')) {
                $current_input.removeClass('fields-error-frame');
                $current_input.siblings('.fields-item-label').show();
                $current_input.siblings('.fields-error').hide();
                $current_input.siblings('.fields-error2').hide();
            }
        }
    });


    // Form validation on expiration date
    $(document).on('focusout', '.fields-date', function() {

        var $current_input = $(this);

        if (!$current_input.hasClass('no-validation')) {

            // hide error message
            if ($current_input.hasClass('fields-error-frame')) {
                $current_input.removeClass('fields-error-frame');
                $current_input.siblings('.fields-item-label').show();
                $current_input.siblings('.fields-error').hide();
                $current_input.siblings('.fields-error2').hide();
            }
        }
    });


    // Form validation on password
    $(document).on('focusout', '.fields-password', function() {

        var $current_input = $(this);

        // hide error message
        if ($current_input.hasClass('fields-error-frame')) {
            $current_input.removeClass('fields-error-frame');
            $current_input.siblings('.fields-item-label').show();
            $current_input.siblings('.fields-error').hide();
            $current_input.siblings('.fields-error2').hide();
        }
    });


    // Form validation on mail fields
    $(document).on('focusout', '.fields-mail', function() {

        var $current_input = $(this);

        if (!$current_input.hasClass('no-validation')) {

            // hide error message
            if ($current_input.hasClass('fields-error-frame')) {
                $current_input.removeClass('fields-error-frame');
                $current_input.siblings('.fields-item-label').show();
                $current_input.siblings('.fields-error').hide();
                $current_input.siblings('.fields-error2').hide();
            }
        }
    });


    // Check button color on click on agbs checkbox
    $(document).on('click', '#agbs', function() {

        var $agbs = $('#agbs'),
            $agb_label = $agbs.siblings('.fields-label');

        if ($agb_label.hasClass('fields-label--error')) {
            $agb_label.removeClass('fields-label--error');
        }
    });


    // Check button color on click on agb checkbox
    $(document).on('click', '#agb', function() {

        var $agb = $('#agb'),
            $agb_label = $agb.siblings('.fields-label');

        if ($agb_label.hasClass('fields-label--error')) {
            $agb_label.removeClass('fields-label--error');
        }
    });


    // Add / when entering expiry date
    $(document).on('keyup', '.fields-date', function(key) {

        var $fields_date = $(this),
            code = key.which;

        // allow backspace
        if (code != 8) {

            if ($fields_date.val().length == 2){
                $fields_date.val($fields_date.val() + "/");
            }
        }
    });


    // Prevent button click if checkboxes agb and news are not checked
    $(document).on('click', '.button-last', function(event) {

        checkErrorsPassword($('.fields-password'));

        if (!$('#agb').is(':checked')) {
            event.preventDefault();
            checkKontoCheckboxes();

        } else if ($('.tab--active').find('.fields-error-frame').length > 0) {
            event.preventDefault();
            checkKontoCheckboxes();
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
            }, 500);
        }

    });

});