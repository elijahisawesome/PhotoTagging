import './App.css';
import db from './firebase.js';

import {getAuth, GoogleAuthProvider, signInWithPopup,} from 'firebase/auth';
import {collection, getData, addDoc, getDocs, deleteDoc, onSnapshot} from 'firebase/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useEffect , useState} from 'react';

const auth = getAuth();


function App() {
  const [user] = useAuthState(auth);

  return (
      <div>
        {user? <ChatRoom/> : <SignIn/>}
      </div>
  )
}

function ChatRoom(){

  const [users, setUsers] = useState([])

  useEffect(()=>{
    const unSub = onSnapshot(collection(db, 'users'), (snapshot)=>{
      setUsers(snapshot.docs.map(doc=>doc._document.data.value.mapValue.fields));
    });
    return unSub;
  }, []);

  const signOutOfGoogle = function(){
    auth.signOut();
  }
  return(
    <div>
      <button onClick = {()=>{signOutOfGoogle()}}>Sign out</button>
      {users.map(val=>
          val.born.integerValue + '\n' +val.first.stringValue + '\n' + val.last.stringValue + "\n")}
      Yr signed in.
    </div>
  )
}

function SignIn(){


  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
  return(
    <div>
      You need to sign in.
      <button onClick = {signInWithGoogle}>Sign in</button>
    </div>
  )
}

function firebaseWrappedApp(){
  return(
      <App/>
  )
}
export default firebaseWrappedApp;

