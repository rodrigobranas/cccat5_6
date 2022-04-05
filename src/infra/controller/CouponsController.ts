import GetOrderOutput from "../../application/usecase/get-order/GetOrderOutput";
import GetOrders from "../../application/usecase/get-orders/GetOrders";
import PlaceOrder from "../../application/usecase/place-order/PlaceOrder";
import PlaceOrderInput from "../../application/usecase/place-order/PlaceOrderInput";
import PlaceOrderOutput from "../../application/usecase/place-order/PlaceOrderOutput";
import ValidateCoupon from "../../application/usecase/validate-coupon/ValidateCoupon";
import ValidateCouponOutput from "../../application/usecase/validate-coupon/ValidateCouponOutput";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";

export default class CouponsController {

	constructor (readonly repositoryFactory: RepositoryFactory) {
	}

	async validateCoupon (code: string): Promise<ValidateCouponOutput> {
		const validateCoupon = new ValidateCoupon(this.repositoryFactory.createCouponRepository());
		const output = await validateCoupon.execute(code);
		return output;
	}
}
