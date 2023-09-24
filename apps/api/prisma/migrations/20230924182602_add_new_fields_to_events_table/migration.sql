/*
  Warnings:

  - You are about to drop the column `create_at` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `events` table. All the data in the column will be lost.
  - Added the required column `description` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventLink` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationType` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `events` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `events` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('BOOTCAMP', 'COMMUNITY', 'CONFERENCE', 'HACKATON', 'LECTURE', 'WORKSHOP');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('REMOTE', 'IN_PERSON', 'BOTH');

-- CreateEnum
CREATE TYPE "Price" AS ENUM ('FREE', 'PAID', 'BOTH');

-- AlterTable
ALTER TABLE "events" DROP COLUMN "create_at",
DROP COLUMN "end_date",
DROP COLUMN "start_date",
DROP COLUMN "update_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "eventLink" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "locationType" "LocationType" NOT NULL,
ADD COLUMN     "price" "Price" NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
