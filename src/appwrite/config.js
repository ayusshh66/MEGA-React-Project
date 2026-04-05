import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from '../conf/conf'



export class Service{
    client = new Client();
    databases ;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client); 
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument({databaseId : conf.appwriteDatabaseId,
              collectionId:  conf.appwriteCollectionId,
               documentId: slug,
               data :  {
                title,
                content,
                featuredImage,
                status,
                userId

               }
            })
            
        } catch (error) {
            console.log("appwrite service:: createpost :: error ", error)
            
        }
    }

    async updatePost ({title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument({databaseId:conf.appwriteDatabaseId,
                collectionId : conf.appwriteCollectionId,
                documentId : slug,
                data : {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            })
            
        } catch (error) {
            throw error;
        }
    }

    async deletePost ({slug}){
        try {
             await this.databases.deleteDocument({databaseId : conf.appwriteDatabaseId,
                collectionId : conf.appwriteCollectionId,
                documentId : slug,
                
            })
            return true
        } catch (error) {
            throw error;
            
        }
    }

    async getPost ({slug}){
        try {
            return await this.databases.getDocument({databaseId :  conf.appwriteDatabaseId,
                collectionId : conf.appwriteCollectionId,
                documentId : slug
            })
        } catch (error) {
            throw error;
            
        }

    }
    
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            )
            
        } catch (error) {
            console.log(error);
            return false ;
            
            
        }
         
    }

    // file upload service

    async uploadFile ({file}){
        try {
             return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,

             )
            
        } catch (error) {
            throw error ;
            
        }

    }

    async deleteFile({fileId}){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            console.log(error);
            return false;
            
        }
    }

    getFilePreview({fileId}){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

};

const service = new Service();
export default service;