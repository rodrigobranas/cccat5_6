import GetItemsQuery from "../../src/application/query/get-items/GetItemsQuery";
import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import GetItemsQueryWebPresenter from "../../src/infra/presenter/GetItemsQueryWebPresenter";

let connection: Connection;

beforeEach(async function () {
	connection = new PostgreSQLConnectionAdapter();
});

test("Deve obter os itens com o preço formatado em reais", async function () {
	const presenter = new GetItemsQueryWebPresenter("pt-BR", "BRL");
	const getItems = new GetItemsQuery(connection, presenter);
	await getItems.execute();
	expect(presenter.items[0].description).toBe("GUITARRA");
});

test("Deve obter os itens com o preço formatado em dólares", async function () {
	const presenter = new GetItemsQueryWebPresenter("en-US", "USD");
	const getItems = new GetItemsQuery(connection, presenter);
	await getItems.execute();
	expect(presenter.items[0].description).toBe("GUITARRA");
});

afterEach(async function () {
	await connection.close();
});
