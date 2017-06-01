<template id="component-template">
    <div id="test">
    {{test}}
    </div>
</template>

<script>
define(function(require, exports, module) {
  module.exports = {
    // ...so that it can be referenced in the component's definition
    template: '#component-template',
    data () {
      return {
          test: 'Voici un message fabuleux de test permettant de tester'
      }
    },
  };
});
</script>