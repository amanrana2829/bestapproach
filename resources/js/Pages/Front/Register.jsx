// import { Link, Head, router } from '@inertiajs/react';
// import InputLabel from '@/Components/InputLabel';
// import TextInput from '@/Components/TextInput';
// import InputError from '@/Components/InputError';
// import FrontendLayout from '@/Layouts/FrontendLayout/';
// import home_page from '../../../assets/frontend/landing/css/home_page.module.css?240620240959';
// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import SelectInput from '@/Components/SelectInput';

// export default function Register({ auth, country }) {
//     const [processing, setProcessing] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [success, setSuccess] = useState();
//     const [failed, setFailed] = useState();

//     const [data, setDatas] = useState({
//         student_name: '',
//         parent_name: '',
//         course: '',
//         Class: '',
//         student_email: '',
//         student_mobile: '',
//         password: '',
//         confirm_password: '',
//     });

//     function changeInput(e) {
//         const key = e.target.name;
//         const val = e.target.value;

//         setDatas((data) => ({
//             ...data,
//             [key]: val,
//         }));
//     }
// const validate = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const mobileRegex = /^[0-9]{10}$/; // 10 digits only
//     const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces

//     if (!data.student_name) {
//         errors.student_name = 'Student Name is required';
//     } else if (!nameRegex.test(data.student_name)) {
//         errors.student_name = 'Student Name must contain only letters and spaces';
//     }

//     if (!data.parent_name) {
//         errors.parent_name = 'Parent Name is required';
//     } else if (!nameRegex.test(data.parent_name)) {
//         errors.parent_name = 'Parent Name must contain only letters and spaces';
//     }

//     if (!data.course) {
//         errors.course = 'Course is required';
//     }

//     if (!data.Class) {
//         errors.Class = 'Class is required';
//     }

//     if (!data.student_email) {
//         errors.student_email = 'Student Email is required';
//     } else if (!emailRegex.test(data.student_email)) {
//         errors.student_email = 'Invalid Student Email';
//     }

//     if (!data.student_mobile) {
//         errors.student_mobile = 'Student Mobile is required';
//     } else if (!mobileRegex.test(data.student_mobile)) {
//         errors.student_mobile = 'Invalid Student Mobile';
//     }

//     if (!data.password) {
//         errors.password = 'Password is required';
//     } else if (data.password.length < 6) {
//         errors.password = 'Password must be at least 6 characters';
//     }

//     if (!data.confirm_password) {
//         errors.confirm_password = 'Confirm Password is required';
//     } else if (data.password !== data.confirm_password) {
//         errors.confirm_password = 'Passwords do not match';
//     }

//     return errors;
// };

//     const submit = (e) => {
//         e.preventDefault();

//         const validationErrors = validate();

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             setErrors({});

//             router.post(
//                 route('post-register'),
//                 data,
//                 {
//                     preserveState: true,
//                     preserveScroll: true,
//                     forceFormData: true,

//                     onStart: () => setProcessing(true),

//                     onSuccess: (res) => {
//                         setProcessing(false);
//                         if (res.props.success) {
//                             toast.success(res.props.success);
//                             setSuccess(res.props.success);
//                             setTimeout(() => location.reload(false), 3000);
//                         } else if (res.props.failed) {
//                             toast.error(res.props.failed);
//                             setFailed(res.props.failed);
//                         }
//                     },

//                     onError: (errors) => {
//                         toast.error('Please enter registration details.');
//                         setErrors(errors);
//                         setProcessing(false);
//                     },
//                 }
//             );
//         }
//     };

//     return (
//         <FrontendLayout>
//             <Head title="Registration" />
//             <ToastContainer />
//             <div className="checkout-page">
//                 <div className="auto-container">
//                     <div className="row">
//                         <div className="container-fluid">
//                             <main role="main" className="pb-3">
//                                 <div className={`${home_page.login_page} row`}>
//                                     <div className="col-md-1 col-md-offset-3"></div>
//                                     <div className="col-md-10">
//                                         <div className="col-md-12 col-sm-12">
//                                             <form
//                                                 encType="multipart/form-data"
//                                                 className={home_page.loginformcss}
//                                                 onSubmit={submit}
//                                             >
//                                                 {/* Student Details */}
//                                                 <div className={`container-fluid mt-5 ${home_page.container_fluid_blockcss}`}>
//                                                     <div className="text-center p-2">
//                                                         <h3 className={home_page.hr}>Student Details</h3>
//                                                     </div>

//                                                     <div className="row">
//                                                         <div className="form-group col-md-4">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Student Name"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <TextInput
//                                                                     id="student_name"
//                                                                     type="text"
//                                                                     name="student_name"
//                                                                     value={data.student_name}
//                                                                     className="form-control p-2"
//                                                                     autoComplete="off"
//                                                                     placeholder="Enter Student Name"
//                                                                     onChange={changeInput}
//                                                                 />
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_student_name"
//                                                                 message={errors.student_name}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>

//                                                         <div className="form-group col-md-4">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Parent Name"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <TextInput
//                                                                     id="parent_name"
//                                                                     type="text"
//                                                                     name="parent_name"
//                                                                     value={data.parent_name}
//                                                                     className="form-control p-2"
//                                                                     autoComplete="off"
//                                                                     placeholder="Enter Parent Name"
//                                                                     onChange={changeInput}
//                                                                 />
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_parent_name"
//                                                                 message={errors.parent_name}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>

//                                                         <div className="form-group col-md-4">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Course"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <TextInput
//                                                                     id="course"
//                                                                     type="text"
//                                                                     name="course"
//                                                                     value={data.course}
//                                                                     className="form-control p-2"
//                                                                     autoComplete="off"
//                                                                     placeholder="Enter Course"
//                                                                     onChange={changeInput}
//                                                                 />
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_course"
//                                                                 message={errors.course}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>
//                                                     </div>

//                                                     <div className="row">
//                                                         <div className="form-group col-md-4">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Class"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <SelectInput
//                                                                     id="Class"
//                                                                     name="Class"
//                                                                     value={data.Class}
//                                                                     onChange={changeInput}
//                                                                     placeholder="Select Class"
//                                                                 >
//                                                                     <option value="">Select</option>
//                                                                     <option value="1">Class 5</option>
//                                                                     <option value="2">Class 6</option>
//                                                                     <option value="3">Class 7</option>
//                                                                     <option value="4">Class 8</option>
//                                                                     <option value="5">Class 9</option>
//                                                                     <option value="6">Class 10</option>
//                                                                     <option value="7">Class 11</option>
//                                                                 </SelectInput>
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_Class"
//                                                                 message={errors.Class}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>

//                                                         <div className="form-group col-md-4">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Student Email"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <TextInput
//                                                                     id="student_email"
//                                                                     type="email"
//                                                                     name="student_email"
//                                                                     value={data.student_email}
//                                                                     className="form-control p-2"
//                                                                     autoComplete="off"
//                                                                     placeholder="Enter Student Email"
//                                                                     onChange={changeInput}
//                                                                 />
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_student_email"
//                                                                 message={errors.student_email}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>

//                                                         <div className="form-group col-md-4">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Student Mobile"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <TextInput
//                                                                     id="student_mobile"
//                                                                     type="text"
//                                                                     name="student_mobile"
//                                                                     value={data.student_mobile}
//                                                                     className="form-control p-2"
//                                                                     autoComplete="off"
//                                                                     placeholder="Enter Student Mobile"
//                                                                     onChange={changeInput}
//                                                                 />
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_student_mobile"
//                                                                 message={errors.student_mobile}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>
//                                                     </div>

//                                                     <div className="row">
//                                                         <div className="form-group col-md-6">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Password"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <TextInput
//                                                                     id="password"
//                                                                     type="password"
//                                                                     name="password"
//                                                                     value={data.password}
//                                                                     className="form-control p-2"
//                                                                     autoComplete="new-password"
//                                                                     placeholder="Enter Password"
//                                                                     onChange={changeInput}
//                                                                 />
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_password"
//                                                                 message={errors.password}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>

//                                                         <div className="form-group col-md-6">
//                                                             <InputLabel
//                                                                 className="control-label"
//                                                                 value="Confirm Password"
//                                                                 style={{ fontSize: '14px', padding: '10px 10px 10px 0px' }}
//                                                             />
//                                                             <div className="input-group">
//                                                                 <TextInput
//                                                                     id="confirm_password"
//                                                                     type="password"
//                                                                     name="confirm_password"
//                                                                     value={data.confirm_password}
//                                                                     className="form-control p-2"
//                                                                     autoComplete="new-password"
//                                                                     placeholder="Confirm Password"
//                                                                     onChange={changeInput}
//                                                                 />
//                                                             </div>
//                                                             <InputError
//                                                                 id="error_confirm_password"
//                                                                 message={errors.confirm_password}
//                                                                 className={home_page.login_error}
//                                                             />
//                                                         </div>
//                                                     </div>

//                                                     <div className="row mt-3">
//                                                         <div className="form-group col-md-6 text-center">
//                                                             <button
//                                                                 type="submit"
//                                                                 disabled={processing}
//                                                                 className="btn btn-primary btn-block"
//                                                             >
//                                                                 {processing ? 'Registering...' : 'Register'}
//                                                             </button>
//                                                             <Link href={route('login')} className="btn btn-link">
//                                                                 Login
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-1 col-md-offset-3"></div>
//                                 </div>
//                             </main>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </FrontendLayout>
//     );
// }
