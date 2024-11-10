import {bestSellingTv} from "../constants/inventory.js";

function bestSellingTVString() {
    const tv = bestSellingTv;
    const tvSizes = bestSellingTVsizes();
    const tvPrice = addEuroSign(tv.price);
    console.log(bestSellingTv);
    const objectToString = `${tv.brand} ${tv.type} - ${tv.name} ${tvPrice} ${tvSizes}`;
    console.log(objectToString);
    return objectToString;
}

function bestSellingTVsizes() {
    let sizes = "";
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        const sizeInches = bestSellingTv.availableSizes[i];
        const sizeCentimeters = convertInchToCentimeter(sizeInches);
        if (i === bestSellingTv.availableSizes.length -1) {
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

function addEuroSign(price) {
    return `€${price},-`
}

export default bestSellingTVString;
