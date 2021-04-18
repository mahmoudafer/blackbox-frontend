import React, { useEffect, useRef, useState } from 'react'
import Peer from 'peerjs'

import styles from './App.module.css'
import { Home, Name, Meeting } from './screens'

const App = () => {
  const [meetingID, setMeetingId] = useState()
  const [name, setName] = useState(localStorage.getItem('name'))
  const [myPeer, setMyPeer] = useState()

  const id = window.location?.pathname?.match(/(?<=\/meet\/)()\d+$/gm)
  if (id?.length && id[0] != meetingID)
    setMeetingId(id)

  const myPeerRef = useRef(new Peer({
    host: 'backend-fjkv.onrender.com',
    path: 'peer',
    port: '443'
  }))
  myPeerRef.current.on('open', con => {
    setMyPeer(myPeerRef.current)
  })

  // myPeer.current?.on('open', id => {
  //   setPeerID(id)
  //   console.log('peer opened')
  // })

  return (
    <div style={styles.container}>
      {meetingID ?
        // <Meeting myPeer={myPeer.current} meetingID={meetingID} peerID={peerID} />
        <Meeting myPeer={myPeer} meetingID={meetingID} setMeetingId={setMeetingId} />
        : name ?
          <Home name={name} myPeer={myPeer} setMeetingId={setMeetingId} />
          // <Home name={name} peerID={peerID} />
          : <Name setName={setName} />
      }
    </div>
  )
}

export default App