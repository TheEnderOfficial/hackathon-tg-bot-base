import {Scenes, Context as TelegrafContext, Telegraf, Composer as TelegrafComposer} from "telegraf";
import {PrismaClient, TelegramUser} from "@prisma/client";

interface WizardSession extends Scenes.WizardSessionData {}
interface Session extends Scenes.WizardSession<WizardSession> {}
interface Context extends TelegrafContext {
    session: Session;
    user: TelegramUser;
    db: PrismaClient;
    scene: Scenes.SceneContextScene<Context, WizardSession>;
    wizard: Scenes.WizardContextWizard<Context>;
}

const Bot = Telegraf<Context>;
export {
    WizardSession,
    Context,
    Session,
    Bot
}