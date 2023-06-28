import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem , CImage} from "@coreui/react";
import './style.css';

export default function Carousel({mouse, images}) {
    // const ReactImg= "./image/passport.jpg";
    // console.log(images);
    const lent= images.length ;
    let i=0;
    function increment (){
        i++;
    }
  return (
    <>
    <CCarousel controls={mouse? true: false} indicators={mouse?true: false} >
    {/* {images?.map((image, index)=>{
        return (<> */}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {i!==lent && (
            <CCarouselItem>
            <CImage className="d-block w-100 slide-img" src={`${images[i]}`} alt={`slide ${i}`} />
            {increment()}
        </CCarouselItem>
        )}
        {/* </>) */}
    {/* })} */}
    </CCarousel>
    </>
  );
}
