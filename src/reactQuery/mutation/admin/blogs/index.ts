import { useNavigate } from "react-router-dom";
import {
  createBlogInAdmin,
  updateBlogInAdmin,
} from "../../../../pages/api/apiForBlogs";
import { useMutation } from "@tanstack/react-query";

export const useUpdateBlog = () => {
  const navigate = useNavigate();

  return useMutation<
    void,
    Error,
    { id: string; values: { title_en: string; description_en: string } }
  >({
    mutationFn: updateBlogInAdmin,

    onSuccess: () => {
      navigate("/admin/blogs");
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};

export const useCreateBlog = () => {
  const navigate = useNavigate();

  return useMutation<void, Error, { title_en: string; description_en: string; title_ka:string; description_ka:string}>({
    mutationFn: createBlogInAdmin,

    onSuccess: () => {
      navigate("/admin/blogs");
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};
