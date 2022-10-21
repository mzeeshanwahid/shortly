import * as React from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const Shortner = () => {
  const [url, setURL] = React.useState<string>('');
  const [shorten, setShorten] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setShorten('');

    try {
      const result = await axios.post('http://localhost:3100/api/link', { link: url });
      if (result.status === 201) {
        setShorten(`http://localhost:3000/${result.data.data.shorten}`);
        setLoading(false);
      } else {
        throw Error();
      }
    } catch (err) {
      toast.error('Something is not well');
    }
    setLoading(false);
  }

  const onCopyUrl = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(shorten);
    toast.success('Link copied to clipboard');
  }

  return <div className='w-full bg-blue-900 p-6'>
    <form className='flex flex-col lg:flex-row gap-4' onSubmit={onSubmit}>
      <input className='px-[20px] h-[60px] rounded text-[16px] w-full lg:w-3/4' type="url" placeholder='Shorten your link' required onChange={e => setURL(e.target.value)} />
      <button className={`h-[60px] p-5 text-white bg-blue-600 rounded w-full lg:w-1/4 flex items-center justify-center ${loading ? 'opacity-50' : 'opacity-100'}`} disabled={loading}>{loading && <img src="/assets/loader.svg" className='mr-2' width={20} alt="loader" />}Shorten</button>
    </form>

    {!loading && shorten && <div className='mt-5 flex flex-col lg:flex-row p-[15px] min-h-[70px] bg-white rounded items-center justify-between gap-4 lg:gap-0'>
      <p className='text-[18px] w-full lg:w-4/6 text-gray-600'>{url}</p>
      <div className='w-full lg:w-2/6 flex flex-col lg:flex-row items-start gap-4 lg:gap-0 lg:items-center justify-between'>
        <p className='text-[18px] text-blue-400'>{shorten}</p>
        <button className='h-[40px] px-5 text-white bg-blue-400 rounded w-full lg:w-[100px]' onClick={onCopyUrl}>Copy</button>
      </div>
    </div>}
  </div>;
}

export default Shortner;