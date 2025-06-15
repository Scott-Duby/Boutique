import { prisma } from "../db/prisma"

export const DefaultSettingsSelect = {
    poshmark_username: true,
    theme: true
}

export const getSettings = async () => {
    return await prisma.clientSettings.findFirst({ select: DefaultSettingsSelect})
}

export const updateUsername = async (username: string) => {
    let newUsername = await prisma.clientSettings.update({ where: { id: 1 }, data: { poshmark_username: username}})

    return newUsername
}