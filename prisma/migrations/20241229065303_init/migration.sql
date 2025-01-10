-- CreateTable
CREATE TABLE "username" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "value" VARCHAR(255) NOT NULL,

    CONSTRAINT "username_pkey" PRIMARY KEY ("id")
);
