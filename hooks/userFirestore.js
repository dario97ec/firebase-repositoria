import { useState,useEffect } from "react";
import{
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    doc
} from "firebase/firestore";
import { db } from "../config/firebase";

//@param{string} collectionName - Nombre de la coleccion de Firestore

export function useUserFirestore(collectionName){
    const [documents, setDocuments]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);

    //escuchar cambios en la coleccion de Firestore en tiempo real
    useEffect(()=>{
        selloading(false);
        return;
    }
    const q= query(
        collection(db, collectionName),
        orderBy("createdAt","desc")
    );

    const unsubscribe= onSnapshot(
        q,
        (snapshot )=>{
            const docs= snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),