import casino from './imgaes/casino.jpg'
import cricket3 from "./imgaes/cricket3.webp"
import Basketball from "./imgaes/Basketball.jpg"
import dd from "./imgaes/dd.jpg"
import football from "./imgaes/football.jpg"
import Tennis from "./imgaes/Tennis.jpg"
import football2 from "./imgaes/football2.jpg"
export default function Slider() {

    const data = [
        { url: cricket3 },
        { url: football2 },
        { url: dd },
        { url: Tennis },
        { url: Basketball },
        { url: football },
        { url: casino },

    ]

    return (
        <>
            <div className="containerSlider ">
                <ul className="cards">
                    {
                        data.map((ele, i) => {
                            return (
                                <li className="card" style={{ "backgroundImage": `url(${ele.url})` }} key={i}>
                                    <div className="card-link-wrapper">
                                        <a href="" className="card-link">Learn More</a>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

        </>
    )
}
