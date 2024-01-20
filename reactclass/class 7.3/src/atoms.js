import { atom, selector } from "recoil";

export const networkAtom =atom({
    key: "networkAtom",
    default:104
});

export const jobsAtom =atom({
    key: "jobsAtom",
    default:5
});

export const notificationAtom =atom({
    key: "notificationAtom",
    default:12
});

export const messagingAtom =atom({
    key: "messagingAtom",
    default:0
});

export const totalNotificationSelector=selector({
    key: "totalNotificationselector",
    get: ({get})=>{
        const networkAtomCount=get(networkAtom);
        const jobsAtomCount= get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
    }
})

