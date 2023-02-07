import {Context} from "../types";

export default class TelegramUserService {
    private static async _findById(ctx: Context, id: number) {
        return ctx.db.telegramUser.findFirst({
            where: {
                telegramId: id
            }
        });
    }

    private static async _create(ctx: Context, id: number) {
        return ctx.db.telegramUser.create({
            data: {
                telegramId: id
            }
        });
    }

    public static async findOrCreate(ctx: Context, id: number) {
        return await this._findById(ctx, id) ?? await this._create(ctx, id)
    }
}