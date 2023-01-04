import { useState } from "react";
import Image from "next/image";
import {AlignedDiv} from "@components/StyledComponents"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

const ImageSlider = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    }

    if(length <= 0) return null;
    return (
        <div className="slider">
            <FaArrowAltCircleLeft onClick={prevSlide} className="left-arrow"/>
            <AlignedDiv>
            {
                images.map((image, index, alt) => {
                    return (
                        <div key={index} className={index === currentImage ? 'slide active' : 'slide'}>
                            {
                                index === currentImage && (
                                    <Image src={image.url} alt={alt} width={600} height={850}/>
                                )
                            }
                        </div>
                    )
                })
            }
            </AlignedDiv>
            <FaArrowAltCircleRight onClick={nextSlide} className="right-arrow"/>
            </div>
    )
}

export default ImageSlider;