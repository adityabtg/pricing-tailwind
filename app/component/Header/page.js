import Card from "../Card/Card"

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
            <div className="mt-24 ml-16 mr-16 mb-24 px-5">
                <h1 className="text-center text-5xl font-bold]">Pricing</h1>
                <p className="mt-5 whitespace-normal font-thin">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
            </div>
            <div className="ml-5 container min-h-[50px]">
                <div className="flex">
                    <Card className='shadow-xs' title='Free' price='0' description={["10 users included",
                        "2 GB of storage",
                        "Email support",
                        "Help center access"]} />
                    <Card title='Free' price='0' description={["20 users included",
                        "10 GB of storage",
                        "Priority email support",
                        "Help center access"]} />
                    <Card title='Free' price='0' description={["30 users included",
                        "15 GB of storage",
                        "Phone and email support",
                        "Help center access"]} />
                </div>
                <footer>
                    <div></div>
                    <div>
                        <h4>Features</h4>
                    </div>
                    <div></div>
                    <div></div>

                </footer>
            </div>
        </>
    )
}