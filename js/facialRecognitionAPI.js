const subscriptionKey = 'f00b9ba104e54d34b2a3b74ab4589547';
const APIUrl = "https://frafacialapi.cognitiveservices.azure.com/face/v1.0/"

// callback : function([facerectangle])
function trackVideo(canvas, video, callback) {
    ctx = canvas.getContext('2d');
    setInterval(
        function () {
            ctx.drawImage(video, 0, 0, canvas.width,canvas.height);
            canvas.toBlob((blob) => {
                detectFace(blob, callback)   
            })
    },5000);
}

function detectFace(imageData, callback) {
    var successHandler = function(data) {
        var rects = []
        for (obj in data) {
            rects.push(data[obj].faceRectangle)
        }
        typeof callback === 'function' && callback(rects);
    }
    var errorHandler = function(error) {
      console.log(error);
    }
    var url = APIUrl + "detect?returnFaceId=true&returnFaceLandmarks=false"
    postBinaryData(url,'POST',imageData,undefined,successHandler,errorHandler);
}

function postBinaryData(callurl,method,data=undefined,params=undefined,callBack=undefined,errorCallBack=undefined) {
    $.ajax({
        url: callurl,
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",subscriptionKey);
        },
        type: method,
        data: data,
        processData: false,
    })
    .done(function(data){
        typeof callBack === 'function' && callBack(data);
    })
    .fail(function(error){
        typeof errorCallBack === 'function' && errorCallBack(error);
    });
}

