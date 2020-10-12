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
          {titre: data[0].titre, texte: data[0].texte, time: data[0].time, creer : data[0].creer, image: data[0].image, categorie:data[0].categorie, like: data[0].like, id:data[1]}
      )
    }
  },
  actions: {
    // BDD calls

    // Récupération de tous les articles
    addALL(context) {
      db.collection('articles')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let data = doc.data();
              let id = doc.id;
              let newData = [data,id]
              context.commit('GET_ARTICLE', newData)
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
},
    getById: state => (id) => {
      return state.Articles.find(article => article.id === id)
    }
  },
  modules: {
  }
})
