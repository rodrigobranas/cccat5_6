import GetItemOutput from "../../application/query/get-items/GetItemOutput";
import GetItemsQueryPresenter from "../../application/query/get-items/GetItemsQueryPresenter";

export default class GetItemsQueryWebPresenter implements GetItemsQueryPresenter {
	items: { idItem: number, description: string, price: number, formattedPrice: string}[];

	constructor (readonly locale: string, readonly currency: string) {
		this.items = [];
	}
 
	present(getItemsOutput: GetItemOutput[]): void {
		for (const getItemOutput of getItemsOutput) {
			const description = getItemOutput.description.toUpperCase();
			const formattedPrice = new Intl.NumberFormat(this.locale, { currency: this.currency, style: "currency"}).format(getItemOutput.price);
			this.items.push({
				idItem: getItemOutput.idItem,
				description,
				price: getItemOutput.price,
				formattedPrice
			});
		}
	}
}
