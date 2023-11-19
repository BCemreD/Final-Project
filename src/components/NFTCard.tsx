import React, { FC } from "react";
import Link from "next/link";
import { NFT, ThirdwebNftMedia } from "@thirdweb-dev/react";

const NFTCard: FC<NFT> = (job) => {
    return (
        <Link href={`/job/${job.metadata.id}`} passHref>
            <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                <ThirdwebNftMedia
                    metadata={job.metadata}
                    height={"100%"}
                    width={"100%"}
                    style={{ maxHeight: 300 }}
                />

                <div className="h-24 bottom-0 left-0 right-0 opacity-75">
                    <div className="bottom-4 left-0 right-0 p-1">
                        <h2 className="text-2xl font-bold mb-2">
                            {job.metadata.name}
                        </h2>
                        <p className="mb-2 text-gray-400">
                            {job.metadata.description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NFTCard;
