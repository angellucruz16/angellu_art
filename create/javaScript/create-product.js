import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-storage.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const createProductForm = document.getElementById("createProduct");
const feedback = document.getElementById("feedback");

//👻upload our image

const imageUploadedReference = async (file) => {
    const storageRef = ref(storage, `products/images/${file.name}`);
    return await uploadBytes(storageRef, file);
};

const uploadMainImage = async (file) => {
    try {
        const image = await imageUploadedReference(file);
        return getDownloadURL(ref(storage, image.ref.fullPath));
    } catch (e) {
        console.log(e);
    }
};

const uploadGallery = async (files) => {

    const images = files.map(async (file) => {
        const image = await imageUploadedReference(file);
        return getDownloadURL(ref(storage, image.ref.fullPath));
    });

    return images;

}

//👻Create producr
const createProduct = async () => {
    const name = createProductForm.name.value;
    const price = createProductForm.price.value;
    const description = createProductForm.description.value;
    const type = createProductForm.type.value;
    const mainImage = createProductForm.image.files[0];
    const gallery = createProductForm.gallery.files;

    const urlMainImage = await uploadMainImage(mainImage); 

    console.log(mainImage);

    if (name && price && description && type && mainImage) {
        await addDoc(collection(db, "products"), {
            title,
            price,
            description,
            type,
            collection: false,
            image: urlMainImage,
            images: galleryImages,
        }); 

    } else{
        console.log("complete all fields");
    }
} 



//Acsess image fro url

// create product
createProductForm.addEventListener("submit", e => {
    e.preventDefault();
    createProduct();
    console.log("click");
});
