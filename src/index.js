import {Formio} from 'formiojs'
import Rating from './rating/Rating.js'
Formio.use([
    {
        components: {
          rating: Rating
        }
    }
])
Formio.builder(document.getElementById("builder"), {}, {
    sanitizeConfig: {
        addTags: ["svg", "path"],
        addAttr: ["d", "viewBox"]
    }
}).then(() => {

});


Formio.createForm(document.getElementById('formio'), {
    components: [
        {
            type: "rating",
            label: "rating"
        },
    ]
}, {
    sanitizeConfig: {
        addTags: ["svg", "path"],
        addAttr: ["d", "viewBox"]
    }
})