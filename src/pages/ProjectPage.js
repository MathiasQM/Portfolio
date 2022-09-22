import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../components/portfolio/portfolio.css'

export default function ProjectPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    const slugName = params.slug;
    console.log(slugName);

    useEffect(() => {
        async function getPost() {
            const url = `http://react-api.mathiasqm.dk/wp-json/wp/v2/posts?slug=${slugName}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPost(data[0]);
        }
        getPost();
    }, [slugName]);
    return (
        <div>
            <h2>{post.title && parse(post.title.rendered)}</h2>
            <div className="portfolio_item_image">
                <img src={post.acf?.img?.url} alt={post?.title?.rendered} />
            </div>
        </div>
    );
}
