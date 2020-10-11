import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebaseDb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Articles : []
  },
  mutations: {

    // Mise à jour du state Article
    GET_ARTICLE(state, data){
      state.Articles.push(
          {titre: data.titre, texte: data.texte, time: data.time, creer : data.creer, image: data.image, categorie:data.categorie, like: data.like}
      )
    }
  },
  actions: {
    // BDD calls

    // Récupération de tous les articles
    addALL({commit}) {
      db.collection('articles')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let data = doc.data();
              commit('GET_ARTICLE', data)
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
    }
  },
  getters:{
    // Getter pour renvoie des articles
getAllArticle: state => {
  return state.Articles
}
  },
  modules: {
  }
})
