angular.module('starter.services', [])

.factory('Registration',['$http','BACKENDLESS_CREDENTIALS',function($http, BACKENDLESS_CREDENTIALS){
    return {
        setDevice:function(device){
            return $http.post('https://api.backendless.com/v1/data/Validation',device,{
                headers:{
                    'application-id': BACKENDLESS_CREDENTIALS.APP_ID,
                    'secret-key':BACKENDLESS_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        sendPushId:function(objId,pushId){
            return $http.put('https://api.backendless.com/v1/data/Validation/'+objId,pushId,{
                headers:{
                    'application-id': BACKENDLESS_CREDENTIALS.APP_ID,
                    'secret-key':BACKENDLESS_CREDENTIALS.REST_API_KEY,
                }
            });
        },
        sendCode:function(objId,code){
            return $http.put('https://api.backendless.com/v1/data/Validation/'+objId,code,{
                headers:{
                    'application-id': BACKENDLESS_CREDENTIALS.APP_ID,
                    'secret-key':BACKENDLESS_CREDENTIALS.REST_API_KEY,
                }
            });
        },
        insertUser:function(data){
            return $http.post('https://api.backendless.com/v1/data/Subscription',data,{
                headers:{
                    'application-id': BACKENDLESS_CREDENTIALS.APP_ID,
                    'secret-key':BACKENDLESS_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(id,data){
            return $http.put('https://api.parse.com/1/classes/Todo/'+id,data,{
                headers:{
                    'application-id': BACKENDLESS_CREDENTIALS.APP_ID,
                    'secret-key':BACKENDLESS_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(id){
            return $http.delete('https://api.parse.com/1/classes/Todo/'+id,{
                headers:{
                    'application-id': BACKENDLESS_CREDENTIALS.APP_ID,
                    'secret-key':BACKENDLESS_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        }
    }
}])

.value('BACKENDLESS_CREDENTIALS',{
    APP_ID: '42AC54AB-35BA-0BF3-FF2B-D81572191A00',
    REST_API_KEY:'7CAE261B-88C0-CE19-FF79-32C831313E00'
});