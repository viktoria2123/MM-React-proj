import React, { useState, useEffect } from "react";
import "./Slider.scss";


const images = [
    {
        id: 1,
        url: "https://media.gettyimages.com/id/131651347/photo/american-actress-marilyn-monroe-circa-1950.jpg?s=612x612&w=0&k=20&c=WSl02MulivhtEWZTVdDL5Ddm3B5ztDqOnTRIaJMic48=",
        alt: "First slide",
    },
    {
        id: 2,
        url: "https://media.gettyimages.com/id/644181940/photo/portrait-of-american-actress-marilyn-monroe-as-she-lies-on-a-bed-wrapped-in-a-white-sheet.jpg?s=612x612&w=0&k=20&c=kZ8fr8KZp3qT2aK1BMpCWqkyEplZcfdb4SNRYM_7sxA=",
        alt: "Second slide",
    },
    {
        id: 3,
        url: "https://media.gettyimages.com/id/73996487/photo/american-actress-marilyn-monroe-leans-over-the-balcony-of-the-ambassador-hotel-in-march-1955-in.jpg?s=612x612&w=0&k=20&c=4mKvfb0Brisdkq4z1nJoLATaiViqaxfNbgZOVcLHKwo=",
        alt: "Third slide",
    },
    {
        id: 4,
        url: "https://media.gettyimages.com/id/3241708/photo/exclusive-married-american-actors-lauren-bacall-and-humphrey-bogart-pose-with-american-actor.jpg?s=612x612&w=0&k=20&c=wh6jdh2rQIlLxNnWWW3rDJQ_fhKlt5dXKPlDFfxn5b0=",
        alt: "Third slide",
    },
    {
        id: 5,
        url: "https://media.gettyimages.com/id/517721488/photo/scene-outside-a-food-store-at-51st-street-and-lexington-avenue-early-today-as-marilyn-monroe.jpg?s=612x612&w=0&k=20&c=Cx5i3RMc1IOenAUUecw8YDxhsUJZIV8jznO9fSgaVUU=",
        alt: "Third slide",
    },
    {
        id: 6,
        url: "https://media.gettyimages.com/id/517323566/photo/2-25-1956-new-york-ny-in-perfect-form-as-usual-marilyn-monroe-obliges-lens-corps-at-idlewild.jpg?s=612x612&w=0&k=20&c=8vxRHouoMpqNiq4Q4P-BEozFhWoG7kb-idpWyJ930Hw=",
        alt: "Third slide",
    },
    {
        id: 7,
        url: "https://media.gettyimages.com/id/3227574/photo/exclusive-portrait-of-american-actor-marilyn-monroe-as-she-holds-a-white-carnation-while-lying.jpg?s=612x612&w=0&k=20&c=WOg6wScqGLXXrFAUSLwzsPlZfD-GlIuTHByq0CTZYYk=",
        alt: "Third slide",
    },
    {
        id: 8,
        url: "https://media.gettyimages.com/id/73996494/photo/actress-marilyn-monroe-relaxes-in-a-quiet-moment-in-a-restaurant-in-march-1955-in-new-york-city.jpg?s=612x612&w=0&k=20&c=-Rm_RpILO-kZOYNG4xI1pZEC2n-b1rODj8hFKFYsQRk=",
        alt: "Third slide",
    },
    {
        id: 9,
        url: "https://media.gettyimages.com/id/73996477/photo/actress-marilyn-monroe-takes-the-subway-in-grand-central-station-on-march-24-1955-in-new-york.jpg?s=612x612&w=0&k=20&c=A3wI3vd6qR1nkKChGu7Y0XE8FXfxvOLba3z9YuPG1Bw=",
        alt: "Third slide",
    },
    {
        id: 10,
        url: "https://media.gettyimages.com/id/517237620/photo/glamour-queens-marilyn-monroe-and-jane-russell-needless-to-say-made-hollywoods-hall-of-fame-at.jpg?s=612x612&w=0&k=20&c=EMsNLODBnMpEELGIZ1S--a92gcg8VjYsrB5piZkFqTA=",
        alt: "Third slide",
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // оновлення слайдера кожні 3 секунди

        return () => clearInterval(interval);
    }, [currentIndex]); // зупинка інтервалу при зміні індексу слайду

    return (
        // <div className="slider-container">
        //     <button className="slider-control" onClick={() => prevSlide()}>
        //         ❮
        //     </button>
        //     <div className="slider">
        //         <img
        //             className="slider-image"
        //             src={images[currentIndex].url}
        //             alt={images[currentIndex].alt}
        //         />
        //     </div>
        //     <button className="slider-control" onClick={() => nextSlide()}>
        //         ❯
        //     </button>
        // </div>

        <div className="slider">
            <div className="slider-image">
            <img
                    className="slider-image"
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                />
            </div>
            <div className="slider-controls">
                <button className="slider-control slider-control-left" onClick={() => prevSlide()}>
                    ❮
                </button>
                <button className="slider-control slider-control-right" onClick={() => nextSlide()}>
                    ❯
                </button>
            </div>
        </div>

    );
};

export default Slider;
