import Button from "../Button/Button";

export default function Card({ title, price, description, text, csstype }) {
    console.log(csstype)
    return (
        <div className="border-1 rounded-lg pb-6 w-full  text-center overflow-hidden">
            <div className=" border-b border-gray-500 h-20 w-full flex items-center justify-center bg-gray-100">
                <h3 className="font-extralight text-2xl">{title}</h3>
            </div>

            <div className="flex items-end justify-center space-x-1 mt-4">
                <h4 className="text-4xl font-normal">${price}</h4>
                <small className="text-gray-500 text-lg">/ mo</small>
            </div>

            <ul className="text-gray-600 mt-4 space-y-1">
                {description.map((l, index) => (
                    <li key={index}>{l}</li>
                ))}
            </ul>
            <Button text={text} cssType={csstype} />
        </div>
    );
}
