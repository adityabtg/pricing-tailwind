export default function FooterCard({ title, info }) {
    return (
        <>
            <div className="">
                <div>
                    <h5 className="font-semibold text-lg">{title}</h5>
                </div>
                <ul>
                    {info.map((l, index) => {
                        return <li key={index}>{l}</li>
                    })
                    }
                </ul >
            </div>
        </>
    )
}