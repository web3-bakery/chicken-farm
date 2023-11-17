"use client";

import { useSearchParams } from "next/navigation";
import ChickenCoopPage from "../../../components/chicken-coop/ChickenCoopPage";

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams?.get("id");
  console.log("Search Param:", search);

  if (!search) return null;

  return <ChickenCoopPage id={search} />;
}
