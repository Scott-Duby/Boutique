/*
  Warnings:

  - You are about to drop the column `theme` on the `ClientSettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClientSettings" DROP COLUMN "theme",
ADD COLUMN     "boutique_name" TEXT,
ADD COLUMN     "show_id" TEXT,
ADD COLUMN     "show_rows" INTEGER NOT NULL DEFAULT 8;
