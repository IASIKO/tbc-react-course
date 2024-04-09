import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";

export default function BlogDetails({ params }) {
  return (
    <>
      <TitleBgImage>Blog Details</TitleBgImage>
      <BlogDetailsContent params={params} />
    </>
  );
}
