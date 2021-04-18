import React, { useRef, useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

const Meeting = (props) => {
    const { meetingID, myPeer, setMeetingId: setParentMeetingId } = props
    const [userName, setUserName] = useState()
    const [recording, setRecording] = useState()
    const otherPeerID = useRef()
    const vid = useRef()
    const audio = useRef()
    const connection = useRef()
    const canvasInterval = useRef()
    const streamRef = useRef()
    const mediaRecorder = useRef()
    const recordedChunks = useRef([])

    const hangUp = useCallback(() => {
        window.history.replaceState("", "", 'https://blackbox-frontend.onrender.com/')
        setParentMeetingId(null)
        vid.current?.forEach(t => t.stop())
        connection.current?.close()
    }, [setParentMeetingId])

    useEffect(() => {
        axios(`https://backend-fjkv.onrender.com/meet/${meetingID}`)
            .then(res => {
                setUserName(res.data?.name)
                otherPeerID.current = res.data?.peerID
            })
            .catch(err => {
                if (err.response.status == 404)
                    alert('Invalid meeting ID')
                // window.history.replaceState("", "", 'http://192.168.31.246:3000')
                // setParentMeetingId(null)
                // hangUp()
            })
    }, [meetingID, setParentMeetingId])

    const startRecording = useCallback(() => {
        setRecording(true)
        const fps = 30
        const canvas = document.getElementById('recording-canvas')
        const myVideo = document.getElementById('my-video')
        const hisVideo = document.getElementById('his-video')

        const myVideoDim = myVideo.getBoundingClientRect()
        const hisVideoDim = hisVideo.getBoundingClientRect()

        canvas.height = Math.max(myVideoDim.height, hisVideoDim.height)
        canvas.width = myVideoDim.width + hisVideoDim.width

        const drawImage = () => {
            canvas.getContext('2d').drawImage(myVideo, 0, 0, 100, 100)
            canvas.getContext('2d').drawImage(myVideo, 0, 0, myVideoDim.width, myVideoDim.height)
            canvas.getContext('2d').drawImage(hisVideo, myVideoDim.width, 0, hisVideoDim.width, hisVideoDim.height)
        }

        const audioContext = new AudioContext()
        console.log(audio.current)
        const myVoice = audioContext.createMediaStreamSource(new MediaStream([audio.current[0]]))
        const hisVoice = audioContext.createMediaStreamSource(new MediaStream([audio.current[1]]))
        const voiceDestination = audioContext.createMediaStreamDestination()
        myVoice.connect(voiceDestination)
        hisVoice.connect(voiceDestination)

        streamRef.current = canvas.captureStream(fps)

        mediaRecorder.current = new MediaRecorder(new MediaStream([...streamRef.current.getTracks(), ...voiceDestination.stream.getTracks()]), { mimeType: 'video/webm' })
        mediaRecorder.current.ondataavailable = (event) => {
            if (event.data?.size > 0) {
                recordedChunks.current.push(event.data)
                download()
            }
        }
        mediaRecorder.current.start()

        const download = () => {
            const blob = new Blob(recordedChunks.current, {
                type: 'video/webm'
            })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            document.body.appendChild(a)
            a.style = 'display: none'
            a.href = url
            a.download = 'recording.webm'
            a.click()
            window.URL.revokeObjectURL(url)
            recordedChunks.current = []
        }

        canvasInterval.current = setInterval(() => {
            drawImage()
        }, 1000 / fps)
    }, [])

    const stopRecording = () => {
        setRecording(false)
        clearInterval(canvasInterval.current)
        mediaRecorder.current?.stop();
    }

    useEffect(() => {
        const myVideo = document.getElementById('my-video')
        const hisVideo = document.getElementById('his-video')
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            vid.current = stream?.getTracks()
            audio.current = stream?.getAudioTracks()
            addVideoStream(myVideo, stream)

            myPeer?.on('call', call => {
                connection.current = call
                call.answer(stream)
                // const video = document.createElement('video')
                call.on('stream', userVideoStream => {
                    if (!audio.current.find(i => i.id === userVideoStream.getAudioTracks()[0]?.id))
                        audio.current = [...audio.current, ...userVideoStream.getAudioTracks()]
                    addVideoStream(hisVideo, userVideoStream)
                })
                call.on('close', hangUp)
            })
            if (myPeer.id !== otherPeerID.current) {
                connectToNewUser(otherPeerID.current, stream)
            }
        })
            .catch(console.log)

        const connectToNewUser = (userId, stream) => {
            const call = myPeer.call(userId, stream)
            call.on('stream', userVideoStream => {
                if (!audio.current.find(i => i.id === userVideoStream.getAudioTracks()[0]?.id))
                    audio.current = [...audio.current, ...userVideoStream.getAudioTracks()]
                addVideoStream(hisVideo, userVideoStream)
            })
            call.on('close', hangUp)
            connection.current = call
        }

        const addVideoStream = (video, stream) => {
            video.srcObject = stream
            video.addEventListener('loadedmetadata', () => {
                video.play()
            })
        }
    }, [myPeer, hangUp])

    return (
        <div className={styles.container}>
            <p className={styles.title}>Meeting with {userName}</p>
            <div className={styles.videosContainer}>
                <div className={styles.video}>
                    <video autoPlay id='my-video' muted>
                        Your browser does not support the video tag.
                </video>
                </div>
                <div className={styles.video}>
                    <video autoPlay id='his-video'>
                        Your browser does not support the video tag.
                </video>
                </div>
            </div>
            <canvas className={styles.canvas} id='recording-canvas'></canvas>
            <button className={styles.hangUpBtn} onClick={hangUp}>Hang Up</button>
            <button onClick={recording ? stopRecording : startRecording}>{recording ? "Stop Recording" : "Start Recording"}</button>
        </div>
    )
}


export default Meeting