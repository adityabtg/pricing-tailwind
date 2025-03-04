import Card from "../Card/Card"
import FooterCard from "../Card/FooterCard"
export default function Footer() {
    return (<>
        <footer className=" mt-15 border-t-2 border-gray-500 p-4">
         <div className="pt-10 flex justify-between">
         <div >
                <img src="/bootstrap-solid.svg" alt='Bootstrap LOGO' className="max-h-5 max-w -5 " />
                <small>© 2017-2018</small>
            </div>
            <div> <FooterCard title='Features' info={["Cool stuff",
                "Random feature",
                "Team feature",
                "Stuff for developers",
                "Another one",
                "Last time"]} /></div>
            <div>
                <FooterCard title='Resources' info={["Resource",
                    "Resource name",
                    "Another resource",
                    "Final resource"]} />
            </div>
            <div>
                <FooterCard title='About' info={["30 users included",
                    "15 GB of storage",
                    "Phone and email support",
                    "Help center access"]} />
            </div>
         </div>
        </footer>
    </>)
}