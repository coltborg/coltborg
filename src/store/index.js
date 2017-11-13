import Vue from 'vue';
import Vuex from 'vuex';
import tokens from '../../tokens';

Vue.use(Vuex);

const contentful = require('contentful');
/* eslint-disable */
const client = contentful.createClient({
  space: tokens.contentful.space,
  accessToken: tokens.contentful.accessToken,
});

export default new Vuex.Store({
  state: {
    settings: {},
    book: {},
    book: {},
  },
  actions: {
    loadAllData: ({ commit }) => {
      let asyncData;
      Promise.all([
        client.getEntries({
          'content_type': 'settings',
        }),
        client.getEntries({
          'content_type': 'defaultTemplate',
        }),
        client.getEntries({
          'content_type': 'book',
        }),
      ])
      .then(([settings, defaultTemplate, book]) => {
        let tempSettings = {...settings.items, ...settings.sys};
        console.log(tempSettings);

        asyncData = {
          settings: settings.items[0],
          defaultTemplate: defaultTemplate.items,
          book: book.items,
        };
        commit('setAllData', { asyncData });
      });
    },
  },
  mutations: {
    setAllData(state, { asyncData }) {
      state.settings = asyncData.settings;
      state.defaultTemplate = asyncData.defaultTemplate;
      state.book = asyncData.book;
    },
  }
});
