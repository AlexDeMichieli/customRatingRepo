 import {Formio} from "formiojs";
 import RatingEditDisplay from "./editForm/Rating.edit.display.js";
 export default function (...extend){
     return Formio.Components.baseEditForm([
         {
             key: 'data',
             ignore: true,
         },
         {
             key: 'display',
             components: RatingEditDisplay
         },
         {
             key: 'validation',
             ignore: true
         }
     ], ... extend)
 }