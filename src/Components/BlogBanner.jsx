import BlogBox from "./BlogBox";
import blog1 from "../assets/BlogImages/blog1.png";
import blog2 from "../assets/BlogImages/blog2.png";
import blog3 from "../assets/BlogImages/blog3.png";
import blog4 from "../assets/BlogImages/blog4.png";

const BlogBanner = () => {
    return (
      <section className="Blog">
        <BlogBox imgSrc={blog1} date="13/09" />
        <BlogBox imgSrc={blog2} date="14/07" />
        <BlogBox imgSrc={blog3} date="15/05" />
        <BlogBox imgSrc={blog4} date="16/06" />
      </section>
    );
  };
  
  export default BlogBanner;