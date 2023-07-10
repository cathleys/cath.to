import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { SinglePost } from "@features/single-post";
import { PageContainer } from "@features/ui";
import { getPost } from "pages/api/posts/[id]";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://post-to.vercel.app/api/posts");

  const data = await res.json();

  const paths = data?.data?.map((post: { _id: string }) => {
    return {
      params: {
        id: `${post?._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const params = context.params!;
  const data = await getPost(params.id);

  return { props: { post: JSON.parse(JSON.stringify(data)) } };
};

const SinglePostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("single post ", post);

  return (
    <PageContainer>
      {" "}
      <SinglePost post={post} />
    </PageContainer>
  );
};

export default SinglePostPage;
