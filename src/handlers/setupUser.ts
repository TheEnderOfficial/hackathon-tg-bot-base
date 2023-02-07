import TelegramUserService from "../services/telegramUserService";
import {Context} from "../types";

export default async (ctx: Context, next: () => Promise<void>) => {
    if (!ctx || !ctx.from) {
        return next();
    }
    ctx.user = await TelegramUserService.findOrCreate(ctx, ctx.from.id);
    return next();
}