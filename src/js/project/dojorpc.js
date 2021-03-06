require(['project/project', 'dojo/_base/lang', 'dojo/topic', 'project/calendar', 'project/affProjectList', 'project/menu', 'project/affDetailedProject', 'project/development', 'project/resource', 'project/addNewDev', 'project/editDev', 'project/eventLoad', 'dojo/ready'],
function(project, lang, topic, calendar, affProjectList, menu, affDetailedProject, development, resource, addNewDev, editDev, eventLoad, ready) {
  ready(function() {
      var call            = new project() // nouvel appel Json RPC
      var projList        = new affProjectList('projects') // nouveau component qui gère la liste des projets
      var leMenu          = new menu('leMenu')
      var loadWatcher     = new eventLoad('loader') // Surveille les évènements et donc le chargement des données demandées
      var detailedProject = new affDetailedProject('detailedProject')
      var resources       = new resource('resource')
      var modalAdd        = new addNewDev('modalForm')
      var dev             = new development('development')
      var modalEdit       = new editDev('editDev')
      const store         = new Vuex
      // var graph           = new calendar('line-chart')
      new Vue({
          el: '#app',
          data: {
            currentView: '',
            isLoading: false
          },
          methods: {
            close() {
              topic.publish('closeModal')
            },
            loading() {
              this.isLoading = true
            },
            loaded() {
              this.isLoading = false
            }
          },
          created() {
            // Fonction appelée à la création de la vue
            topic.publish('getResources')
          }
        });
      document.getElementById('body').classList.remove('loading')
  });
});
