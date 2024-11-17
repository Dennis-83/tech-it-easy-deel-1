
function televisionTitle(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

export function tvSizes(tv) {
    let sizes = "";
    for (let i = 0; i < tv.availableSizes.length; i++) {
        const sizeInches = tv.availableSizes[i];
        const sizeCentimeters = convertInchToCentimeter(sizeInches);
        if (i === tv.availableSizes.length -1) {
        sizes += `${sizeInches} inch (${sizeCentimeters} cm)`;
        } else  {
        sizes += `${sizeInches} inch (${sizeCentimeters} cm) | `;
        }
    }
    return sizes;
}

function convertInchToCentimeter(inches) {
    return Math.round(inches * 2.54);
}

export function showTVEuroPrice(price) {
    return `€${price},-`
}

export default televisionTitle;
