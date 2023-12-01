import React from 'react'

import styles from './AdminCreate.module.css'

const AdminPage = () => {
    return (
        <div>

            <div className="">
                <div>
                    <div className="">
                        <div className={styles.header}>
                            <div className="">
                                <p className="">Admin DashBoard</p>
                                <p className="">Bus entry creation</p>
                            </div>

                            <div className={styles.form}>
                                <div className="">
                                    <div className={styles.row}>
                                        <label htmlFor="full_name">Bus Name</label>
                                        <input
                                            type="text"
                                            name="busName"
                                            id="busName"
                                            className=""
                                            value=""
                                        />
                                    </div>

                                    <div className={styles.row}>
                                        <label htmlFor="email">Total Seat</label>
                                        <input
                                            type="text"
                                            name="totalSeat"
                                            id="totalSeat"
                                            className=""
                                            value=""
                                        // placeholder="email@domain.com"
                                        />
                                    </div>

                                    <div className={styles.row}>
                                        <label htmlFor="address">Current Occupancy</label>
                                        <input
                                            type="text"
                                            name="currentOccupancy"
                                            id="currentOccupancy"
                                            className=""
                                            value=""
                                            placeholder=""
                                        />
                                    </div>

                                    <div className={styles.row}>
                                        <label htmlFor="city">Available Day Of Operation</label>
                                        <input
                                            type="text"
                                            name="availableDayOfOperation"
                                            id="availableDayOfOperation"
                                            className=""
                                            value=""
                                            placeholder=""
                                        />
                                    </div>
                                    <div className={styles.row}>
                                        <label htmlFor="city">  Pickup Address</label>
                                        <input
                                            type="text"
                                            name=" pickup_address"
                                            id=" pickup_address"
                                            className=""
                                            value=""
                                            placeholder=""
                                        />
                                    </div>
                                    <div className={styles.row}>
                                        <label htmlFor="city"> Drop Address</label>
                                        <input
                                            type="text"
                                            name=" drop_address"
                                            id=" drop_address"
                                            className=""
                                            value=""
                                            placeholder=""
                                        />
                                    </div>



                                    <div className={styles.row}>
                                        <div className="">
                                            <button className="">
                                                Submit
                                            </button>
                                            {/* google button */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AdminPage