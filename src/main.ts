import PostgreSQLConnectionAdapter from "./infra/database/PostgreSQLConnectionAdapter";
import DatabaseRepositoryFactory from "./infra/factory/DatabaseRepositoryFactory";
import ExpressHttp from "./infra/http/ExpressHttp";
import Router from "./infra/http/Router";

const connection = new PostgreSQLConnectionAdapter();
const repositoryFactory = new DatabaseRepositoryFactory(connection);
const http = new ExpressHttp();
const router = new Router(http, repositoryFactory, connection);
router.init();
http.listen(3002);
