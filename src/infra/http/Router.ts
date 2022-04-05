import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import CouponsController from "../controller/CouponsController";
import ItemsController from "../controller/ItemsController";
import OrdersController from "../controller/OrdersController";
import Connection from "../database/Connection";
import GetItemsQueryWebPresenter from "../presenter/GetItemsQueryWebPresenter";
import Http from "./Http";

export default class Router {

	constructor (readonly http: Http, readonly repositoryFactory: RepositoryFactory, readonly connection: Connection) {
	}

	init () {
		this.http.route("get", "/orders", async (params: any, body: any) => {
			const ordersController = new OrdersController(this.repositoryFactory);
			const output = await ordersController.getOrders();
			return output;
		});

		this.http.route("post", "/orders", async (params: any, body: any) => {
			const ordersController = new OrdersController(this.repositoryFactory);
			const output = await ordersController.placeOrder(body);
			return output;
		});

		this.http.route("get", "/items", async (params: any, body: any) => {
			const presenter = new GetItemsQueryWebPresenter("pt-BR", "BRL");
			const itemsController = new ItemsController(this.connection, presenter);
			await itemsController.getItems();
			return presenter.items;
		});

		this.http.route("post", "/validateCoupon", async (params: any, body: any) => {
			const couponsController = new CouponsController(this.repositoryFactory);
			const output = await couponsController.validateCoupon(body.code);
			return output;
		});
	}
}
