import { Client,Account, ID } from "appwrite";

export  class Authservice{
    Client = new Client();
    account;

    // constructor = setup code that should run at the moment the object is created.
    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        .this.account = new Account(this.Client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                //call another method
                
                
            } else {
                return userAccount
                
            }
        } catch (error) {
            throw error;
            
        }

    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            
        throw error;
        }
    }

    async getCurrentUser (){
        try {
            return await this.account.get();

            
        } catch (error) {
                        console.log("Appwrite serive :: getCurrentUser :: error", error);

            
        }
        return null;
    }

    async logOut (){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
            
        }
    }

};

const  autservice = new Authservice();

export default autservice;