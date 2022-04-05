import CouponRepository from "../../../domain/repository/CouponRepository";
import ValidateCouponOutput from "./ValidateCouponOutput";

export default class ValidateCoupon {

	constructor (readonly couponRepository: CouponRepository) {
	}

	async execute (code: string): Promise<ValidateCouponOutput> {
		const coupon = await this.couponRepository.getByCode(code);
		if (!coupon) throw new Error("Coupon does not exist");
		const output = new ValidateCouponOutput(coupon.code, coupon.percentage, coupon.isExpired())
		return output;
	}
}
