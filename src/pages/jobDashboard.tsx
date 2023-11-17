import Layout from "@/layout/Layout";

export default function jobDashboard() {
    return (
        <Layout>
            <div>
                <h1 className="text-6xl font-semibold my-4 text-center">
                    Submitted Jobs
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 ">
                    {/* Mapping Owned Jobs */}
                </div>
            </div>
        </Layout>
    );
}
