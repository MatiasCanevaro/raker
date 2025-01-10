-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "short_url" VARCHAR(255) NOT NULL,
    "long_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);
