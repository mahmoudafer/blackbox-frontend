import React, { useState } from 'react'

import styles from './styles.module.css'

const Name = props => {
    const { setName } = props
    const [_name, _setName] = useState()

    const onChange = (e) => {
        _setName(e.target?.value)
    }

    const save = () => {
        setName(_name)
        localStorage.setItem('name', _name)
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Hi! What's your name?</p>
            <input onChange={onChange} placeholder='Your lovely name' />
            <button onClick={save}>Go</button>
        </div>
    )
}

export default Name