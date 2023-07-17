import Repo from "@/components/repo";
import RepoDirs from "@/components/repoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

const RepoPage = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        {/* @ts-expect-error Server Component */}
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading repo...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
