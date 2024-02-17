const createCouponQRMessage = (couponId: number, message: string, signature: string) => {
    console.log(signature);
    const json = {
        "couponId": couponId,
        "message": message,
        "signature": signature
    }
    const jsonString = JSON.stringify(json);
    return btoa(jsonString);
}

export {
    createCouponQRMessage
}