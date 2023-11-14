module.exports = {
  plugins: {                                       
    //'css-mqpacker':{},
    'postcss-preset-env':   
    {       
      stage: 2,
    },      
    'cssnano': {
      'preset':[
        'default',
      ]     
    }       
  }         
}
