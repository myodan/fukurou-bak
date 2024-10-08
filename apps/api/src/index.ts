import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono()
	.use(logger())
	.get("/", (c) => {
		return c.text("Hello Hono! : GET");
	})
	.post("/", (c) => {
		return c.text("Hello Hono! : POST");
	});

export default {
	port: 8000,
	fetch: app.fetch,
};

export type AppType = typeof app;
