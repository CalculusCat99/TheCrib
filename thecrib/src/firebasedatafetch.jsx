import { addDoc, collection,doc,getDocs } from "firebase/firestore";
import { db } from "./firebase";
import videos from "./videos";

export const fetchMediaAssets = async()=>{
    const querySnapShot = await getDocs(collection(db,"gallery"))
    const data = querySnapShot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    console.log(data);
    return data;
}

export const setMediaAssets = async()=>{
    videos.map(async (row)=>{
        console.log("video data:",row)
        await addDoc(collection(db,"gallery"),row)
    })
}


