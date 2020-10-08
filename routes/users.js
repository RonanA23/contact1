const express = require('express');
const router = express();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'please enter email').isEmail(),
    check('password', '6 or more chars').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('passed');
    const { name, password, email } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'user already exists' });
    }
    user = new User({
      name,
      password,
      email,
    });

    const salt = await bcryptjs.genSalt(10);
    user.password = await bycrypt.hash('password', salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get('jwtsecret'),
      {
        expiresIn: 360000,
      },
      (error, token) => {
        if (err) throw err;
        res.json(token);
      }
    );
  }
);

module.exports = router;
