import Card from "../Card/Card"
import FooterCard from "../Card/FooterCard"

export default function Header() {
    return (
        <>
            <nav className="flex items-center justify-between py-5 px-12 shadow-md min-h-10 align-middle">
                <div className="font-normal"><h2>Company name</h2></div>
                <div>
                    <a href="#" className='p-3 font-thin hover:underline transition '>Features</a>
                    <a href="#" className='p-3 font-thin hover:underline transition '>Enterprise</a>
                    <a href="#" className='p-3 font-thin hover:underline transition '>Support</a>
                    <a href="#" className='p-2 font-thin hover:underline transition '>Pricing</a>
                    <a href="#" className='ml-3 p-2 font-thin border-1 bg-white rounded-sm text-blue-500 hover:bg-blue-500 hover:text-white'>Sign Up</a>
                </div>
            </nav>
        </>
    )
}