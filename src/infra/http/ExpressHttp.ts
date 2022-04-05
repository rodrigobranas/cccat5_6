import express from "express";
import Http from "./Http";

export default class ExpressHttp implements Http {
	app: any;

	constructor () {
		this.app = express();

		this.app.use(express.json());

		// @ts-ignore
		this.app.all('*', function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
			res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token, Authorization');
			next();
		});
		
		// @ts-ignore
		this.app.options('*', function (req, res, next) {
			res.end();
		});
	}
	
	async route(method: string, url: string, callback: any): Promise<any> {
		this.app[method](url, async function (req: any, res: any) {
			const result = await callback(req.params, req.body);
			res.json(result);
		});
	}

	async listen(port: number): Promise<void> {
		await this.app.listen(port);
	}
}
