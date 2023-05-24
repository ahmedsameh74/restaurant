import { useState } from 'react';
import styles from '../../styles/Reservation.module.css'

const Reservation = () => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        persons: '',
        timing: '',
        date: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(info)
    }


  return (
    <div className={styles.reservation}>
      <form className={styles.reservationForm} onSubmit={handleSubmit}>
        <div className={styles.formHead}>
          <h3>RESERVATION</h3>
          <p>Book Your Table</p>
        </div>
        <div className={styles.inputGroub}>
          <div className={styles.formGroub}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className={styles.formGroub}>
            <input
              type="text"
              placeholder="Persons"
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, persons: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Timing"
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, timing: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Date"
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </div>
        </div>
        <div className={styles.formBtn}>
          <button onSubmit={handleSubmit}>Book A Table</button>
        </div>
      </form>
    </div>
  );
}

export default Reservation