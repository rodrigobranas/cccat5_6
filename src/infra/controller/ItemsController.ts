import GetItemsQuery from "../../application/query/get-items/GetItemsQuery";
import GetItemsQueryPresenter from "../../application/query/get-items/GetItemsQueryPresenter";
import Connection from "../database/Connection";

export default class ItemsController {

	constructor (readonly connection: Connection, readonly presenter: GetItemsQueryPresenter) {
	}

	async getItems () : Promise<GetItemsQueryPresenter> {
		const getItems = new GetItemsQuery(this.connection, this.presenter);
		await getItems.execute();
		return this.presenter;
	}
}
