import { initialRepos } from "../../../../data";
type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
};

const ProjectDetails = async ({ params }: ProjectPageProps) => {
  const { projectId } = await params;

  const repo = initialRepos.find((repo) => repo.id.toString() === projectId);

  if (!repo) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <h2>Project Details</h2>
      <p>This is the details page for project: {repo.id}</p>
      <a href={repo.html_url} target="_blank">{repo.name}</a>
      <p><a href={repo.homepage? repo.homepage : repo.html_url} target="_blank">{repo.name}</a></p>
      <p>{repo.description}</p>
    </div>
  );
};

export default ProjectDetails;
