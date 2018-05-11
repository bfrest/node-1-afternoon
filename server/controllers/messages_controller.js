let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    // destructures the text and time from the message
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    // gets the text from the message
    const { text } = req.body;
    // gets the id of the message (from the url parameters)
    const updateID = req.params.id;
    // finds the message from the array using the index
    const messageIndex = messages.findIndex(message => message.id == updateID);
    // sets the message to the one with the index of messageIndex
    let message = messages[messageIndex];
    // updates the new info on the message based on what what passed
    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    // gets the id from the url id parameter
    const deleteID = req.params.id;
    // finds the place in the array of the message
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }
};
