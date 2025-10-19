import Image from "next/image";

export default function Courses(){
    return(
        <div className = "mt-8 mx-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:mb-0">
            <div className = "mb-4 bg-[#282828] rounded-[2rem]">
                <a href="/mobileFirst copy/cursoHtml.html">
                    <div className = "relative h-[40rem]">
                        <Image src="/img/html.svg" alt="" fill/>
                    </div>
                    <div className = "pb-4 text-white text-center">
                        <h4 className = "mb-2 text-[#53f1ac] text-[1.3rem]">Curso de HTML</h4>
                        <p>Nosso curso de HTML é presencial.</p>
                    </div>
                </a>
            </div>
            <div className = "mb-4 bg-[#282828] rounded-[2rem]">
                <a href="/mobileFirst copy/cursoHtml.html">
                    <div className = "relative h-[40rem]">
                        <Image src="/img/css.svg" alt="" fill/>
                    </div>
                    <div className = "pb-4 text-white text-center">
                        <h4 className = "mb-2 text-[#53f1ac] text-[1.3rem]">Curso de CSS</h4>
                        <p>Nosso curso de CSS é presencial.</p>
                    </div>
                </a>
            </div>
            <div className = "mb-4 bg-[#282828] rounded-[2rem]">
                <a href="/mobileFirst copy/cursoHtml.html">
                    <div className = "relative h-[40rem]">
                        <Image src="/img/games.svg" alt="" fill/>
                    </div>
                    <div className = "pb-4 text-white text-center">
                        <h4 className = "mb-2 text-[#53f1ac] text-[1.3rem]">Curso de Games</h4>
                        <p>Nosso curso de Games é presencial.</p>
                    </div>
                </a>
            </div>
            <div className = "mb-4 bg-[#282828] rounded-[2rem]">
                <a href="/mobileFirst copy/cursoHtml.html">
                    <div className = "relative h-[40rem]">
                        <Image src="img/js.svg" alt="" fill/>
                    </div>
                    <div className = "pb-4 text-white text-center">
                        <h4 className = "mb-2 text-[#53f1ac] text-[1.3rem]">Curso de JavaScript</h4>
                        <p>Nosso curso de JavaScript é presencial.</p>
                    </div>
                </a>
            </div>
            <div className = "mb-4 bg-[#282828] rounded-[2rem]">
                <a href="/mobileFirst copy/cursoHtml.html">
                    <div className = "relative h-[40rem]">
                        <Image src="img/design.svg" alt="" fill/>
                    </div>
                    <div className = "pb-4 text-white text-center">
                        <h4 className = "mb-2 text-[#53f1ac] text-[1.3rem]">Curso de Design</h4>
                        <p>Nosso curso de Design é presencial.</p>
                    </div>
                </a>
            </div>
            <div className = "mb-4 bg-[#282828] rounded-[2rem]">
                <a href="/mobileFirst copy/cursoHtml.html">
                    <div className = "relative h-[40rem]">
                        <Image src="img/robot.svg" alt="" fill/>
                    </div>
                    <div className = "pb-4 text-white text-center">
                        <h4 className = "mb-2 text-[#53f1ac] text-[1.3rem]">Curso de Robótica</h4>
                        <p>Nosso curso de Robótica é presencial.</p>
                    </div>
                </a>
            </div>
        </div>
    )
}