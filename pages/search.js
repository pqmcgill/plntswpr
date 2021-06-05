import firebase from 'firebase/app';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import {
  FirestoreDocument,
  FirestoreProvider
} from '@react-firebase/firestore';
import { firebaseConfig } from './';

export default function Search() {
  async function handleLogout() {
    await firebase.auth().signOut();
  }

  return (
    // <FirestoreProvider {...firebaseConfig} firebase={firebase}>
    <FirebaseAuthConsumer>
      {({ user }) => {
        return (
          <div>foo</div>
          // <FirestoreDocument
          //   path={`/users`}
          //   where={{
          //     field: 'authUserId',
          //     operator: '==',
          //     value: user.uid
          //   }}
          // >
          //   {d => {
          //     <div>{JSON.stringify(d)}</div>;
          //   }}
          // </FirestoreDocument>
        );
      }}
    </FirebaseAuthConsumer>
    // </FirestoreProvider>
  );
}
