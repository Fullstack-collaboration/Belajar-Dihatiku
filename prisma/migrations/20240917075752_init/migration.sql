-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "link" TEXT,
    "category" TEXT,
    "year" TEXT,
    "author" TEXT,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);
