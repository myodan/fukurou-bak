import type { AppType } from "@fukurou/api";
import { hc } from "hono/client";

export const clinet = hc<AppType>("http://localhost:8000");
