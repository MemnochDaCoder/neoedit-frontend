import { createStore, Module } from "vuex";
import CacheService from "@/services/cacheService"; // Ensure this service exists

// File Module for Managing File Metadata
const fileModule: Module<any, any> = {
  namespaced: true,
  state: () => ({
    files: CacheService.getFromLocalStorage<Array<{ name: string; path: string }>>("files") || []
  }),
  mutations: {
    addFile(state, file: { name: string; path: string }) {
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
    }
  },
  actions: {
    addFile({ commit }, file: { name: string; path: string }) {
      commit("addFile", file);
    },
    removeFile({ commit }, fileName: string) {
      commit("removeFile", fileName);
    },
    clearFiles({ commit }) {
      commit("clearFiles");
    }
  },
  getters: {
    getFiles(state) {
      return state.files;
    }
  }
};

// Root Store
const store = createStore({
  modules: {
    file: fileModule
  }
});

export default store;
