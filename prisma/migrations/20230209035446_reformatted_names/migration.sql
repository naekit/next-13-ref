/*
  Warnings:

  - You are about to drop the column `graph` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `currency` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentiment` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "graph",
DROP COLUMN "title",
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "sentiment" TEXT NOT NULL;
