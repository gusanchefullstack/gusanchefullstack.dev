import Link from "next/link";
import { initialRepos } from "../../../data";

const Projects = () => {
  return (
    <div>
      <h2 className="font-outfit text-5xl text-blue-200 font-extrabold mb-8">
        Projects
      </h2>
      {initialRepos.map((repo) => (
        <div key={repo.id}>
          <Link href={`/projects/${repo.id}`}>{repo.name}</Link>
        </div>
      ))} 
    </div>
  );
};

export default Projects;
