-- CreateTable
CREATE TABLE "TwitterProfile" (
    "id" SERIAL NOT NULL,
    "profileId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "profileCreatedAt" TEXT NOT NULL,
    "pinnedTweetId" TEXT NOT NULL,
    "isProtected" BOOLEAN NOT NULL,
    "isVerified" BOOLEAN NOT NULL,
    "followersCount" INTEGER NOT NULL,
    "followingCount" INTEGER NOT NULL,
    "tweetCount" INTEGER NOT NULL,
    "listedCount" INTEGER NOT NULL,
    "likeCount" INTEGER NOT NULL,
    "urls" JSONB NOT NULL,
    "kolId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TwitterProfile_kolId_key" ON "TwitterProfile"("kolId");

-- CreateIndex
CREATE INDEX "TwitterProfile_id_kolId_idx" ON "TwitterProfile"("id", "kolId");

-- AddForeignKey
ALTER TABLE "TwitterProfile" ADD CONSTRAINT "TwitterProfile_kolId_fkey" FOREIGN KEY ("kolId") REFERENCES "Kol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
