import entry01 from "../assets/images/blog-item-01.png";
import entry02 from "../assets/images/blog-item-02.png";
import entry03 from "../assets/images/blog-item-03.png";

const posts = [
  {
    image: entry01,
    title: "Vivamus ac vehicula dui",
    text: "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.",
  },
  {
    image: entry02,
    title: "Phasellus convallis augue",
    text: "Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.",
  },
  {
    image: entry03,
    title: "Nam gravida purus non",
    text: "Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="px-4 py-20 text-center sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-medium sm:text-3xl">Blog Entries</h3>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat
          nibh. Cras maximus venenatis molestie.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <img src={post.image} alt="" className="w-full rounded-[20px] object-cover" />
              <h4 className="mt-5 text-lg font-medium">
                <a href="#blog" className="transition group-hover:text-pink">
                  {post.title}
                </a>
              </h4>
              <p className="mt-3 text-muted transition group-hover:text-ink">{post.text}</p>
              <a
                href="#blog"
                className="mt-5 inline-block rounded-full bg-violet px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-pink"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
