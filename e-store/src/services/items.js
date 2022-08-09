import { firestore } from "../firestore";

export const getItems = async () => {
    // Specify the collection we are working with
    // CollectionReference
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference
    const collectionRef = firestore.collection("AmazonMerch");

    // get records from that collection
    const data = await collectionRef.orderBy("title", "asc").get(); // QuerySnapshot<T>
    // clean up our records
    const rawDocuments = data.docs; // Array<QueryDocumentSnapshot<T>>

    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    // console.log(cleanedDocuments);
    return cleanedDocuments;
    // return our record
};

export const addItem = async (item) => {
    // some logic around url
    if (!item.image) {
        item.image = "https://www.placecage.com/200/200";
    }

    // Get the collection Ref
    const collectionRef = firestore.collection("AmazonMerch");
    console.log(collectionRef);
    // use the add method on the collection ref
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference#add
    const newItem = await collectionRef.add(item);
    return newItem;
};

export const getItemById = async (id) => {
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference
    const collectionRef = firestore.collection("AmazonMerch");
    // get the document reference
    const docRef = collectionRef.doc(id);
    // wait for the querySnapshot
    const rawDoc = await docRef.get(); // QuerySnapshot<T>
    // return a properly formatted object
    return { id: rawDoc.id, ...rawDoc.data() };
};

export const deleteItemById = async (id) => {
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference
    const collectionRef = firestore.collection("AmazonMerch");
    // get the document reference
    const docRef = collectionRef.doc(id);
    // delete this document
    await docRef.delete(); // void

    // return true after document has deleted
    return true;
};
