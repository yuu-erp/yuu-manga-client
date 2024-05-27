"use client";

import { getListManga } from "@/services";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Mangas() {
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data, error } = useQuery({ queryKey: ["mangas"], queryFn: getListManga });

  console.log("data: ", data);
  console.log("error: ", error);
  return <React.Fragment>Manga</React.Fragment>;
}
