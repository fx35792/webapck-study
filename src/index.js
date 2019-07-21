import $ from 'jquery';
import _ from 'lodash';
import {ui} from './jquery.ui.js'
ui();

const element = $("div");
element.html(_.join(['hello', 'world'], '--'));
$('body').append(element)
console.log('hello world111');