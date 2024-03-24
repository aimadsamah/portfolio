import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Aluminium & PVC",
    img: "https://www.ouveo-menuiseries.fr/wp-content/uploads/2021/01/ASS_41_SC_m_innen_closed-2048x1153.png",
    desc: "Developed a sleek React website highlighting the products and services of an aluminum and PVC manufacturing company, featuring intuitive navigation, product galleries, and easy contact options for enhanced user engagement.",
    demoLink: "https://65f0def690c57b5a99796828--amazing-kulfi-47e343.netlify.app/"
  },
  {
    id: 2,
    title: "E-Commerce",
    img: "https://www.terawork.com/blog/wp-content/uploads/2022/11/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1-1.png",
    desc: "Crafted an e-commerce platform integrating React, Node.js, and MongoDB to showcase and sell products.",
    demoLink: "https://65f0c4a360dc4847c3f5894f--cerulean-kulfi-4ec177.netlify.app/"
  },
  {
    id: 3,
    title: "React Blog",
    img: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Developed a dynamic blog platform utilizing React and Node.js, offering an engaging interface for content creation and consumption. Seamlessly integrated features include user authentication, post management, and interactive commenting, delivering a modern blogging experience tailored for both creators and readers.",
    demoLink: "https://65f0ee150174006494564c8d--aesthetic-basbousa-9cd501.netlify.app/"
  },
  {
    id: 4,
    title: "Social Media",
    img: "https://insights.som.yale.edu/sites/default/files/styles/max_2600x2600/public/2021-06/210606_AddictiveSocialMedia_FINAL_0.png?itok=Eiw5yNzF",
    desc: "Developed a vibrant social media platform using React and Node.js, enabling users to connect and share content effortlessly. The platform features user profiles, customizable news feeds, and robust content sharing capabilities, fostering engaging interactions and community building.",
    demoLink: "https://65f0f5e72102fe6a7e288094--spectacular-pixie-9a0b1d.netlify.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 420]);

  const handleDemoButtonClick = () => {
    window.location.href = item.demoLink;
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoButtonClick}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
