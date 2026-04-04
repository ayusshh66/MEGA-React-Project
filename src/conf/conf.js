// WE MADE THIS FILE SO THAT WE CAN CALL THEM EASILY
//IT WOULD BE MESSY TO CALL THEM BY IMPORT.META.ENV....
//CLEAN APPROACH BELOW 
//import conf from "../conf/conf"; 
// conf.appwriteUrl
// conf.appwriteProjectId
const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default conf ;