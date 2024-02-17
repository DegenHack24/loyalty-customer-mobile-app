import { hashMessage } from "@ethersproject/hash";
import { ethers, Wallet } from "ethers";

const pk = "481297e58cb24471fa9ed44e4eab63c03dede03c397d531b487ef6143bf0d1f2";

const signCoupon = async (coupon: string) => {
    const wallet = new Wallet(pk);
    console.log(await wallet.signMessage(coupon));
    return await wallet.signMessage(coupon);
}

export {
    signCoupon
}