module.exports = {
  extends:[
    'stylelint-config-palantir',
    'stylelint-config-palantir/sass.js'
  ],
  rules:{
    indentation:2,
    // For more legibility where `@use` and `@include` follow each other
    // 'at-rule-no-unknown' :[true,                                                                                                                                
  'at-rule-no-unknown' :[true,{    
    ignoreAtRules:[
      // additional scss at-rules:
      'forward',
      // original scss at-rules:
      'content', 'debug', 'each', 'else', 'error', 'extend', 'for', 'function', 'if', 'include', 'mixin', 'return', 'use',
    ],
  },],
  'at-rule-empty-line-before':['always', {
      except       :['after-same-name', 'inside-block'], 
      ignoreAtRules:['include', 'mixin', 'function'],    
    }],
  }
}
