
export default function iso8061ToEpoch(time){
    const date = new Date(time);
    return date.getTime();
}

export function iso8061RightNow(){
    const now = new Date();
    return now.toISOString();
}