
import {atom, selector} from 'recoil'
export const networkCountAtom = atom({

    key: 'networkCountAtom',
    default: 104
});
export const jobsCountAtom = atom({

    key: 'jobsCountAtom',
    default: 0
});
export const messageCountAtom = atom({

    key: 'messageCountAtom',
    default: 0
});
export const notificationCountAtom= atom({

    key: 'notificationCountAtom',
    default: 12
});

// Selector is derived from other atoms/ Selectors
export const totalCountSelector = selector({
    key: 'totalCountSelector',
    get: ({get})=>{
        const networkCount = get(networkCountAtom);
        const jobsCount = get(jobsCountAtom);
        const messageCount = get(messageCountAtom);
        const notiCount = get(notificationCountAtom);

        return networkCount + jobsCount + messageCount + notiCount;
    }
})

