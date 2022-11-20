import React from 'react';
import "./Main.css";
import Rectangle6342 from "../../assets/Rectangle 6342.png";
import Rectangle6343 from "../../assets/Rectangle 6343.png";
import Rectangle6344 from "../../assets/Rectangle 6344.png";
import Rectangle6345 from "../../assets/Rectangle 6345.png";
import Rectangle6346 from "../../assets/Rectangle 6346.png";
import Rectangle6347 from "../../assets/Rectangle 6347.png";
import Rectangle6348 from "../../assets/Rectangle 6348.png";
import Rectangle6349 from "../../assets/Rectangle 6349.png";

const Main = () => {

    const details1 = [
        {   key: 1,
            image: `${Rectangle6343}`,
            name: "Mike Essein",
            title: "CEO & Founder",
        },
        {   key: 2,
            image: `${Rectangle6344}`,
            name: "Kalada Epelle",
            title: "Product Manager",
        },
        {   key: 3,
            image: `${Rectangle6345}`,
            name: "Divine Favor David",
            title: "Team Lead, Software Dev",
        },
        {   key: 4,
            image: `${Rectangle6349}`,
            name: "Toyosi Odunlake",
            title: "Team Lead, Web Dev",
        },
    ]

    const details2 = [
        {   key: 1,
            image: `${Rectangle6346}`,
            name: "Chidera Ozoagu",
            title: "Assistant Lead, Web Dev",
        },
        {   key: 2,
            image: `${Rectangle6347}`,
            name: "Adesina Adegbonmire",
            title: "Team Lead, Design",
        },
        {   key: 3,
            image: `${Rectangle6348}`,
            name: "Itunuoluwa Oladapo",
            title: "Assistant Team Lead, Design",
        },
        {   key: 4,
            image: `${Rectangle6342}`,
            name: "Abasiubong",
            title: "Team Lead, Marketing",
        },
    ]

    return (
        <div className="main-wrapper">
            <div className='main-text'>
                <h1>CONTRIBUTORS</h1>
                <h2>Meet the people who make Team VBelt, Project #23 happen..</h2>
            </div>
            
            <div className='main-images'>
                {details1.map((detail) => {
                    return ( 
                        <div className='main-container' key={detail.key}>
                            <div className='main-img'>
                                <img src={detail.image} alt="main-img" />
                            </div>
                            <h2 className='main-name'>{detail.name}</h2>
                            <h3 className='main-title'>{detail.title}</h3>
                        </div>
                    )
                })
                }
            </div>

            <div className='main-images'>
                {details2.map((detail) => {
                    return ( 
                        <div className='main-container' key={detail.key}>
                            <div className='main-img'>
                                <img src={detail.image} alt="main-img" />
                            </div>
                            <h2 className='main-name'>{detail.name}</h2>
                            <h3 className='main-title'>{detail.title}</h3>
                        </div>
                    )
                })
                }
            </div>

            
        </div>
    )
}

export default Main