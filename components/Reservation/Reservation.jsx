import { useState } from 'react';
import styles from '../../styles/Reservation.module.css'

const Reservation = ({className}) => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        persons: '',
        timing: '',
        date: ''
    })
    const [error, setError] = useState()
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let error = []
        Object.keys(info).forEach((key) => {
            if (info[key] === '') {
                console.log(`${key} is empty`)
                error.push(key)
                return
            }
        })
        setError(error)
        if (error.length === 0) {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            setSuccess(true)
          }
          , 2000)
        }
    }


  return (
    <div className={className ? styles[className] : styles.reservation}>
      <form
        className={styles.reservationForm}
        onSubmit={handleSubmit}
        // style={{ display: success ? "none" : "flex" }}
      >
        <div className={styles.formHead}>
          <h3>RESERVATION</h3>
          <p>Book Your Table</p>
        </div>
        {!success && (
          <>
            <div className={styles.inputGroub}>
              <div className={styles.formGroub}>
                <div className={styles.input}>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>
                      setInfo((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  {error && error.includes("name") && (
                    <div className={styles.error}>Name is required</div>
                  )}
                </div>
                <div className={styles.input}>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setInfo((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  {error && error.includes("email") && (
                    <div className={styles.error}>Email is required</div>
                  )}
                </div>
              </div>
              <div className={styles.formGroub}>
                <div className={styles.input}>
                  <input
                    type="text"
                    placeholder="Persons"
                    onChange={(e) =>
                      setInfo((prev) => ({ ...prev, persons: e.target.value }))
                    }
                  />
                  {error && error.includes("persons") && (
                    <div className={styles.error}>Persons is required</div>
                  )}
                </div>
                <div className={styles.input}>
                  <input
                    type="text"
                    placeholder="Timing"
                    onChange={(e) =>
                      setInfo((prev) => ({ ...prev, timing: e.target.value }))
                    }
                  />
                  {error && error.includes("timing") && (
                    <div className={styles.error}>Timing is required</div>
                  )}
                </div>
                <div className={styles.input}>
                  <input
                    type="text"
                    placeholder="Date"
                    onChange={(e) =>
                      setInfo((prev) => ({ ...prev, date: e.target.value }))
                    }
                  />
                  {error && error.includes("date") && (
                    <div className={styles.error}>Date is required</div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.formBtn}>
              <button
                onSubmit={handleSubmit}
                disabled={loading}
                style={{ background: loading && "#E1B168" }}
              >
                {!loading ? "Book A Table" : "Submiting..."}
              </button>
            </div>
          </>
        )}
        {success && (
          <div
            className={styles.success}
            // style={{ display: success ? "flex" : "none" }}
          >
            <button>Thank you! Your submission has been received!</button>
          </div>
        )}
      </form>
      {/* <div
        className={styles.success}
        style={{ display: success ? "flex" : "none" }}
      >
        <button>Thank you! Your submission has been received!</button>
      </div> */}
    </div>
  );
}

export default Reservation