import { createContext, useContext, useState } from "react"

const Notification = ({ notificationData }) => {
    const notificationstyles = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: notificationData.type === 'Success' ? 'green' : 'red',
        color: 'white',
        padding: 20,
        borderRadius: 6,
    }

    return (
        <div style={notificationstyles}>
            <h3>
                {notificationData.type === 'Success' ? 'Success' : 'Error'}
            </h3>
            <p>{notificationData.text}</p>
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        text: '',
        type: 'Success'
    })

    const showNotification = (type, text) => {
        setNotificationData({
            text, type
        })

        setTimeout(() => {
            setNotificationData(prev => ({...prev, text: ''
            }))
        }, 2000)

    }

    return (
        <NotificationContext.Provider value={{ showNotification }}>
           { notificationData.text && <Notification notificationData={notificationData} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}