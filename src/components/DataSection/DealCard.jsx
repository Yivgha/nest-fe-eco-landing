import PropTypes from "prop-types";
import splitStringWithSpace from "../../utils/splitString";
import { Link } from "react-router-dom";

const textStyle = "font-lato font-bold text-[18px] leading-[22px]"

export default function DealCard({ item }) {

  return (
      <Link to={`/deal/${item.id}`}   state={ { dealData: item }}
     className="relative w-[300] max:w-[630px] h-[400px] bg-gray-100 rounded-[5px] flex flex-col items-center justify-evenly py-5 px-5 flex-grow-0 flex-1 flex-shrink-0">
      <img
        src={`http://localhost:3000/${item.deal_img_path}`}
        alt={item.name}
        className="absolute w-full h-full object-cover rounded-[5px] z-[1]"
          />
          <div className="absolute  w-full z-[3] px-2 md:px-5 pt-1 lg:pt-[10] pb-2 md:pb-5 bottom-0 text-white flex flex-col justify-start  gap-2">
              <h3 className="text-[20px] font-merriweather font-bold leading-[34px]">{item.name}</h3>
              <div className="grid grid-cols-3 gap-2.5">
                  <p className={textStyle}>{splitStringWithSpace(item.total_dhs)} Dhs</p>
                  <p className={textStyle}>Yield {item.yield_amount}%</p>
                   <p className={textStyle}>Sold {item.sold}%</p>
                  <p className={textStyle}>Tiket - {splitStringWithSpace(item.ticket_dhs)} Dhs</p>
                  <p className={textStyle}>Days left { item.days_left}</p>
              </div>
          </div>
    </Link>
  );
}

DealCard.propTypes = {
    item: PropTypes.object, 
};
