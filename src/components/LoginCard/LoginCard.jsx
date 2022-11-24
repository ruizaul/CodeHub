export const LoginCard = ({ handleSubmit, correoRef, passwordRef }) => {
  return (
    <>
      <div className='h-screen bg-login-back2 bg-no-repeat bg-cover grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-gray-200 flex flex-col items-center justify-center gap-8 p-8 max-w-[600px] m-auto border rounded-[20px] sm:px-6 lg:px-8 z-10'>
          <div className='relative w-full max-w-lg -z-10'>
            <div className='absolute top-36 -left-26 w-32 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
            <div className='absolute top-52 left-36 w-28 h-40 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
            <div className='absolute top-28 left-28 w-32 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
          </div>
          <div className='max-w-lg mx-auto'>
            <h1 className='text-2xl font-bold text-center text-[#428383] sm:text-2xl'>
              Welcome to Necobot's hood 🐈‍
            </h1>

            <p className='max-w-md mx-auto mt-4 text-center text-gray-500'>
              Log in with your credentials.
            </p>

            <form
              action=''
              onSubmit={handleSubmit}
              className='bg-gray-200/80 p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4'
            >
              <p className='text-lg font-medium'>Sign in to your account</p>

              <div>
                <label htmlFor='email' className='text-sm font-medium'>
                  Email
                </label>

                <div className='relative mt-1'>
                  <input
                    type='email'
                    id='email'
                    autoFocus
                    required
                    className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                    placeholder='Enter email'
                    ref={correoRef}
                  />

                  <span className='absolute inset-y-0 inline-flex items-center right-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor='password' className='text-sm font-medium'>
                  Password
                </label>

                <div className='relative mt-1'>
                  <input
                    type='password'
                    id='password'
                    required
                    className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                    placeholder='Enter password'
                    ref={passwordRef}
                  />

                  <span className='absolute inset-y-0 inline-flex items-center right-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button
                type='submit'
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-[#428383] rounded-lg'
              >
                Sign in
              </button>

              <p className='text-sm text-center text-gray-500'>Forgot Password?</p>
            </form>
          </div>
        </div>
        <div className='bg-hidden lg:block lg:bg-login-back lg:bg-no-repeat lg:bg-cover lg:rounded-lg lg:opacity-90' />
      </div>
    </>
  );
};
