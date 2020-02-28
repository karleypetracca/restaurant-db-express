const express = require('express'),
    router = express.Router(),
    restModel = require('../models/restmodel'),
    reviewModel = require('../models/reviewmodel');

router.get('/:id?', async (req, res) => {
    let restaurantData = [],
        reviewData = [];
    const { id } = req.params;
    if (!!id) {
        restaurantData = await restModel.getById(id);
        reviewData = await reviewModel.getAll();
    } else {
        restaurantData = await restModel.getAll();
        reviewData = await reviewModel.getAll();
    }
    res.render('template', {
        locals: {
            title: 'Local Restaurant Extravaganza',
            restaurantData: restaurantData,
            reviewData: reviewData
        },
        partials: {
            partial: 'partial-rest'
        }
    });
});

module.exports = router;