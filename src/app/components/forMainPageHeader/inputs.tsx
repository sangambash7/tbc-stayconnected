import search from '../../../../public/search.png';
import Image from 'next/image';

export default function inputs() {
  return (
    <div className="flex items-center space-x-6 mx-auto sm:mx-0">
        <input 
        type="text" 
        placeholder="Enter search text"
        className="p-2 border border-[#777E99] rounded-md"
        />
        <select 
        className="p-2 border border-[#777E99] rounded-md text-[#777E99]"
        >
        <option>Choose tag</option>
        <option>Tag 1</option>
        <option>Tag 2</option>
        </select>
        <button 
        className="p-2 text-white rounded-md"
        >
        <Image 
            src={search}  
            alt="search"
            className="w-10 h-10"
        />
        </button>
    </div>

  )
}
