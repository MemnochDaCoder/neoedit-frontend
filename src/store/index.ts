import { createStore, Module } from "vuex";
import CacheService from "@/services/cacheservice"; // Ensure this service exists

// Define the structure of a file object
interface FileMetadata {
  name: string;
  path: string;
}

// File Module for Managing File Metadata
const fileModule: Module<{ files: FileMetadata[] }, unknown> = {
  namespaced: true,
  state: () => ({
    files: CacheService.getFromLocalStorage<FileMetadata[]>("files") || [],
  }),
  mutations: {
    addFile(state, file: FileMetadata) {
      state.files.push(file);
      CacheService.saveToLocalStorage("files", state.files);
    },
    removeFile(state, fileName: string) {
      state.files = state.files.filter((file) => file.name !== fileName);
      CacheService.saveToLocalStorage("files", state.files);
    },
    clearFiles(state) {
      state.files = [];
      CacheService.clearLocalStorage();
    },
  },
  actions: {
    addFile({ commit }, file: FileMetadata) {
      commit("addFile", file);
    },
    removeFile({ commit }, fileName: string) {
      commit("removeFile", fileName);
    },
    clearFiles({ commit }) {
      commit("clearFiles");
    },
  },
  getters: {
    getFiles(state) {
      return state.files;
    },
  },
};

// Root Store
const store = createStore({
  modules: {
    file: fileModule,
  },
});

export default store;
