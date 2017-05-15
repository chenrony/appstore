angular.module('appsList')
.filter('unique',function(){
  return function(apps,propName){
    if(angular.isString(propName)){
      var results=[];
      var keys={};
      for(var i=0;i < apps.length;i++){
        var val=apps[i][propName];
        if(angular.isUndefined(keys[val])){
          keys[val]=true;
          result.push(val);
        }
      }
      return result;
    }
    else {
      return apps;
    }
  }
})
