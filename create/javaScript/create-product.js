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

    if (name && price && description && type && mainImage) {
        feedback.innerText = "Uploading product...";
        try {
             
            const urlMainImage = await uploadMainImage(mainImage);
            let galleryImages = [];


            if (gallery.length) {
                const galleryUrls = await uploadGallery([...gallery]);
                galleryImages = await Promise.all(galleryUrls);
            }

            await addDoc(collection(db, "products"), {
                name,
                price,
                image: urlMainImage,
                type,
                isBestSeller: false,
                collection: false,
                collectionName: "",
                inStock: true,
                isAdded: false,
                size: [
                    "13x16",
                    "15x15",
                    "25x13"
                ],
                quantity: "1",
                images: galleryImages,
                description,
            }); 
            feedback.innerText = "Product uploaded";
            } catch (e) {
                feedback.innerText = "Something went wrong!";
                console.log(e);
            }   
    } else {
        alert("complete all fields");
    }
};

// create product button
createProductForm.addEventListener("submit", e => {
    e.preventDefault();
    createProduct();
});
