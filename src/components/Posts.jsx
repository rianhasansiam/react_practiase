
import PropTypes from 'prop-types';
import profile1 from '../image/boy1.png'




const Posts = ({post,handleBookMarks,handelRead}) => {

    const {title,cover_image,posted_date,author,reading_time,hashtags,id}=post  
   

  return (
    <div className=' shadow-md p-3 rounded-sm w-[80%] m-auto my-10'>


      <img src={cover_image} alt="" />


      <div className='flex justify-between py-5 items-center'>
        <div className='flex gap-3 w-[50%] items-center'>
            <img className='w-[60px]' src={profile1} alt="" />
            <div>
                <h1 className='font-bold text-xl mb-1'>{author}</h1>
                <p>{posted_date}</p>
            </div>
        </div>
        <h1>{reading_time} min read  <button onClick={()=>handleBookMarks(title)}><i className="fa-regular fa-bookmark"></i></button></h1>
      </div>
      

       <div>
        <h1 className='font-extrabold text-4xl'>{title}</h1>
        <span className='block text-gray-500 py-4'>{hashtags}</span>
       <button onClick={()=>handelRead({reading_time},title)}  className='font-semibold underline text-blue-500 py-3 block'>Mark as read</button>
        
       </div>



    </div>
  )
}


// Posts.propTypes ={
//     post: PropTypes.object.isRequired,
//     handleBookMarks: PropTypes.func.isRequired

// }
export default Posts
