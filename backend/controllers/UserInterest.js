const User = require('../models/user')

module.exports.saveInterest= async(req,res)=>{

   
    const { interest} = req.body;
    const userId = req.user.id; // Assuming you have authentication middleware
 console.log(req.user.id)

    // Save interests to the user's profile in the database
    User.findByIdAndUpdate(userId, { $set: { interest } }, { new: true })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error saving interests' });
      });

}

module.exports.getInterests = async(req,res)=>{

    try {
        const Interests = User.findById()

    } catch (error) {
        
    }

}