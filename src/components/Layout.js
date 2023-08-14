import NavbarComponent from './Navbar';
import CardComponent from './Cards';
import { useState } from 'react';
import ModalComponent from './Modal';

function LayoutComponent() {
    const [value, setValue]=useState(false)
    const [reset,setReset]=useState("")
   
  return (
    <div>
      <NavbarComponent />
      <ModalComponent modalButton={reset}
                      modalReset={setReset}
                      resetCards={setValue}
                       />
        <div className='py-4 flex justify-center'>
      <div className='grid grid-rows-2 grid-cols-3 gap-4'>

      <CardComponent disable={setValue}
                     enable={value}
                     reset={setReset}/>
      <CardComponent disable={setValue}
                     enable={value}
                     reset={setReset}/>
      <CardComponent disable={setValue}
                     enable={value}
                     reset={setReset}/>
      <CardComponent disable={setValue}
                     enable={value}
                     reset={setReset}/>
      <CardComponent disable={setValue}
                     enable={value}
                     reset={setReset}/>
      <CardComponent disable={setValue}
                     enable={value}
                     reset={setReset}/>
        </div>
      </div>
    </div>
  );
}

export default LayoutComponent;