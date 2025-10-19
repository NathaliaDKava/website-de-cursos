import Nav from "./Nav";

export default function Header(){
    return(
        <header className = "py-2 text-center bg-[#343434] md:flex md:justify-between">
              <h3 className = "ml-4 mb-[0.7rem] mt-1 text-white text-[1.4rem]">📖ESCOLA DE INFORMÁTICA📱</h3>

              <Nav/>
        </header>
    )
}