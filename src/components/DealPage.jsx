import { useLocation, useNavigate } from "react-router-dom";
import OutlinedBtn from "./OutlinedBtn";

const aboutTextStyle = "font-lato text-gray-700 text-xl"

export default function DealPage( ) {
    const params = useLocation().state.dealData;
    const { days_left, deal_img_path, name, sold, ticket_dhs, total_dhs, yield_amount } = params;
    
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

 
    return (
        <div className="flex flex-col justify-start w-full h-[100%] bg-gray-100 px-5 py-4 gap-5">
        <OutlinedBtn text="Go back" onClick={goBack}/> 
            <div className="flex flex-col gap-4 items-start">
                <h1 className="font-lato font-bold text-5xl self-center">{name}</h1>
                <img  src={`http://localhost:3000/${deal_img_path}`}
                    alt={name} className="w-[60%] h-auto self-center" />
                <h2 className="font-lato text-gray-400 text-3xl">About</h2>
                <p className={aboutTextStyle}>Dhs amount: {total_dhs} </p>
                <p className={aboutTextStyle}>Tiket Dhs: {ticket_dhs} </p>
                <p className={aboutTextStyle}>Yield amount: {yield_amount}% </p>
                <p className={aboutTextStyle}>Sold: {sold}%</p>
                <p className={aboutTextStyle }>Days left: {days_left} </p>
            </div>
       </div>
   )
}