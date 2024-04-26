// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  setDoc,
  doc,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqF-liH_tPa0WbSjJU0ubMuidoheMAiac",
  authDomain: "birven.firebaseapp.com",
  projectId: "birven",
  storageBucket: "birven.appspot.com",
  messagingSenderId: "579544814956",
  appId: "1:579544814956:web:dfefe7df7c35943b1f0f49",
  measurementId: "G-VZ4FCJ4Y7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export const useProductFunctions = () => {
  const [productImageUploadProgress, setProductImageUploadProgress] =
    useState(0);
  const [productImageURL, setProductImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  //  x fetch all products
  //  x addProduct
  //    delete product
  //  x update Product
  //    search by name or category
  //  x handle imageUpload

  const productCollectionRef = collection(db, "Products");

  const uploadProductImage = async (file) => {
    const result = {
      data: null,
      status: "pending",
    };

    console.log("uploading_product_image >>", file);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, "productImages/" + file.name);

    try {
      setLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload_is " + progress + "% done");
          setProductImageUploadProgress(
            parseInt(parseFloat(progress).toFixed(0))
          );

          switch (snapshot.state) {
            case "paused":
              console.log("upload_is_paused");
              break;
            case "running":
              console.log("upload_is_running");
              break;
          }
        },
        (error) => {
          // Handle errors
          result.status = "error";
          result.error = error;
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File available at", downloadURL);
              setProductImageURL(downloadURL);
              setLoading(false);
              // Update the result object with the download URL and status
              result.data = downloadURL;
              result.status = "success";
            })
            .catch((error) => {
              // Handle errors when getting the download URL
              result.status = "error";
              result.error = error;
            });
        }
      );
    } catch (err) {
      // Handle any other errors that may occur
      console.log("the_following_error_occurred >>", err);
      result.status = "error";
      result.error = err;
    }

    return result; // Return the result object
  };

  const fetchAllProducts = async () => {
    console.log("fetch_all_products() initialized ...");
    try {
      const allProductsQuery = query(productCollectionRef);
      const allProductsSnapShot = await getDocs(allProductsQuery);
      console.log("all_products_snapshot >> ", allProductsSnapShot);

      if (allProductsSnapShot?.empty) {
        console.log("No Products Found");
        return {
          collection: "products",
          success: false,
          data: null,
          message: "No Products Found",
        };
      } else {
        console.log("all_product_snapshot >> ", allProductsSnapShot);
        const allProductsData = allProductsSnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return {
          collection: "products",
          success: true,
          data: allProductsData,
          message: `${allProductsData.length} products_found`,
        };
      }
    } catch (error) {
      console.log("Error in getting products >>> ", error);
      return {
        collection: "products",
        success: false,
        data: null,
        message: `product_fetching_failed ${error}`,
      };
    }
  };

  const fetchProductDetail = async (id) => {
    const productItemRef = doc(db, "Products", id);
    const productSnap = await getDoc(productItemRef);
    if (productSnap.exists()) {
      console.log("product_data >> ", productSnap?.data());
      return {
        success: true,
        data: productSnap.data(),
        message: "product_found",
      };
    } else {
      console.log("No such document!");
      return {
        success: false,
        data: null,
        message: "product_not_found",
      };
    }
  };

  const fetchFilteredStatusProducts = async (filter) => {
    const filteredProductsQuery = query(
      productCollectionRef,
      where("status", "==", filter)
    );
    const filteredProductsSnapshot = await getDocs(filteredProductsQuery);
    const filteredProductsData = filteredProductsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      status: "success",
      filter: filter,
      products: filteredProductsData,
    };
  };

  const addProduct = async (data) => {
    console.log("add_product()_initialized ...");
    console.log("product_data_to_use >> ", data);

    try {
      const newProductRef = doc(collection(db, "Products"));
      await setDoc(newProductRef, data);
      return {
        collection: "products",
        success: true,
        data: data,
        message: `product_added_succesfully`,
      };
    } catch (e) {
      console.log("Error in adding product >>> ", e);
      return {
        collection: "products",
        success: false,
        data: null,
        message: `product_adding_failed ${e}`,
      };
    }
  };

  const updateProduct = async (id, data) => {
    try {
      const productItemRef = doc(db, "Products", id);

      await updateDoc(productItemRef, {
        ...data,
        data: data,
      });

      return {
        success: true,
        data: `updated_product_item : #${bookingId}`,
      };
    } catch (error) {
      console.error("the_following_error_occured_during_updating_prouct_item");
      throw error;
    }
  };

  const deleteProduct = async (id) => {
    const productItemRef = doc(db, "Products", id);
    const productSnap = await getDoc(productItemRef);
    if (!productSnap.exists()) {
      return {
        success: false,
        message: "this_product_does_not_exist",
      };
    } else {
      console.log("product_found");
      console.log("delete_initialized");
      await deleteDoc(productItemRef);
      return {
        success: true,
        message: "product_deleted",
      };
    }
  };

  return {
    fetchAllProducts,
    addProduct,
    updateProduct,
    uploadProductImage,
    fetchProductDetail,
    deleteProduct,
    fetchFilteredStatusProducts,
    loading,
    productImageUploadProgress,
    productImageURL,
  };
};

// AUTHENTICATION
export const useAuthenticationFunctions = () => {
  const login = async (email, password) => {
    console.log("logging in ... ");
    console.log("email >> ", email);
    console.log("password >> ", password);

    try {
      // Authenticate the user with the provided email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Optionally perform any additional actions after successful login

      // Return a success message or code
      return {
        success: true,
        message: "Login successful",
        loggedInUser: userCredential.user,
      };
    } catch (error) {
      // Handle authentication errors
      console.error("Login failed", error);

      // Return an error message or code
      return {
        success: false,
        error: error.code,
        message: error.message,
        loggedInUser: null,
      };
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  return {
    login,
    logout,
  };
};