function biggestScreenSize(tv) {
    tv.availableSizes.sort((sizeA, sizeB) => sizeB - sizeA);
    // console.log(tv.availableSizes[0]);
    return tv.availableSizes[0];
}

export default biggestScreenSize;