import BlogsCreateUpdateFrom from "../../components/form/createUpdate";
import { useCreateBlog } from "../../../../../reactQuery/mutation/admin/blogs";

const BlogsCreateView: React.FC = () => {
  const { mutate: createBlogInAdmin, isPending } = useCreateBlog();

  const handleSubmit = (values: { title_en: string; description_en: string, title_ka:string; description_ka:string }) => {
    createBlogInAdmin(values);
  };

  return (
    <>
      <h1 className="font-bold mb-5 text-xl">Create User</h1>
      <BlogsCreateUpdateFrom
        initialValues={{ title_en: "", description_en: "", title_ka:"", description_ka:"" }}
        submitCallbackFn={handleSubmit}
      />
      {isPending && <p>Creating blog...</p>}
    </>
  );
};

export default BlogsCreateView;
