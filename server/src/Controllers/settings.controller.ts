import { prisma } from "src/db/prisma"

export const DefaultSettingsSelect = {
    poshmark_username: true,
    theme: true
}

export const getSettings = async () => {
    return await prisma.clientSettings.findFirst({ select: DefaultSettingsSelect})
}