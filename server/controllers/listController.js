const List = require('../models/list.js');

module.exports = {
    // CREATE A LIST
    postCreateList: async(req, res) => {
        console.log('listController.postCreateList()');
        const { title, tasks } = req.body;
        console.log(req.body)
        if (!title) return res.status(400).send('Must have a list of todos');
        const list = await new List({
            ...req.body,
        }).save()
        return res.status(200).send(list);
    },
    // GET ALL LISTS
    getAllLists: async(res) => {
        console.log('listController.getAllLists()');
        const allLists = await List.find({})
        if (!allLists) return res.status(404).send('Sorry no lists found');
        return res.status(200).send(allLists);
    }
}