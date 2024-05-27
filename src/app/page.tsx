// import React from "react";
// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";
// import { getListManga } from "@/services";
// import Mangas from "@/components/features/manga/Manga";

import React from "react";

// export default async function Manga() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["mangas"],
//     queryFn: getListManga,
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <Mangas />
//     </HydrationBoundary>
//   );
// }

export default function Manga() {
  return <React.Fragment>Manga Home</React.Fragment>;
}
