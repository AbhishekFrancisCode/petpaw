import immg from "../../../public/images/img/picture.png";
import immg1 from "../../../public/images/img/picture2.png";
import immg2 from "../../../public/images/img/picture3.png";
import Eventemplet from "./include/event-templet";

const sectionJson = [
  {
    title: "Art Exhibition",
    address: "123 Art St, New York, NY 10001",
    date: "2024-21-09 18:00",
    time: "21 SEPT",
    image: "https://www.aleitevents.com/wp-content/uploads/2019/02/12_06_2021-58-scaled.jpg"
  },
  {
    title: "Music Festival",
    address: "456 Music Ave, Los Angeles, CA 90001",
    date: "2024-11-15 12:00",
    time: "15 NOV",
    image: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"
  },
  {
    title: "Tech Conference",
    address: "789 Tech Blvd, San Francisco, CA 94105",
    date: "2024-12-01 09:00",
    time: "01 DEC",
    image: "https://www.pcma.org/wp-content/uploads/2018/11/Trendspotter-Event-Tech-Trend-Banner-818x460.jpg"},
  {
    title: "Food Festival",
    address: "321 Food St, Chicago, IL 60601",
    date: "2024-12-10 10:00",
    time: "10 DEC",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54lsjq2aPo939jpN1Adxrdr1fYbShMSvBaw&s"
  }
];

export default function EventSection() {
  return (
    <div className="sb-container flex flex-col pt-24">
      <p className="text-2xl text-black font-medium py-3">Upcoming events</p>
      <div className="flex flex-col bg-white  border border-[#999999] rounded-2xl  divide-y-2">
        <p className="text-2xl text-black text-left px-6 py-4">Events</p>
        {sectionJson.map((item: any, i: number) => {
          return (
            <Eventemplet 
            key={i} 
            title={item.title} 
            image={item.image} 
            address={item.address} 
            date={item.date} 
            time={item.time} />
          );
        })}
      </div>
    </div>
  );
}
