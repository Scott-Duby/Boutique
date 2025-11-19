-- CreateTable
CREATE TABLE "ClientSettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "theme" TEXT,
    "poshmark_username" TEXT,

    CONSTRAINT "ClientSettings_pkey" PRIMARY KEY ("id")
);
