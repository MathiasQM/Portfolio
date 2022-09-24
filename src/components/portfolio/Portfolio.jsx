import React from 'react'
import './portfolio.css'
import { useInView } from 'react-intersection-observer'
import styles from '../../animations.css'
import PortfolioItem from './PortfolioItem.jsx'
import { useState, useEffect } from 'react'

const Portfolio = ({ post }) => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0
  });

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.mathiasqm.dk/wp-json/wp/v2/posts?_embed&v=99999");
            const data = await response.json();
                        console.log(data);
            setPosts(data);
        }
        getData();
    }, []);

  return (
    <section id='portfolio'  ref={sectionRef} className={`${inView ? styles.fadeIn : ""}`}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {posts.map(post => (
		        <PortfolioItem key={post.id} post={post} />
                ))}
      </div>
    </section>
  )
}

export default Portfolio