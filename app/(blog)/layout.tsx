import Navbar from "./_components/Navbar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center items-center w-full min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default BlogLayout;
