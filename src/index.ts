import "dotenv/config";
import {Bot} from "./types";
import handlers from "./handlers";
import {PrismaClient} from "@prisma/client";

const bot = new Bot(process.env.BOT_TOKEN!);
const db = new PrismaClient();

bot.context.db = db;

async function main() {
    await db.$connect();
    handlers.forEach(i => bot.use(i))

    console.log('Launching telegraf bot!')
    await bot.launch();
}

main();