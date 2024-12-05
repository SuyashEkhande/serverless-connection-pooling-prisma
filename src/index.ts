import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());

		const response = await prisma.log.create({
			data: {
				level: "info",
				message: `${request.method} ${request.url}`,
				meta: {
					headers: JSON.stringify(request.headers),
				},
			},
		})

		const { data, info } = await prisma.log
			.findMany({
				take: 20,
				orderBy: {
					id: "desc",
				},
			})
			.withAccelerateInfo();
		
		console.log(JSON.stringify(response));

		return new Response(`Request Method: ${request.method}! ${JSON.stringify(data)}`);
	}
}