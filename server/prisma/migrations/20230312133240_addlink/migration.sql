/*
  Warnings:

  - Made the column `link` on table `Link` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Link` MODIFY `link` VARCHAR(191) NOT NULL;
