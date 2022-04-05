export default class PlaceOrderInput {

	constructor (readonly cpf: string, readonly orderItems: { idItem: number, quantity: number}[], readonly coupon?: string, public issueDate: Date = new Date()) {
	}
}
