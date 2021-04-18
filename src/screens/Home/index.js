import React, { useState } from 'react'
import classnames from 'classnames'
import axios from 'axios'

import styles from './styles.module.css'

const Home = props => {
    const { name, myPeer, setMeetingId: setParentMeetingId } = props
    const [meetingId, setMeetingId] = useState()
    const [email, setEmail] = useState()

    const onChangeID = (e) => {
        setMeetingId(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onJoin = () => {
        axios(`https://backend-fjkv.onrender.com/meet/${meetingId}`)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    window.history.replaceState("", "", `https://blackbox-frontend.onrender.com/meet/${meetingId}`)
                    setParentMeetingId(meetingId)
                }
            })
            .catch(err => alert(err.message))
    }

    const newMeeting = () => {
        axios.post(`https://backend-fjkv.onrender.com/meet`, {
            peerID: myPeer.id,
            name,
            email
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            window.history.replaceState("", "", `https://blackbox-frontend.onrender.com/meet/${res.data?.id}`)
            setParentMeetingId(res.data?.id)
        })
            .catch(err => alert(err))
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Hello {name}!</p>
            <div className={styles.row}>
                <input className={styles.input} onChange={onChangeEmail} placeholder='Email to invite (Optional)' />
                <button onClick={newMeeting}>New Meeting</button>
            </div>
            <div className={styles.row}>
                <input className={styles.input} onChange={onChangeID} placeholder='Enter meeting id' />
                <button className={classnames(styles.joinBtn, { [styles.activeBlue]: meetingId?.length })} onClick={onJoin}>Join</button>
            </div>
        </div>
    )
}

export default Home