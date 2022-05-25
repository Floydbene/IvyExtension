
let images = document.getElementsByTagName('img');
alert(images.length);
for(let i = 0; i < images.length; i++){
    chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
    images[index].src = "//upload.wikimedia.org/wikipedia/commons/4/43/Ivy_Club_postcard_1909.jpg";
  });
}