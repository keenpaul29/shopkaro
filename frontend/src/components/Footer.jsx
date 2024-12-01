import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'


// const navigate = useNavigate()

const Footer = () => {

    

  return (
    <div className='flex flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='logo mb-5 w-32'alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1'>
                <Link to='/' class="not-active" >
                <li>Home</li>
                </Link>
                <Link to="/about" >
                <li>About Us</li>
                </Link>
                <Link to="/cart" >
                <li>Delivery</li> 
                </Link>
                
                
                
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@shopkaro.com</li>
            </ul>
        </div>

        <hr className='text-gray-700'/>
        <div className='flex flex-cols-1 justify-center align-middle w-full'>
            <div className=' flex items-center justify-center space-x-2 text-sm w-full'>

              <h3>Created With ❤️ Using</h3>
              <a href="https://reactjs.org" target="#blank">
                  <img className="text-[2.3rem] relative animate-[round_6s_linear_infinite]" src={assets.reactLogo} alt="React Logo" />
             </a>
          </div>
       </div>
    </div>
  )
}

export default Footer