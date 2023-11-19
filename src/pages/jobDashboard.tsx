import NFTCard from "@/components/NFTCard";
import Layout from "@/layout/Layout";
import { getNFTContract } from "@/util/getContracts";
import { useAddress, useOwnedNFTs } from "@thirdweb-dev/react";

export default function JobDashboard() {
    const { nft_contract } = getNFTContract();
    const address = useAddress();

    const { data: submittedJobs, isLoading } = useOwnedNFTs(nft_contract, address);
    return (
        <Layout>
            <div>
                <h1 className="text-6xl font-semibold my-4 text-center">
                    My Jobs
                </h1>

                {!address && (
                    <div>
                        <div className="text-center">
                            You need to connect your wallet first!
                        </div>
                    </div>
                )}

                {address && isLoading ? (
                    <div className="text-center">Loading Submitted Jobs..</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 ">
                        {submittedJobs &&
                            submittedJobs.map((job, id) => {
                                return <NFTCard key={id} {...job} />;
                            })}
                    </div>
                )}
            </div>
        </Layout>
    );
}
