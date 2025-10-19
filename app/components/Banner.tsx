import Image from "next/image";
import BannerContent from "./BannerContent";

export default function Banner(){
    return(
        <div className = "md:grid md:grid-cols-2 md:items-center">
            <div className = "relative h-[40rem]">
                <Image src="/img/banner.svg" alt="uma pessoa sentada no sofa com um computador no colo" fill/>
            </div>
            <BannerContent/>
        </div>
    )
}