const express = require('express')
const router = express.Router();
const modelUser = require('../model/user')

/* GET users listing. */
router.get('/', async (req, res) => {

  try {
    const list = await modelUser.find()
    res.status(200).json(list)
  } catch {
    res.status(500)
      .json({ message: error.message })
  }
})

/* GET user data. */
router.get('/:id', getUser, (req, res) => {
  return res.status(200).json(res.user)
})

/* CREATE user data. */
router.post('/', async (req, res) => {
  const user = new modelUser({
    name: req.body.name,
    created_at: req.body.created_at

  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

/* UPDATE user data. */
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null)
    res.user.name = req.body.name
  if (req.body.created_at != null)
    res.user.created_at = req.body.created_at
  try {
    const updateUser = await res.user.save()
    res.status(201).json(updateUser)
  }
  catch (err) { res.status(400).json({ message: err.message }) }

})

/* DELETE user data. */
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.deleteOne({ _id: res.user._id })
    res.status(200).json({ message: 'Deleted Successful!' })
  }
  catch (err) { res.status(500).json({ message: err.message }) }
})


async function getUser(req, res, next) {
  let user
  try {
    user = await modelUser.findById(req.params.id)
    if (user === null)
      return res.status(404).json({ message: 'User not found!' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.user = user
  next()
}


module.exports = router;