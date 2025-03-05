import Card from "../Card/Card"
import FooterCard from "../Card/FooterCard"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <nav className="flex flex-col sm:flex-row items-center justify-between sm:py-5 sm:px-12 shadow-md min-h-10 align-middle">
                <div className="font-normal "><h2>Company name</h2></div>
                <div>
                    <Link href="#" className='sm:p-3 p-1 font-thin hover:underline transition '>Features</Link>
                    <Link href="#" className='sm:p-3 p-1 font-thin hover:underline transition '>Enterprise</Link>
                    <Link href="#" className='sm:p-3 p-1 font-thin hover:underline transition '>Support</Link>
                    <Link href="#" className='sm:p-2 p-1 font-thin hover:underline transition '>Pricing</Link>
                </div>
                <Link href="#" className='mt-2 ml-3 p-2 font-thin border-1 bg-white rounded-sm text-blue-500 hover:bg-blue-500 hover:text-white'>Sign Up</Link>
            </nav>
        </>
    )
}