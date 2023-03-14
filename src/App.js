import React, {useState} from "react"
import './App.css';

function App() {
  const [form, setForm] = useState({firstName:"", lastName:"", email:""})
  const [formErr, setFormErr] = useState({firstName:{name:false, disabled:false},
     lastName:{name:false, disabled:false}, 
     email:{name:false, disabled:false}})
    const [succesMessage, setSuccesMessage] = useState(false)
  const handleForm = (e)=>{
    switch(e.target.id){
      case "firstName":
        if(form.firstName===""){

          return setFormErr({firstName:{name:true, disabled:false},
             lastName:{name:false, disabled:true},
              email:{name:false, disabled:true}})
        }
        else{
          return setFormErr({firstName:{name:false, disabled:false},
             lastName:{name:false, disabled:false},
             email:{name:false, disabled:false}})
        }
      case "lastName" :
        if(form.lastName===""){
          return setFormErr({firstName:{name:false, disabled:false},
            lastName:{name:true, disabled:false},
             email:{name:false, disabled:true}})
        }
        else{
          return setFormErr({firstName:{name:false, disabled:false},
            lastName:{name:false, disabled:false},
             email:{name:false, disabled:false}})
        }
      case 'email':
        if(form.email===""){
          return setFormErr({...formErr,
             email:{name:true, disabled:false}})
        }
        else{
          return setFormErr({...formErr,
            email:{name:false, disabled:false}})
        }
      default: return form
    }
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      if(!(form.firstName&& form.lastName&& form.email)){
        setFormErr({firstName:{name:true, disabled:false},
          lastName:{name:true, disabled:false}, 
          email:{name:true, disabled:false}})
      }
      else{
        setFormErr({firstName:{name:false, disabled:false},
          lastName:{name:false, disabled:false}, 
          email:{name:false, disabled:false}})
          setSuccesMessage(true)
          setForm({firstName:"", lastName:"", email:""})

          setTimeout(()=>{
            setSuccesMessage(false)
          },2000)
      }
  }
  return (
    <div className="App">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          {succesMessage?<p id="succes">Success! Thanks for registering</p>:""}
          <input id="firstName" placeholder="First Name" value={form.firstName} onBlur={handleForm} onChange={(e)=>setForm({...form, firstName:e.target.value})} disabled={formErr.firstName.disabled}/>
          {formErr.firstName.name?<p>Please Enter a First name</p>:""}
          <input id="lastName" placeholder="Last Name" value={form.lastName} onBlur={handleForm} onChange={(e)=>setForm({...form, lastName:e.target.value})} disabled={formErr.lastName.disabled}/>
          {formErr.lastName.name?<p>Please Enter a Last name</p>:""}
          <input id="email" placeholder="Email" value={form.email} onBlur={handleForm} onChange={(e)=>setForm({...form, email:e.target.value})} disabled={formErr.email.disabled}/>
          {formErr.email.name?<p>Please Enter a email</p>:""}
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
