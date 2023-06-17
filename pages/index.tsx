import { loadPosts } from "../lib/load-posts";
import * as I from "@features/index";

const Home = ({ posts }: any) => {
  return (
    <I.PageContainer>
      <I.HeroSection />
      <I.ArticleContainer>
        <I.HeaderandButton>
          <h3>Read articles</h3>
          <I.ButtonUi text="View all" href={""} color={I.ButtonColor.white} />
        </I.HeaderandButton>

        {posts?.map((article: any) => (
          <I.PostArticle key={article._id} {...article} />
        ))}
      </I.ArticleContainer>
    </I.PageContainer>
  );
};

export const getStaticProps = async () => {
  const posts = await loadPosts();

  // Props returned will be passed to the page component
  return { props: { posts } };
};

export default Home;
