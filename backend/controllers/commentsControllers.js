const Itinerary = require("../models/Itinerary");

const commentsControllers = {
  getComments: async (req, res) => {
    const { id } = req.params;

    try {
      const comments = await Itinerary.findById(id).populate("comments.userId");

      res.json({ success: true, response: comments, error: null });
    } catch (error) {
      res.json({ success: false, response: null });
    }
  },
  addComment: async (req, res) => {
    try {
      const newComment = await Itinerary.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            comments: {
              userId: req.user._id,
              commentary: req.body.commentary,
            },
          },
        },
        { new: true }
      );
      res.json({ success: true, response: newComment, error: null });
    } catch (e) {
      res.json({
        success: false,
        response: null,
        e: e,
      });
    }
  },
  deleteComment: async (req, res) => {
    try {
      const deletedComment = await Itinerary.findOneAndUpdate(
        { _id: req.params.idItinerary },
        {
          $pull: {
            comments: { _id: req.params.idComment },
          },
        },
        { new: true }
      )
      res.json({ success: true, response: deletedComment, error: null });
    } catch (e) {
      res.json({
        success: false,
        response: null,
        e: error,
      });
    }
  },
  updateComment: async (req, res) => {
    try {
      let updatedComment = await Itinerary.findOneAndUpdate(
        { "comments._id": req.params.id },
        { $set: { "comments.$.commentary": req.body.commentary } },
        { new: true }
      );
      if (updatedComment) {
        res.json({ success: true, response: updatedComment.comments });
      } else {
        console.log("Commentary not found!");
      }
    } catch (error) {
      res.json({ success: false, response: error.message });
    }
  },
};

module.exports = commentsControllers;

// .$. operador posicional que limita el contenido del array con la condicion de la matriz
// entonces va a buscar el primer elemento que cumpla la condicion, o sea que buscara en
//comments el primer elemento que tenga el id que coincida con el id que le pasamos en la url
