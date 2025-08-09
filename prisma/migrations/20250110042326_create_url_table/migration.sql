-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "short_url" TEXT NOT NULL,
    "long_url" TEXT NOT NULL,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);
