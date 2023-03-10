const { DateTime } = require("luxon");
const {v4: uuidv4}= require('uuid');

const stories = [
    {
        id: '1',
        title: 'My life at Charlotte',
        content: 'Charlotte is the best place to stay, cheap but not cheap at the same time! PERFECT.',
        author: 'Ramsey',
        createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
   },
    {
        id: '2',
        title: 'Learning NBAD',
        content: 'It is always a good thing to learn more stuff in IT depatment.',
        author: 'Ramsey',
        createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        title: 'My Spring Break',
        content: 'Can not wait for upcoming spring break.',
        author: 'Ramsey',
        createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT) 
    }
];

exports.find =() => stories;


exports.findById = id =>  stories.find(story => story.id == id);

exports.save = function(story){
    story.id = uuidv4();
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT) ;
    stories.push(story);
};
 exports.updateById = function(id, newStory){
    let story = stories.find(story => story.id == id);
    if(story){
        story.title = newStory.title;
        story.content = newStory.content;
        return true;
    } else {
        return false;
    }
 }

 exports.deleteById = function(id){
    let index = stories.findIndex( story =>story.id === id);
    if (index !== -1) {
        stories.splice(index, 1);
        return true;
    } else {
        return false;
    }
    
 }