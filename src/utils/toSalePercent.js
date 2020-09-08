const toSalePercent = (price, salePrice) => `${Math.round(salePrice / price * 100 - 100)}%`;

export default toSalePercent;
