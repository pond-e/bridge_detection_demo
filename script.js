var model

async function loadPretrainedModel() {
  console.log('model load start');
  //const path = 'https://20231205server.e1904.repl.co/sotsuken_jsmodel/model.json'
  const path = 'model.json'

  model = await tf.loadLayersModel(path);

  window.globalmodel = model;
  console.log('model load end');
  window.alert('モデルの読み込みが終わったよ！　自由に操作してね');
}

document.addEventListener('DOMContentLoaded', loadPretrainedModel);
