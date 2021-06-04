import React from 'react';
import  { Link } from 'react-router-dom';

const btn_colors = ['ct-primary', 'ct-alternate', 'ct-success', 'ct-warning', 'ct-danger '];

const btn_sizes = ['ct-btn-lg', 'ct-btn-sm'];

// const btn_mode = ['ct-btn', 'ct-clip-btn'];

export const ButtonSmart = (
    props,
    // btn_name,
    // btn_type,
    // btn_size,
    // btn_color,
    // btn_click

) => {

    const clip = props.model.type==='clip'?true:false;
    const name = !props.model.caption?'CLICK':props.model.caption;

    const size = props.model.btn_size==='large'?btn_sizes[0]:'';

    const color = props.model.color==='primary'?btn_colors[0]:
                    props.model.color==='alternate'?btn_colors[1]:
                    props.model.color==='success'?btn_colors[2]:
                    props.model.color==='warning'?btn_colors[3]:
                    props.model.color==='danger'?btn_colors[4]:
                                   '';

    const link = props.model.url?props.model.url:'';                               
    
    // const classes = {
    //     type: true,
    //     size: true,
    //     color: true
    // };
    
    
    return (
        <>
            { 
                clip? 
                    <>
                        <div class="ct-clip-btn">
                            <input type="text" placeholder="Type Item, Brand etc."/>
                            <a href="#" class="ct-btn-sm"><i class="fas fa-search"></i></a>
                        </div>
                    </>
                :
                    <Link to={link}>
                        <button className={`btn ct-btn ${color} ${size}`}>{name}</button>
                    </Link>
            }
            
        </>
    );


}
