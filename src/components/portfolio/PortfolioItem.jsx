import parse from "html-react-parser";
import './portfolio.css'
import React from "react";
import { useState } from "react";
import ReadMore from "./ReadMore";

const PortfolioItem = ({ post }) => {
    
    const [showDialog, setShowDialog] = useState(false);

    const billede = post.acf?.img?.url;
    const titel = post.title.rendered;
    const description = post.acf.description;

    return (
        <article key={post.id} className="portfolio_item">
            <div className="portfolio_item_image">
                <img src={post.acf?.img?.url} alt={post.title.rendered} />
            </div>
            <small>
                Status: <span>{parse(post.acf.progress)}</span>
            </small>
            <h3>{parse(post.title.rendered)}</h3>
            <div className="portfolio_item_cta">
                <a href={post.acf.livedemo} className="btn" target="_blank">
                    Live Demo
                </a>
                <button onClick={() => setShowDialog(true)} className="btn btn-primary">Read More</button>
            </div>
                <ReadMore readMoreDescription={description} readMoreTitel={titel} readMoreBillede={billede} key={post.id} post={post} show={showDialog} setShow={setShowDialog} />
        </article>
    );
};

export default PortfolioItem;
