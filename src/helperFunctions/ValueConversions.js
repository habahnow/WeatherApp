export const kelvinsToFarenheit = ( kelvins ) => {
    return (9/5 * ( kelvins - 273 ) + 32).toFixed(2);
}

export const kelvinsToCelsius = ( kelvins ) => {
    return (kelvins - 273.15).toFixed(2);
}

export const mmToInches = ( millimeters ) => {
    return (millimeters * .03937008).toFixed(2);
}