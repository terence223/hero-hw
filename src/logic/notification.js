/**
 * 簡化版 notification system
 * 
 * Export
 * notifySuccess     Function   傳入 title, msg，跳出成功通知
 * notifyError       Function   傳入 title, msg，跳出錯誤通知
 * 
 */

import { store } from 'react-notifications-component';

export const notifySuccess = (title, msg) => {
    store.addNotification({
        title: title,
        message: msg,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 3000,
            showIcon: true,
            onScreen: false
        }
    });
}

export const notifyError = (title, msg) => {
    store.addNotification({
        title: title,
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 3000,
            showIcon: true,
            onScreen: false
        }
    });
}

