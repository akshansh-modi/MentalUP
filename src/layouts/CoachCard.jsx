


const CoachCard = (data) => {
  return (
  
        <div
          className="flex card flex-col h-[320px]  md:h-[280px] text-black cursor-pointer shadow-lg hover:shadow-[2px_1px_15px_3px_rgba(0,0,0,0.1)] hover:scale-105 transition ease-out duration-700"
        
        >
          <div>
            <img
              src={data.img}
              alt="img"
              className="mx-auto h-14 w-14 object-cover rounded-full "
              loading="lazy"

            />
          </div>

          <div className="my-auto flex flex-col justify-center items-center">
            <h1 className=" font-semibold  textg-md  pt-4 ">{data.name}</h1>
            <h3 className=" pt-2">{data.remark}</h3>
            <p className="p-2 text-center text-xs ">{data.about}</p>
          </div>
        </div>
      
  )
}

export default CoachCard