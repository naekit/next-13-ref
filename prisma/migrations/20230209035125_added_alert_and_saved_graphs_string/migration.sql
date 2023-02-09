-- AlterTable
ALTER TABLE "User" ADD COLUMN     "savedGraphs" TEXT[];

-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "currency" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
