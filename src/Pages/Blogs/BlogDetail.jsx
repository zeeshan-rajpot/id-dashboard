import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar';


const BlogDetail = () => {
    const { data } = useParams();
    const blog = JSON.parse(decodeURIComponent(data)); // Fetch the blog title from the URL
    ;

    // const blog = blogs.find((blog) => blog.title === title);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <>


            <section className="flex flex-col lg:flex-row justify-between gap-4 h-auto w-full">
                <SideBar />
                <div className="pt-10 w-full lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-auto">
                    {/* <Navbar /> */}
                    <div className="max-w-4xl mx-auto mt-8 p-4">
                        <img src={blog.picture} alt={blog.title} className="w-full h-96 object-cover rounded-md" />
                        <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
                        <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
                        <p className="text-gray-700 mt-4">{blog.description}</p>
                    </div>


                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
};

export default BlogDetail;
