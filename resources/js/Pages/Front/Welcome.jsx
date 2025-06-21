// import { Link, Head, useForm } from '@inertiajs/react';
// import InputLabel from '@/Components/InputLabel';
// import TextInput from '@/Components/TextInput';
// import Captcha from '@/Components/Captcha';
// import InputError from '@/Components/InputError';

// import FrontendLayout from '@/Layouts/FrontendLayout/'

// export default function Welcome({ auth, laravelVersion, phpVersion, status, captcha }) {
   
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         captcha_code: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();
//         post(route('login'));

//     }

//     return (
//         <FrontendLayout>
//             <Head title="Login" />

//             <div className="checkout-page">
//                 <div className="auto-container">
//                     <div className="checkout-form">
//                         <div className="container">
//                             <main role="main" className="pb-3">

//                                 <div className='login-page'>
//                                     <div className="col-md-6  col-md-offset-3 login-page-window1">
//                                         <div className="col-md-12 col-sm-12 col-sm-offset-0 col-lg-8 col-md-offset-2 login-page-window2">

//                                         <form onSubmit={submit} >

//                                                 <div className="container1 login-page-background">

//                                                     <div id="UpdatePanel1">
//                                                         <div className="login-heading-title">
//                                                             <h1 className='hr'>Login</h1>
//                                                         </div>
//                                                         <h4 className="text-center">
//                                                             <span id="lblMessage" className="text-danger">
//                                                                 <div id="errorMessage" style={{ "color": "red" }}></div>
//                                                             </span>
//                                                         </h4>
                                                        
//                                                         <div className="form-group ">
//                                                             <InputLabel htmlFor="uname" className="control-label" value="Username" style={{ "fontSize": "12px" }} />

//                                                             <div className="input-group">
//                                                                 <div className="input-group-addon">
//                                                                     <span className="glyphicon glyphicon-user"></span>
//                                                                 </div>
//                                                                 <TextInput
//                                                                     id="txt_User"
//                                                                     type="email"
//                                                                     name="email"
//                                                                     value={data.email}
//                                                                     className="logincss form-control login-input-fields"
//                                                                     autoComplete="off"
//                                                                     isFocused={true}
//                                                                     placeholder="Enter User Name"
//                                                                     onChange={(e) => setData('email', e.target.value)}
//                                                                 />
//                                                             </div>
//                                                             <InputError id="error_email" message={errors.email} className="mt-2 login_error" />
//                                                         </div>
//                                                         <div className="form-group ">
//                                                             <InputLabel htmlFor="psw" className="control-label" value="Password" style={{ "fontSize": "12px" }} />
//                                                             <div className="input-group">
//                                                                 <div className="input-group-addon">
//                                                                     <span className="glyphicon glyphicon-lock"></span>
//                                                                 </div>

//                                                                 <TextInput
//                                                                     id="txt_Password"
//                                                                     type="password"
//                                                                     name="password"
//                                                                     value={data.password}
//                                                                     className="logincss form-control login-input-fields"
//                                                                     autoComplete="off"
//                                                                     isFocused={true}
//                                                                     placeholder="************"
//                                                                     onChange={(e) => setData('password', e.target.value)}
//                                                                 />
//                                                             </div>
//                                                             <InputError id="error_password" message={errors.password} className="mt-2 login_error" />
//                                                         </div>
//                                                     </div>
//                                                     <br />
//                                                     <Captcha
//                                                         id="captcha"
//                                                         value={data.captcha_code}
//                                                         captcha={captcha}
//                                                         onChange={(e) => setData('captcha_code', e.target.value)}
//                                                     />
//                                                     <InputError id="error_captchacode" message={errors.captcha_code} className="mt-2 login_error" />
                                                    
//                                                     {processing ? (
//                                                         <button type="submit" id="submitBtn" className="login-button" disabled >
//                                                         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                                                             Checking...
//                                                         </button>
//                                                     ):(
//                                                         <button type="submit" id="submitBtn" className="login-button" >Submit</button>
//                                                     )}
                                                    
//                                                     <div className='clearfix'></div>
//                                                     <div className="container1" style={{ "fontSize": "14px", "color": "red", "display": "none !important" }}> Mine Owner should use the credentials generated by form M for the first time login and other user should use the credential generated by the system. </div>
//                                                 </div>
//                                                 </form >

//                                         </div>
//                                     </div>
//                                     <div className='clearfix'></div>
//                                 </div>

//                             </main>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </FrontendLayout>
//     );
// }


