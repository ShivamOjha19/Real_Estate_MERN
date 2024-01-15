/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch } from 'react-redux';
import { signInSucess } from '../redux/user/userSlice';

const OAuth = () => {
  const dispatch = useDispatch(); 

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider)

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        })
      })

      const data = await res.json();

      dispatch(signInSucess(data));
    } catch (error) {
      console.log("Could not sign in with google ", error)
    }
  }

  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-90'>
      Continue With Google
    </button>
  )
}

export default OAuth;
