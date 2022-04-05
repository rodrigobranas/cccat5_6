export default class ValidateCouponOutput {

	constructor (readonly code: string, readonly percentage: number, readonly isExpired: boolean) {
	}
}
