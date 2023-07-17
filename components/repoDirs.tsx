import Link from "next/link";
import React from "react";

interface Props {
  name: string;
}

interface RepoDirectory {
  type: string;
  path: string;
}

const fetchRepoContents = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const results = await fetch(
    `https://api.github.com/repos/kevingarry97/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return await results.json();
};

const RepoDirs = async ({ name }: Props) => {
  const contents: RepoDirectory[] = await fetchRepoContents(name);
  const dirs = contents?.filter((content) => content.type === "dir");

  return (
    <>
      <h2>Directories</h2>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
