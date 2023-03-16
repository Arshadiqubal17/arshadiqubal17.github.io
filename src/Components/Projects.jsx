import React from 'react';
import styled from 'styled-components';

import SEPHORA from '../Resources/Images/Project/sephora.png';
import SHOP from '../Resources/Images/Project/shop.png';
import ROYALBROTHERS from '../Resources/Images/Project/royalbrothers.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';

const Projects = () => {
    const projects = [
        {
            id: 7,
            title: 'Shop.com Clone',
            img: SHOP,
            desc: "SHOP.COM is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. Our shopping experts have drawn on their industry experience and insider connections to bring you the best collection of the stores you can't live without, and the brands and products you love - all in one place.",
            worked: 'A collaborative project, built in 5 days by a team of 3 developers.',
            githubLink: 'https://github.com/ritikraj07/Project_shop.com',
            
            deployedLink: 'https://timely-bavarois-d3839f.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 6,
            title: 'SEPHORA Clone',
            img: SEPHORA,
            desc: 'Owned by LVMH Moët Hennessy Louis Vuitton, the world’s leading luxury goods group, Sephora was founded in France by Dominique Mandonnaud in 1970, A leader in prestige omni-retail, it is a platform specially deals in makeup and beauty products.',
            worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
            githubLink: 'https://github.com/suryathink/sephora-clone',
            deployedLink: 'https://suryathink.github.io/sephora-clone/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
       
       
       
       
        {
            id: 1,
            title: 'ROYAL BROTHERS Clone',
            img: ROYALBROTHERS,
            desc: 'A platform providing rentals (bikes, scooty) spanning across 14 states, 43 cities and 3 international cities.',
            worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
           
            githubLink: 'https://github.com/Arshadiqubal17/royalBrothersclone',
            deployedLink: 'https://royalbrothers-project.vercel.app/',
            tags: ['HTML', 'CSS', 'Javascript', 'React']
        }
    ]

    return (
        <Container id='projects' >
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                {ele.githubLink && <a href={ele.githubLink} target='_blank' rel='noreferrer'><button><GitHubIcon />Github</button></a>}
                                <a href={ele.deployedLink} target='_blank' rel='noreferrer'><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid #e9e9e9;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
    }

    .imgBox>img:hover{
        position:absolute;
        width:80%;
        transform: scale(1.3);
        transform-origin: 0% 0%;
    }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#343a40;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#01a479;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:#44a4be;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects