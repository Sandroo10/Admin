import { supabase } from "../../supabase";

export const getBlogsList = async () => {
  const { data, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.error("Error fetching blogs list:", error.message);
    throw new Error(error.message); 
  }

  return data as Blog[];
};

export const getSingleBlogInAdmin = async (id: string) => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*") 
    .eq("id", Number(id)) 
    .single(); 

  if (error) {
    console.error("Error fetching blogs list:", error.message);
    throw new Error(error.message); 
  }

  return data;
};



export const updateBlogInAdmin = async ({
  id,
  values,
}: {
  id: string;
  values: { title_en: string; description_en: string }; 
}): Promise<void> => {
  const { error } = await supabase
    .from("blogs")
    .update({
      title_en: values.title_en,
      description_en: values.description_en,
    })
    .eq("id", Number(id));

  if (error) {
    throw error;
  }
};


export const createBlogInAdmin = async (values: {
  title_en: string;
  description_en: string;
  title_ka: string; 
  description_ka: string; 
}): Promise<void> => {
  try {
    const { error } = await supabase.from("blogs").insert({
      title_en: values.title_en,
      description_en: values.description_en,
      title_ka: values.title_ka, 
      description_ka: values.description_ka, 
    });

    if (error) {
      console.error("Supabase Error:", error.message);
      throw new Error(error.message);
    }
  } catch (err) {
    console.error("Error occurred:", err);
    throw err;
  }
};


export type Blog = {
  created_at: string;
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
};
