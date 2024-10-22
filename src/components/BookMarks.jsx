

const BookMarks = ({bookmarkAdd,time}) => {
  return (
    <div className='w-[30%] mt-10 '>
      <h1 className="shadow-md border rounded-lg p-5 text-center font-bold text-2xl border-blue-500 text-blue-500 bg-blue-100">Spent time on read: {time} min</h1>

      <div className=" min-h-[500px] bg-[#11111110] py-2 mt-5 rounded-lg">
        <h1 className="text-center font-extrabold text-3xl">BookMarks:{bookmarkAdd.length}</h1>
        {
            bookmarkAdd.map((eachTittle,index)=><h1 className="shadow-md  rounded-lg p-5 text-center font-bold text-2xl   bg-white  m-4" key={index}>{eachTittle}</h1>)
        }
      </div>
    </div>
  )
}

export default BookMarks
