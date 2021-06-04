import React from 'react';
import { experts_sample_list } from '../../values/content';
import Title from '../layout/title-container/title';
import { CardArticle } from '../plugins/cards/card-smart';

function Blog(){
    return (
        <>
            <Title model={{ title: "Blog", path: ["Site 01"] }}/>
            
            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">
        
                <div className="text-center ct-flex ct-nowrap">
                    <h1 className="ct-font-sp ct-font-secondary">Blog</h1>
                </div>

                <div className="ct-row-content text-left">
                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>

                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                </div>

                <div>
                    <button className="btn ct-btn ct-success ct-tag">Articles</button>
                    <button className="btn ct-btn ct-success ct-tag">Researches / Tests</button>
                    <button className="btn ct-btn ct-alternate ct-tag">Surveys</button>
                </div>

                <div className="hr-spacer"></div>
            </div>

            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row-content">

                <div className="ct-container-item ct-wrap ">

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>

                    {
                         experts_sample_list.map(element => <CardArticle model={element}/>)
                    }


                </div>

            </div>
        </>
    )
}

export default Blog;