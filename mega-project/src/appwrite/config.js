import conf from "../conf/conf";
import { Client, Account, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  tablesDB;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.tablesDB = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost(title, slug, content, featuredImage, status, userId) {
    try {
      return await this.tablesDB.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
        data: { title, slug, content, featuredImage, status, userId },
      });
    } catch (error) {
      throw error;
    }
  }
  
  async updatePost(slug, {title, content, featuredImage, status, userId}){
try {
    return await this.tablesDB.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
        data: { title, content, featuredImage, status, userId },
      });
    } catch (error) {
    throw error;
}


}

async deletePost(slug){
try {
    await this.tablesDB.deleteRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
    })
    return true
} catch (error) {
    return false;
    console.log("Appwrite service :: deletePost :: error", error)

}

}
async getPost(slug){
try {
    await this.tablesDB.getRow({
    databaseId: conf.appwriteDatabaseId,
    tableId: conf.appwriteCollectionId,
    rowId: slug,
});
} catch (error) {
    console.log("Error getting post",error)
}

}

async  getPosts(queries = [Query.equal("status", "active")]){
    try {
        await this.tablesDB.listRows({
    databaseId: conf.appwriteDatabaseId,
    tableId: conf.appwriteCollectionId,
    queries
});
    } catch (error) {
        
    }
}

}


export const service = new Service();

export default service;
