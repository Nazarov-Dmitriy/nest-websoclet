(() => {
  const socket = io.connect('http://localhost:3000');

  socket.emit('getAllComments', (answer) => {
    console.log(answer + 1);
  });

  // socket.emit('message', { data: 'Hello' }, (answer) => {
  //   console.log(answer);
  // });
})();
