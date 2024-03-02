import Image from "./assets/front.jpg";
import Icon from "./assets/google-icon.webp";

function App() {

  return (
  <div>
<section className=" flex bg-gradient-to-r from-[#005ae6] to-cyan-600 min-h-screen justify-center items-center">
    <div className="flex bg-blue-400 shadow-lg max-w-5xl p-5 rounded-xl">
      <div className="sm:w-1/2 px-8 text-gray-100">
    <h2 className="font-bold text-2xl ">Login</h2>
    <p className="text-sm mt-4">If you are already a memebr please log in</p>
    <form className="flex flex-col gap-4  " action="">
      <input className="p-2 mt-8 rounded-sm"
             type="email"
             name="email"
             placeholder="Email" />

       <input className="p-2 rounded-sm"
              type="password"
              name="passowrd"
              placeholder="Passowrd" />
              <button className="bg-[#005ae6] rounded-xl py-2 text-white">Log In</button> 
    </form>

    <div className="mt-10 grid grid-cols-3 items-center text-gray-200">
      <hr className="border-gray-200"/>
      <p className="text-center">OR</p>
      <hr className="border-gray-200"/>
    </div>

    <button className="bg-white border py-2 w-full rounded-xl mt-5 text-black flex justify-center items-center text-sm">
    <img className="w-5 h-5 mr-3 "src={Icon} alt="" />
      Login With Google
    </button>
  <div>
  <p className="mt-4 text-xs border-b py-4 "> <a>Forgot Password?</a></p>
  </div>

  <div className=" mt-3 text-sm flex justify-between items-center">
    <p>Don't have an account?</p>
    <button className="py-2 px-5 bg-white rounded-xl text-black">Register</button></div>
    
      </div>

      <div className="sm:block hidden w-1/2  ">
      <img className=" rounded-2xl" src={Image} alt="image" />
      </div>

    </div>
</section>

  </div>
  )
}

export default App
