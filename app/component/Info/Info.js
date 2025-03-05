import Card from "../Card/Card"

export default function Info() {
    return (
        <div className="flex flex-col sm:flex-row gap-8 w-full justify-around mt-2 ">
            <Card className='' title='Free' price='0' description={["10 users included",
                "2 GB of storage",
                "Email support",
                "Help center access"]} text='Sign up for free' csstype='secondary' />
            <Card title='Pro' price='15' description={["20 users included",
                "10 GB of storage",
                "Priority email support",
                "Help center access"]} text='Get started' />
            <Card title='Enterprise' price='29' description={["30 users included",
                "15 GB of storage",
                "Phone and email support",
                "Help center access"]} text='Contact us' />
        </div>
    )
}