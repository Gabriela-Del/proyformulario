import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

export const Formulario = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (event) =>{
    console.log(event);
  }

  return (
      <Fragment>
          <div className='colum'>
            <h1 className='text-center fw-bold mb-2'>Login here</h1>
            <form className='row d-flex justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-4'>
                  <input
                      className='form-control my-2'
                      type='text'
                      name='email'
                      placeholder='E-mail'
                      {...register ("email", {
                        required : {
                          value : true,
                          message : "Campo requerido"
                        },
                        pattern : {
                          value :  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message : "Formato incorrecto"
                        }
                      })
                      }
                  />
                  {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                  <input
                      className='form-control my-2'
                      type='text'
                      name='email'
                      placeholder='Password'
                      {...register ("password", {
                        required : {
                          value : true,
                          message : "Campo requerido"
                        },
                        minLength : {
                          value : 6,
                          message : "La contraseña debe tener al menos 6 caracteres"
                        }
                      })
                      }
                  />
                  {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                 </div>
                <div className='d-flex justify-content-center'>
                   <button className='btn btn-secondary my-2'>Log in</button>
                </div>
                <a className='text-center' href='#'>Lost your Password?</a>
                <a className='text-center' href='#'>Don´t have an account?</a>
            </form>
          </div>
      </Fragment>
    
  );
     
  
}
