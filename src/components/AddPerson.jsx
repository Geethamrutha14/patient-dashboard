import React , {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
export default function AddPerson() {
    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        name : "", 
        age : "",
        email : "",
        gender : "Prefer Not To Say",
        address : "",
        disease : "",
    });

    const handleChange = (e)=>{
        setFormData(prev => ({
            ...prev,
            [e.target.id] : e.target.value,
        
        }));
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("added patient :",formData);
        const stored = localStorage.getItem("patients");
        const patients = stored ? JSON.parse(stored) : [];

        const newPatient = {
            id : patients.length+1 , 
            ...formData,
        };

        const updated = [...patients , newPatient];
        localStorage.setItem("patients" , JSON.stringify(updated));

        alert(`Patient ${formData.name} added successfully!`);

        setFormData({
            name : "",
            age : "",
            email : "",
            contact : "",
            gender : "Prefer Not To Say",
            address : "",
            disease : "",
        });
        navigate("/patients");
    };

  return (
    <div className='flex justify-center items-center p-6 min-h-screen bg-slate-50'>
        <form onSubmit={handleSubmit} 
        className='flex flex-col gap-4 bg-white w-full max-w-md p-6 shadow-lg rounded-lg'>

            {/* name , age , address , disease , email , gender */}
            <h1 className='text-center text-2xl mb-4 text-slate-700'>Patient Details</h1>
            <div>
                <label htmlFor="name" className='block text-sm font-medium text-slate-600'>Full Name : </label>
                <input type="text" id='name' 
                className='w-full p-2 outline-slate-200 rounded-lg bg-slate-100'
                placeholder='Enter Full Name'
                value={formData.name}
                onChange={handleChange}
                required/>
            </div>

            <div>
                <label htmlFor="age"
                className='block text-sm font-medium text-slate-600'>Age : </label>
                <input type="number" id='age' min={1} max={100} 
                className='w-full bg-slate-100 outline-slate-200 p-2 rounded-lg'
                value={formData.age}
                onChange={handleChange}
                required/>
            </div>

           <div>
                <label htmlFor="email" className='block text-sm font-medium'>Email : </label>
                <input type="email" id='email' 
                className='w-full bg-slate-100 outline-slate-200 p-2 rounded-lg' 
                placeholder='johndoe@example.com'
                value={formData.email}
                onChange={handleChange}
                required/>
           </div>
           <div>
                <label htmlFor="contact" className='block text-sm font-medium'>Contact : </label>
                <input type="tel" id='contact' 
                className='w-full bg-slate-100 outline-slate-200 p-2 rounded-lg'
                value={formData.contact}
                onChange={handleChange}
                pattern='[0-9]{10}'
                required/>
                
           </div>
            <div>
                <label htmlFor="gender"
                className='block text-sm font-medium'>Gender : </label>
                <select name="gender" id="gender" 
                className='w-full bg-slate-100 p-2 rounded-lg outline-slate-200'
                value={formData.gender}
                onChange={handleChange}
                required>
                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Both">Both</option>
                </select>
            </div>

            <div>
                <label htmlFor="address"
                className='block font-medium text-sm'>Address : </label>
                <textarea name="address" placeholder='Add address...' id="address" rows={2}
                className='bg-slate-100 w-full rounded-lg outline-slate-100 p-2'
                value={formData.address}
                onChange={handleChange}
                required></textarea>
            </div>

           <div>
                <label htmlFor="disease"
                className='block font-medium text-sm'>Disease : </label>
                <textarea name="disease" id="disease" placeholder='Add disease...'
                className='bg-slate-100 w-full rounded-lg outline-slate-100 p-2'
                value={formData.disease}
                onChange={handleChange}
                required></textarea>
           </div>

           <button
           type='submit'
           className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
            Add Patient 
           </button>
        </form>
      
    </div>
  )
}
