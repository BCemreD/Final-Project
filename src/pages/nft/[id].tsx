import Layout from "@/layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function JobDetailsPage() {
    const router = useRouter();
    const [price, setPrice] = useState(0.01);
    const [symbol, setSymbol] = useState("");
    const [listingID, setListingID] = useState("");
    const [jobID, setJobID] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { id } = router.query;
            setJobID(id as string);
        }
    }, [router.query]);

    return (
        <Layout>
            <div>
                <h1 className="text-6xl font-semibold my-4 text-center">
                    Job Details
                </h1>
            </div>
        </Layout>
    );
}
export default JobDetailsPage;
