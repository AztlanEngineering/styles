module.exports = {
  extends:[
    'stylelint-config-palantir',
    'stylelint-config-palantir/sass.js'
  ],
  rules:{
    indentation:2,
    // For more legibility where `@use` and `@include` follow each other
    'at-rule-empty-line-before':['always', {
      except       :['after-same-name', 'inside-block'], 
      ignoreAtRules:['include', 'mixin', 'function'],    
    }],
  }
}
