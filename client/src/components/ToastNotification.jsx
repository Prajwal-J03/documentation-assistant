import React from 'react'

const ToastNotification = ({ type, children }) => {
    if (type === 'error') {
        return (
            <div className='fixed top-4 left-1/2 transform -translate-x-1/2 w-80 px-4 py-4 bg-white rounded-md shadow-md flex items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Circle-Xmark--Streamline-Font-Awesome" height="32" width="32">
                    <desc>
                        Circle Xmark Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path d="M16 32a16 16 0 1 0 0 -32 16 16 0 1 0 0 32zm-5.0625 -21.0625c0.5875 -0.5875 1.5375 -0.5875 2.11875 0l2.9375 2.9375 2.9375 -2.9375c0.5875 -0.5875 1.5375 -0.5875 2.11875 0s0.5875 1.5375 0 2.11875l-2.9375 2.9375 2.9375 2.9375c0.5875 0.5875 0.5875 1.5375 0 2.11875s-1.5375 0.5875 -2.11875 0l-2.9375 -2.9375 -2.9375 2.9375c-0.5875 0.5875 -1.5375 0.5875 -2.11875 0s-0.5875 -1.5375 0 -2.11875l2.9375 -2.9375 -2.9375 -2.9375c-0.5875 -0.5875 -0.5875 -1.5375 0 -2.11875z" fill="#ff4e00" stroke-width="0.0625"></path>
                </svg>
                <p>{children}</p>
            </div>
        )
    }
    if (type === 'success') {
        return (
            <div className='fixed top-4 left-1/2 transform -translate-x-1/2 w-80 px-4 py-4 bg-white rounded-md shadow-md flex items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Circle-Check--Streamline-Font-Awesome" height="32" width="32">
                    <desc>
                        Circle Check Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path d="M16 32a16 16 0 1 0 0 -32 16 16 0 1 0 0 32zm7.0625 -18.9375L15.0625 21.0625c-0.5875 0.5875 -1.5375 0.5875 -2.11875 0l-4 -4c-0.5875 -0.5875 -0.5875 -1.5375 0 -2.11875s1.5375 -0.5875 2.11875 0l2.9375 2.9375L20.9375 10.9375c0.5875 -0.5875 1.5375 -0.5875 2.11875 0s0.5875 1.5375 0 2.11875z" fill="#61ff00" stroke-width="0.0625"></path>
                </svg>
                <p>{children}</p>
            </div>
        )
    }
    if (type === 'notification') {
        return (
            <div className='fixed top-4 left-1/2 transform -translate-x-1/2 w-80 px-4 py-4 bg-white rounded-md shadow-md flex items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" id="Notification-Alarm-2--Streamline-Core" height="32" width="32">
                    <desc>
                        Notification Alarm 2 Streamline Icon: https://streamlinehq.com
                    </desc>
                    <g id="notification-alarm-2--android-phone-mobile-device-smartphone-iphone-alert-bell-alarm">
                        <path id="Union" fill="#efde03" fill-rule="evenodd" d="M14.004571428571428 1.1428571428571428c1.0422857142857143 0 2.0685714285714285 0.15542857142857144 3.049142857142857 0.4502857142857143a8.571428571428571 8.571428571428571 0 0 0 7.474285714285714 12.692571428571428v5.090285714285714a1.5885714285714283 1.5885714285714283 0 0 0 1.5908571428571427 1.5885714285714283 1.7142857142857142 1.7142857142857142 0 1 1 0 3.4285714285714284H1.8902857142857141a1.7142857142857142 1.7142857142857142 0 0 1 0 -3.4285714285714284 1.5885714285714283 1.5885714285714283 0 0 0 1.5908571428571427 -1.5885714285714283V11.666285714285713A10.523428571428571 10.523428571428571 0 0 1 14.004571428571428 1.1428571428571428Zm-2.2857142857142856 26.285714285714285a1.7142857142857142 1.7142857142857142 0 0 0 0 3.4285714285714284h4.571428571428571a1.7142857142857142 1.7142857142857142 0 0 0 0 -3.4285714285714284h-4.571428571428571Z" clip-rule="evenodd" stroke-width="2.2857"></path>
                        <path id="Vector" fill="#ff3400" d="M24.57142857142857 11.428571428571427a5.7142857142857135 5.7142857142857135 0 1 0 0 -11.428571428571427 5.7142857142857135 5.7142857142857135 0 0 0 0 11.428571428571427Z" stroke-width="2.2857"></path>
                    </g>
                </svg>
                <p>{children}</p>
            </div>
        )
    }
}

export default ToastNotification