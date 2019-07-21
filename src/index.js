import './style.css'
import './style1.css'
import $ from 'jquery';
import _ from 'lodash';

const element = $("div");
element.html(_.join(['hello', 'world'], '--'));
$('body').append(element)
console.log('hello world111');