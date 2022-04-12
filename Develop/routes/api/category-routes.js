const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();

    if (!categoryData) {
      res.status(404).json({ message: 'No categories found!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

 // find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPK(req.params.id, {
      include: [{model: Product, as: 'product_category'}]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update({
      category_name: req.body.category_name,
    },
    {
      where: {
        category_id: req.params.category_id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
