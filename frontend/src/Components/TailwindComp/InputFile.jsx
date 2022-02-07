export const InputFile = () => {
  return (
    <label class='block'>
      <span class='sr-only'>Choose profile photo</span>
      <input
        type='file'
        className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-orange-50 file:text-orange-500
      hover:file:bg-violet-100
    '
      />
    </label>
  );
};
