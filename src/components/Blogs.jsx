
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Posts from './Posts'
const Blogs = ({handleBookMarks,handelRead}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
          fetch('data.json')
          .then(response=>response.json())
          .then(data=>setBlogs(data))
    },[])
   
  return (
    <div className='w-[60%]'>

      {
        blogs.map((post,index) => <Posts handleBookMarks={handleBookMarks} handelRead={handelRead}  key={index} post={post} ></Posts>
        )
      }

     
    </div>
  )
}

// Blogs.propTypes = {
//   handleBookMarks: PropTypes.func.isRequired

// }
export default Blogs
