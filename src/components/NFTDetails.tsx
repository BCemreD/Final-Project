import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React, { FC } from "react";

const JobDetails: FC<NFT> = (job) => {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <div className="flex w-full justify-between mb-4">
                <h2 className="text-2xl font-bold">{job.metadata.name}</h2>
                <h2 className="text-2xl font-bold ">{`ID:${job.metadata.id}`}</h2>
            </div>
            <ThirdwebNftMedia
                metadata={job.metadata}
                height={"100%"}
                width={"100%"}
                style={{ maxHeight: 450 }}
            />
            <div className="mb-2 text-center">
                <strong>{job.metadata.description}</strong>
            </div>
            {job.metadata.external_url && (
                <div className="mb-2">
                    <strong>External URL:</strong>{" "}
                    <a
                        href={job.metadata.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400"
                    >
                        {job.metadata.external_url}
                    </a>
                </div>
            )}

            <div className="mb-2">
                <strong>Company:</strong> {job.supply}
            </div>
            <div className="mb-2">
                <strong>Type:</strong> {job.type}
            </div>
            <div className="mb-2">
                <strong>Hiring Manager:</strong> {job.owner}
            </div>
        </div>
    );
};

export default JobDetails;
