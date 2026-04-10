import { motion } from 'framer-motion';
import { FiEdit3 } from 'react-icons/fi';
import { blogPosts } from '../../data/portfolioData';
import './Blog.css';

function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Blog</span>
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-description">
            Thoughts on development, technology, and lessons learned.
          </p>
        </motion.div>

        {blogPosts.length === 0 ? (
          <motion.div
            className="placeholder-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="placeholder-icon">
              <FiEdit3 />
            </div>
            <h3 className="placeholder-title">Coming Soon</h3>
            <p className="placeholder-text">
              Blog posts about development, AI, and technology will appear here. Stay tuned!
            </p>
          </motion.div>
        ) : (
          <div className="blog__grid">
            {blogPosts.map((post, i) => (
              <motion.a
                key={i}
                href={post.url}
                className="blog__card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span>{post.date}</span>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
