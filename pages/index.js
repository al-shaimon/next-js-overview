import Link from 'next/link';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';

export default function Home({ posts }) {
  return (
    <div>
      <Banner></Banner>
      <div className="text-center mb-10">
        {posts.map((post) => (
          <div key={post?.id} className="card mx-10 my-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <p>{post?.body}</p>
            </div>
          </div>
        ))}
        <Link href="/posts">
          <button className="btn btn-accent">See More</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
