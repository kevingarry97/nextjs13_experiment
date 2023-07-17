import Link from "next/link";
import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

interface Props {
  name: string;
}

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

const fetchRepo = async (name: string) => {
  const results = await fetch(
    `https://api.github.com/repos/kevingarry97/${name}`
  );
  return await results.json();
};

const Repo = async ({ name }: Props) => {
  const repo: Repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
