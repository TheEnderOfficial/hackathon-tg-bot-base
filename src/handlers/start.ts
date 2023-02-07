import {Composer} from "telegraf";
import {Context} from "../types";

const _ = new Composer<Context>();

_.start(async (ctx) => {
    console.log(ctx.user)
    await ctx.reply("Полёт нормальный!")
})

export default _;