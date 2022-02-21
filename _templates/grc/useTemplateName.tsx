// import { useQuery, useQueryClient, useMutation } from "react-query";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import useUserStore from "hooks/useUserStore";
// import {
//   getCampaigns,
//   getCampaign,
//   postCampaign,
//   putCampaign,
//   deleteCampaign,
// } from "helpers/api/campaigns";
// import ObjectViewer from "components/ObjectViewer";

// export const useCampaigns = (ID = "all") => {
//   const userStore = useUserStore();
//   const QueryClient = useQueryClient();
//   const router = useRouter();
//   const QUERY_KEY = `campaigns`;
//   const campaigns = useQuery([QUERY_KEY, ID], async () =>
//     ID === "all"
//       ? (await getCampaigns({ userStore })).items
//       : await getCampaign({ userStore, id: ID })
//   );
//   const create = useMutation(
//     (campaign) => {
//       return postCampaign({ userStore, campaign });
//     },
//     {
//       onSuccess: (res) => {},
//       onError: (err) => {},
//     }
//   );
//   const update = useMutation(
//     (campaign) => {
//       return putCampaign({ userStore, campaign });
//     },
//     {
//       onSuccess: (res) => {},
//       onError: (err) => {},
//     }
//   );
//   const remove = useMutation(
//     (campaign) => {
//       return deleteCampaign({ userStore, campaign });
//     },
//     {
//       onSuccess: (res) => {},
//       onError: (err) => {},
//     }
//   );

//   return {
//     Viewer: (props) => (
//       <ObjectViewer
//         {...props}
//         object={campaigns.isLoading ? {} : campaigns.data}
//       />
//     ),
//     Table: (props) => {},
//     Form: (props) => {},
//     get: campaigns,
//     update: update,
//     create: create,
//     remove: remove,
//   };
// };
