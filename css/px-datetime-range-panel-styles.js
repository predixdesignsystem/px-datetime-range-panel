const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-datetime-range-panel-styles">
<template>
<style>
@charset "UTF-8";/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{background-color:var(--px-base-background-color,#fff);font-size:15px;overflow-y:scroll;min-height:100%;box-sizing:border-box}:host,html{color:var(--px-base-text-color,#2c404c);line-height:1.33333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body,figure{margin:0}.u-mh--,.u-mr--{margin-right:.33333rem!important}.u-mt--,.u-mv--{margin-top:.33333rem!important}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}address,blockquote,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,table,ul{margin-bottom:1rem}li>ol,li>ul{margin-bottom:0}.u-mb--,.u-mv--{margin-bottom:.33333rem!important}dd,ol,ul{margin-left:2rem}.u-mh--,.u-ml--{margin-left:.33333rem!important}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}*,:after,:before{box-sizing:inherit}:host{/*! Comment to prevent cssmin munging this rule with html above and borking Safari */box-sizing:border-box}.flex{display:flex}.inline--flex{display:inline-flex}.flex--row{flex-direction:row}.flex--row--rev{flex-direction:row-reverse}.flex--col{flex-direction:column}.flex--col--rev{flex-direction:column-reverse}.flex--nowrap{flex-wrap:nowrap}.flex--wrap{flex-wrap:wrap}.flex--wrap--rev{flex-wrap:wrap-reverse}.flex--left{justify-content:flex-start}.flex--center{justify-content:center}.flex--right{justify-content:flex-end}.flex--justify{justify-content:space-between}.flex--spaced{justify-content:space-around}.flex--top{align-items:flex-start}.flex--middle{align-items:center}.flex--bottom{align-items:flex-end}.flex--stretch{align-items:stretch}.flex--baseline{align-items:baseline}.flex--top--multi{align-content:flex-start}.flex--middle--multi{align-content:center}.flex--bottom--multi{align-content:flex-end}.flex--stretch--multi{align-content:stretch}.flex--justify--multi{align-content:space-between}.flex--spaced--multi{align-content:space-around}.flex__item{flex:1}.flex__item--msfix{flex:1 1 auto}.flex__item--top{align-self:flex-start}.flex__item--middle{-ms-grid-row-align:center;align-self:center}.flex__item--bottom{align-self:flex-end}.flex__item--baseline{align-self:baseline}.shadow-component{box-shadow:0 1px 1px var(--px-shadow-component,rgba(0,0,0,.2))}.shadow-temporary{box-shadow:0 1px 3px var(--px-shadow-temporary,rgba(0,0,0,.2))}.shadow-navigation{box-shadow:0 2px 4px var(--px-shadow-navigation,rgba(0,0,0,.2))}.shadow-notification{box-shadow:0 4px 8px var(--px-shadow-notification,rgba(0,0,0,.2))}.shadow-modal{box-shadow:0 6px 12px var(--px-shadow-modal,rgba(0,0,0,.2))}:host[hidden]{visibility:hidden}.rangepicker__box{padding:.66667rem 1.33333rem 1.33333rem;border:1px solid;z-index:var(--px-range-panel-z-index,300);border-color:var(--px-range-panel-border-color,#d3d3d3);background-color:var(--px-range-panel-background-color,#fff);display:inline-block}.box__time{--px-datetime-entry-font-size:30px;--px-datetime-field-height:2.66667rem;--px-btn-height:1em;--px-datetime-icon-size:2rem;--px-dropdown-icon-size:2rem;--px-dropdown-content-font-size:15px}.u-m--{margin:.33333rem!important}.u-mh-,.u-mr-{margin-right:.66667rem!important}.u-mh-,.u-ml-{margin-left:.66667rem!important}.u-mt-,.u-mv-{margin-top:.66667rem!important}.u-mb-,.u-mv-{margin-bottom:.66667rem!important}.u-m-{margin:.66667rem!important}.u-mh\\00002b,.u-mr\\00002b{margin-right:1.33333rem!important}.u-mh\\00002b,.u-ml\\00002b{margin-left:1.33333rem!important}.u-mt\\00002b,.u-mv\\00002b{margin-top:1.33333rem!important}.u-mb\\00002b,.u-mv\\00002b{margin-bottom:1.33333rem!important}.u-m\\00002b{margin:1.33333rem!important}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;