export type JobMetadata = {
    metadata: {
        name: string;
        description: string;
        seller_fee_basis_points?: number;
    };
    to: string;
    supply: 1;
};
