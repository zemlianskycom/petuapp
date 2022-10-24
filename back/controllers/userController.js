// @desc Get user profile
// @route GET /api/users/profile
// @access Private

export const getUserProfile = (req, res) => {
  const user = {
    name: 'User',
    age: 25,
  }

  res.json(user)
}
