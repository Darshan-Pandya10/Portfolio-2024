import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: 'm627ikx8nomq',
  environment: 'master',
  accessToken: 'CiAPWGZXQmy2PmvlL4xSo218r4Re1pIWqtw_du5j1hA'
});

export const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const getProjects = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((project) => {
        const { title, url, tag, image } = project.fields;
        const img = image?.fields?.file?.url;
        return { title, url, tag, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return { loading, projects, error };
};
