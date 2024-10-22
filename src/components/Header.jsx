import profile from '../image/profile.png'

const Header = () => {
  return (
    <section className='container m-auto'>
        <div className=' justify-between flex py-6 items-center'>
            <h1 className='font-extrabold text-5xl'>Rian Hasan Siam</h1>
            <img src={profile} alt="" />
        </div>
        <hr className='' />
    </section>
  )
}

export default Header
