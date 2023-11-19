//user database
// import { Metadata } from "@/types/metadata";
// import { FC } from "react";

// //set for job posting
// type MetadataProps = {
//     metadata: Metadata;
//     title: string;
// };

// const ArchiveMetadata: FC<MetadataProps> = ({ metadata, title }) => {
//     return (
//         <div>
//             <h1 className="text-3xl font-semibold mb-2 mt-8 text-center">
//                 {title}
//             </h1>

//             <div className=" text-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-6">
//                 <h2 className="font-bold text-xl">Metadata</h2>
//                 {metadata.name && (
//                     <div>
//                         <strong>Name:</strong> {metadata.name}
//                     </div>
//                 )}
//                 {metadata.description && (
//                     <div>
//                         <strong>Description:</strong> {metadata.description}
//                     </div>
//                 )}
            
//                 {/* {metadata.fee!== undefined && (
//                     <div>
//                         <strong>Yearly fee: </strong>
//                         {metadata.fee}
//                     </div>
//                 )} */}
//             </div>
//         </div>
//     );
// };

// export default ArchiveMetadata;
