(() => {
  const socket = io.connect('http://localhost:3000');

  socket.emit('getAllComments', { bookId: 1 }, (answer) => {
    console.log(answer);
  });

  socket.emit('addComment', { data: 'ggggggggggggggggg' }, (answer) => {
    console.log(answer);
  });
})();
