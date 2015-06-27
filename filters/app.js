angular.module('app',[]);

angular.module('app').controller('FilterCtrl',filter);

function filter(){
  
  var self=this;
  self.people=[
    
    {name:'nazar',
    born:'chicago'
    },
    {name:'mubeen',
    born:'london'
    }
    ];
  
  
}