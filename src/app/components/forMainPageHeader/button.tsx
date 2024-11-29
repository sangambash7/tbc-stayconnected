import add from '../../../../public/add.png';
import Image from 'next/image';

export default function button() {
  return (
        <>
            <button 
                className="p-2 text-white rounded-full"
            >
            <Image 
                src={add}  
                alt="add"
                className="w-10 h-10 sm:w-16 sm:h-16"
            />
            </button>
        </>
    )
}
