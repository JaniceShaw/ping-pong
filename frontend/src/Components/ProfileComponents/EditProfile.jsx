export const EditProfile = () => {
  return (
    <>
      <form className='flex flex-col items-center bg-slate-300 shadow-sm'>
        <input
          className='w-1/2 border-2 border-black'
          placeholder='Member'
          type='text'
        />
        <input
          placeholder='Name'
          type='text'
          className='w-1/2 border-2 border-black'
        />

        <input
          className='w-1/2 border-2 border-black'
          placeholder='username'
          type='text'
        />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='birthday'
          type='text'
        />
        <input className='w-1/2 border-2 border-black' type='submit' />
      </form>
    </>
  );
};
