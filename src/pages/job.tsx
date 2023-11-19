import Layout from "@/layout/Layout";
import { JobMetadata } from "@/types/jobMetadata";
import { getNFTContract } from "@/util/getContracts";
import { useAddress, useMintNFT } from "@thirdweb-dev/react";
import { useState } from "react";

export default function jobDashboard() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");

    const { nft_contract } = getNFTContract();

    const { mutate: jobNFT, isLoading, error } = useMintNFT(nft_contract);/* can't change mint?? */
    const address = useAddress();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(event.target.value);
    };
    const handleSalaryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSalary(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault();

            if (name === "" || description === "" || salary === "" ) {
                return;
            }

            const metadata: JobMetadata = {
                metadata: {
                    name,
                    description,
                    salary,
                },
                to: address ?? "",
                supply: 1,
            };

           jobNFT(metadata);
        } catch (e) {
            console.log("Error Submitting", e);
        }
    };
    return (
        <Layout>
            <div>
                <h1 className="text-6xl font-semibold my-4 text-center">
                    Submit 
                </h1>

                <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                    <h1 className="text-2xl font-semibold my-4 text-center">
                        Fill details about the position you want hire{" "}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="font-bold text-xl">Name:</label>
                            <input
                                className=" ml-2 bg-gray-800"
                                placeholder="Name of the position"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div>
                            <label className="font-bold text-xl">
                                Description:{" "}
                            </label>
                            <input
                                className=" ml-2 bg-gray-800"
                                placeholder="Description of the position"
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </div>
                        <div>
                            <label className="font-bold text-xl">
                                Salary:{" "}
                            </label>
                            <input
                                className=" ml-2 bg-gray-800"
                                placeholder="Range of salary"
                                value={salary}
                                onChange={handleSalaryChange}
                            />
                        </div>
                        <button
                            className="mt-6 bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                            type="submit"
                        >
                            Jobs
                        </button>
                    </form>

                    {isLoading && (
                        <div className="text-center mt-4">
                            Submitting in progress ...
                        </div>
                    )}
                    {(error as unknown as boolean) && (
                        <div className="text-center mt-4">
                            Submitting in progress ...
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
