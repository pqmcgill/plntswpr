import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
// import 'firebase/firestore';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from '@react-firebase/auth';
import { FirestoreProvider } from '@react-firebase/firestore';
import Search from './search';
import styled from 'styled-components';

export const firebaseConfig = {
  apiKey: 'AIzaSyBVaZwuXw6hrKt2vC8YAARJo3WFKellyjU',
  authDomain: 'plntswpr.firebaseapp.com',
  projectId: 'plntswpr',
  storageBucket: 'plntswpr.appspot.com',
  messagingSenderId: '204384000116',
  appId: '1:204384000116:web:cac9b317d7dde098645921',
  measurementId: 'G-JDQRVLBRQN'
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: end;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  margin-bottom: 1em;
`;

const LoginButton = styled.button`
  outline: none;
  background-color: #42f5bf;
  border: none;
  padding: 2rem 4rem;
  border-radius: 1.25rem;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  &:hover {
    background-color: #37cc9f;
  }
`;

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLogin() {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          if (isSignedIn) {
            return <Search />;
          } else {
            return (
              <Wrapper>
                <LoginForm>
                  <label htmlFor="email">Email:</label>
                  <Input
                    name="email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label htmlFor="password">Password:</label>
                  <Input
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <LoginButton onClick={handleLogin}>Login</LoginButton>
                </LoginForm>
              </Wrapper>
            );
          }
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}

//39.8669413,-86.1520548
