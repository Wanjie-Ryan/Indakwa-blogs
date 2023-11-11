import React from 'react'
import './login.css'
import Logo from '../../Images/Logo.png'

function Login (){

    return(

        <>

            <section>


                <form>

                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>


                    <div>

                        <div>
                            <label>Email</label>
                            <input type='mail' required placeholder='enter your email'/>
                        </div>

                        <div>
                            <label>
                                Password
                            </label>

                            <input type='password' required placeholder='enter your password'/>
                        </div>


                        <div>
                            <button>Login</button>
                        </div>



                    </div>





                </form>


            </section>




        </>
    )
}

export default Login